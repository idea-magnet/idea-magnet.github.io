const gulp = require("gulp");
const gutil = require("gulp-util");

// All tasks
gulp.task("clean", [
		"clean:script", "clean:style", "clean:img", "clean:html"
	]);
gulp.task("build", [ "script", "style", "img", "html" ]);
gulp.task("default", [ "build", "watch" ]);

const connect = require("gulp-connect");
gulp.task("connect", function() {
	connect.server({
		root: "dist/",
		port: 3000,
		livereload: true
	});
});

// Notification
const notifier = require("node-notifier");
const notify = require("gulp-notify");
function notiOpts(msg, onLast) {
	const opts = {
		title: "IdeaMagnet Landing Page", message: msg, sound: true
	};
	if (typeof onLast !== "undefined") opts.onLast = onLast;
	return opts;
}

// Script building
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.babel.js");
const webpackCompiler = webpack(webpackConfig);
gulp.task("script", [ "clean:script" ], (callback) => {
	webpackCompiler.run((err, stats) => {
		if (err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({ colors: true }));
		notifier.notify(notiOpts("All scripts are built!"));
		connect.reload();
		callback();
	});
});

// Style building
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
gulp.task("style", [ "clean:style" ], () => {
	return gulp.src("./src/sass/**/*.{css,scss}")
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: process.env.NODE_ENV === "production" ?
				"compressed" : "nested",
			includePaths: [
				"./node_modules/bootstrap/scss/"
			]}).on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(rename("bundle.css"))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest("./dist/css/"))
		.pipe(connect.reload())
		.pipe(notify(notiOpts("All stylesheets are built!", true)));
});

// Images building
const imagemin = require("gulp-imagemin");
gulp.task("img", [ "clean:img" ], () => {
	return gulp.src("./src/img/**/*.{ico,png,jpg,gif,svg}")
		.pipe(process.env.NODE_ENV === "production" ? imagemin() : gutil.noop())
		.pipe(gulp.dest("./dist/img/"))
		.pipe(connect.reload())
		.pipe(notify(notiOpts("All images are built!", true)));
});

// HTML building
const clone = require("gulp-clone");
const es = require("event-stream");
gulp.task("html", [ "clean:html" ], () => {
	const index = gulp.src("./src/index.html");
	const err404 = index.pipe(clone()).pipe(rename("404.html"));
	const favicon = gulp.src("./src/favicon/favicon.ico");
	const favicon2 = gulp.src("./src/favicon/**/*.{png,xml,json}")
		.pipe(rename(function(path) { path.dirname += "/favicon"; }));
	return es.merge([ index, err404, favicon, favicon2 ])
		.pipe(gulp.dest("./dist/"))
		.pipe(connect.reload())
		.pipe(notify(notiOpts("HTML is built!", true)));
});

// Clean
const clean = require("del");
gulp.task("clean:script", (callback) => {
	clean([ "./dist/js/**/*.{js,js.map}" ]).then((delPaths) => {
			gutil.log("Deleted script(s):\n", delPaths.join("\n"));
			notifier.notify(notiOpts("All scripts are cleaned!"));
			callback();
		}).catch((err) => {
			throw new gutil.PluginError("clean:script", err);
		});
});
gulp.task("clean:style", (callback) => {
	clean([ "./dist/css/**/*.{css,css.map}" ]).then((delPaths) => {
			gutil.log("Deleted style(s):\n", delPaths.join("\n"));
			notifier.notify(notiOpts("All styles are cleaned!"));
			callback();
		}).catch((err) => {
			throw new gutil.PluginError("clean:style", err);
		});
});
gulp.task("clean:img", (callback) => {
	clean([ "./dist/img/**/*.{ico,png,jpg,gif,svg}" ]).then((delPaths) => {
			gutil.log("Deleted image(s):\n", delPaths.join("\n"));
			notifier.notify(notiOpts("All images are cleaned!"));
			callback();
		}).catch((err) => {
			throw new gutil.PluginError("clean:img", err);
		});
});
gulp.task("clean:html", (callback) => {
	clean([ "./dist/**/*.html", "./dist/favicon.ico" ]).then((delPaths) => {
			gutil.log("Deleted html:\n", delPaths.join("\n"));
			notifier.notify(notiOpts("HTML is cleaned!"));
			callback();
		}).catch((err) => {
			throw new gutil.PluginError("clean:html", err);
		});
});

gulp.task("watch", (callback) => {
	gulp.watch("./src/js/**/*.{js,jsx}", [ "script" ]);
	gulp.watch("./src/sass/**/*.{css,scss}", [ "style" ]);
	gulp.watch("./src/img/**/*.{png,jpg,gif,svg}", [ "img" ]);
	gulp.watch("./src/**/*.{html,ico}", [ "html" ]);
	callback();
});

const path = require("path");
const webpack = require("webpack");

module.exports = {
	cache: true,
	entry: path.join(__dirname, "src/js/index.jsx"),
	output: { path: path.join(__dirname, "dist/js/"), filename: "bundle.js" },
	resolve: { extensions: [ "", ".webpack.js", ".web.js", ".js", ".jsx" ] },
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: "uglify-loader"
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "uglify-loader!babel?stage=0&optional[]=runtime"
			}
		]
	},
	devtool: "#source-map",
	plugins: [
		new webpack.DefinePlugin({
			"process.env": { "NODE_ENV": JSON.stringify("production") }
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			minimize: true,
			compress: { warnings: false }
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			_: "lodash"
		})
	]
};

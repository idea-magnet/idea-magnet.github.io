import $ from "jquery";

export function solveBrowserCompat() {
    const nua = navigator.userAgent;
    if (nua.match(/IEMobile\/10\.0/)) {
        const msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode("@-ms-viewport{width:auto!important}")
        );
        document.querySelector("head").appendChild(msViewportStyle);
    }
    if (nua.indexOf("Mozilla/5.0") > -1 && nua.indexOf("Android ") > -1 &&
        nua.indexOf("AppleWebKit") > -1 && nua.indexOf("Chrome") === -1) {
        // $("select.form-control").removeClass("form-control").css("width", "100%");
    }
}

"use strict";

$(function () {
    FastClick.attach(document.body);
});

window.MyScope = window.MyScope || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    document.addEventListener("deviceready", function() { navigator.splashscreen.hide(); });

    MyScope.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyScope,
        navigationType: MyScope.config.navigationType,
        navigation: [
            {
                title: "Home",
                action: "#home",
                icon: "home"
            },
            {
                title: "My Library",
                action: "#quadrant/library",
                icon: "favorites"
            },
            {
                title: "Settings",
                action: "#settings",
                icon: "info"
            }
        ]
    });

    MyScope.app.router.register(":view", { view: "home" });
    MyScope.app.router.register(":view", { view: "library" });
    MyScope.app.router.register(":view", { view: "settings" });
    MyScope.app.router.register(":view/:id", { view: "procedure", id: null });
    MyScope.app.router.register(":view/:id", { view: "images", id: null });
    MyScope.app.router.register(":view/:id", { view: "videos", id: null });
    MyScope.app.router.register(":view/:id/:color", { view: "category", id: null, color: null });

    MyScope.app.navigate();
});
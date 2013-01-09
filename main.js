"use strict";

define([
    "/jquery.js"
], function () {
    function init(config) {
        var self = this;
        
        config.container = "#content";
        config.tabs = ".nav-tabs li";
        config.options = {};
        config.options.classes = { selected: "active" }
        
        var container = $(config.container, self.dom);
        
        $(config.tabs, self.dom).on('click', function() {
            $(config.tabs).removeClass(config.options.classes.selected);
            $(config.container).html("");
            $(this).attr("class", config.options.classes.selected);
            M(config.container, $(this).attr("data-miid"));
        });
    }
    
    return init;
});

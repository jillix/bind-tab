"use strict";

define([
    "/jquery.js"
], function () {

    var self;

    function init(config) {
        self = this;
        
        if(config.sample) {
            buildSampleConfiguration();
        }
        
        var container = $(config.container, self.dom);
        
        // On page load
        M(config.container, config.first);
        
        // On tab click
        $(config.tabs, self.dom).on('click', function() {
            $(config.tabs).removeClass(config.options.classes.selected);
            $(config.container).html("");
            $(this).addClass(config.options.classes.selected);
            M(config.container, $(this).attr("data-miid"));
        });
    }
    
    function buildSampleConfiguration(config) {
        config.container = "#content";
        config.tabs = ".nav-tabs li";
        config.options = {};
        config.options.classes = { selected: "active" };
        config.first = "tabContent1";
    }
    
    return init;
});

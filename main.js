'use strict';

var self;

module.exports = function (config) {
    self = this;

    if (config.sample) {
        buildSampleConfiguration(config);
    }

    if (typeof this.onload === 'function') {
        this.onload();
    }

    var container = $(config.container, self.dom);

    // On tab click
    $(config.tabs, self.dom).on('click', function() {

        // Change the hash in URL
        if (config.options.hash) {
            if (!$(this).attr('data-hash')) {
                return;
            }

            window.location.hash = $(this).attr('data-hash');
        } else {
            activateTab(config, $(this));
        }

        return false;
    });

    // hashchange handler
    $(window).on('hashchange', function () {
        var tab = $('[data-hash=' + window.location.hash.substring(1) +  ']');
        activateTab(config, tab);
    })

    // Load first content        
    if ((config.options.first) && (!window.location.hash)) {
        M(config.container, config.options.first);
        return;
    }

    // Load the right content for hash
    if ((window.location.hash) && (config.options.hash)) {
        var tab = $('[data-hash=' + window.location.hash.substring(1) +  ']');
        activateTab(config, tab);
        return;
    }
}

function activateTab(config, tab) {

    if (!tab.length) {
        return;
    }

    // TODO we cannot rely that the selected class exists and based on this
    // to test the current tab. The current miid should be buffered
    var active = $(config.tabs).parent().find('.' + config.options.classes.selected);
    if (tab.attr('data-miid') === active.attr('data-miid')) {
        return;
    }

    // Removes the active class
    $(config.tabs).removeClass(config.options.classes.selected);

    // Removes the content of container
    $(config.container).html('');

    // Adds active class
    tab.addClass(config.options.classes.selected);

    // Sets the content in container
    M(config.container, tab.attr('data-miid'));
}

function buildSampleConfiguration(config) {
    config.container = '#content';
    config.tabs = '.nav-tabs li';
    config.options = {};
    config.options.classes = { selected: 'active' };
    config.options.first = 'tabContent1';
    config.options.hash = true;
}


"use strict";

define(["adioo/bind/repeater"], function (Repeater) {
    
    /*
        config = {
            
            target: "#selector",
            tabConainer: "#selector",
            noTabSelected: "#selector",
            itemTag: "li",
            itemHTML: "<span></span>",
            loadTabOnInit: {
                    
                tabId: "domains",
                miid: "domain_manager"
            },
            source: {
                name: "getData"
            },
            data: [{}, {}, ...]
        }
        
        to create tabs that cotains a link use bind configuration options ex.:
        bind = [{
            val: "Tab Title",
            query: "a",
            tabId: "myId",
            itemHTML: "<a href='http://myUrl.com'/>"
        }]
    */
    var modCache = {};
    
    var Tab = {
    
        show: function (id, miid) {
            
            if (this.tabs[id]) {
                
                for (var tab in this.tabs) {
                    
                    if (tab !== id) {
                    
                        this.tabs[tab].style.display = "none";
                    }
                }
                
                this.noTabSelected.style.display = "none";
                this.tabs[id].style.display = "block";
                
                if (miid && !modCache[miid]) {
                    
                    modCache[miid] = 1;
                    
                    N.mod(this.tabs[id], miid);
                }
            }
        }
    };
    
    function renderTabs(err, result) {
        
        if (!err) {
            
            var df = document.createDocumentFragment();
            
            for (var i = 0, l = result.length; i < l; ++i) {
                
                var elm = document.createElement(this.tabTag);
                
                elm.setAttribute("id", result[i].tabId);
                this.tabs[result[i].tabId] = elm;
                
                df.appendChild(elm);
                
                if (this.loadTabOnInit && this.loadTabOnInit.tabId === result[i].tabId) {
                    
                    N.mod(elm, this.loadTabOnInit.miid);
                }
            }
            
            this.tabContainer.appendChild(df);
        }
    }
    
    function init(config) {
    
        var tab = N.ext(Tab, Repeater(this), config);
        
        tab.tabs = {};
        tab.target = this.dom.querySelector(config.target);
        tab.tabContainer = this.dom.querySelector(config.tabContainer);
        tab.noTabSelected = this.dom.querySelector(config.noTabSelected);
        
        if (tab.source) {
        
            tab.fetch(renderTabs);
        }
        
        if (tab.bind) {
            
            tab.render(tab.data);
        }
        
        return tab;
    }
    
    return init;
});
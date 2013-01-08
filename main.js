"use strict";

define([], function () {
    
    /*
        tabConf = {
            
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
            
            if (this.conf.tabs[id]) {
                
                for (var tab in this.conf.tabs) {
                    
                    if (tab !== id) {
                    
                        this.conf.tabs[tab].style.display = "none";
                    }
                }
                
                this.conf.noTabSelected.style.display = "none";
                this.conf.tabs[id].style.display = "block";
                
                if (miid && !modCache[miid]) {
                    
                    modCache[miid] = 1;
                    
                    N.mod(this.conf.tabs[id], miid);
                }
            }
        }
    };
    
    function renderTabs(err, result) {
        
        if (!err) {
            
            var df = document.createDocumentFragment();
            
            for (var i = 0, l = result.length; i < l; ++i) {
                
                var elm = document.createElement(this.conf.tabTag);
                
                elm.setAttribute("id", result[i].tabId);
                this.conf.tabs[result[i].tabId] = elm;
                
                df.appendChild(elm);
                
                if (this.conf.loadTabOnInit && this.conf.loadTabOnInit.tabId === result[i].tabId) {
                    
                    N.mod(elm, this.conf.loadTabOnInit.miid);
                }
            }
            
            this.conf.tabContainer.appendChild(df);
        }
    }
    
    function init(config) {
        var self = this;
    }
    
    return init;
});

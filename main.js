"use strict";

define(["adioo/bind/repeater"], function (Repeater) {
    
    /*
        config = {
            
            itemTag: "li",
            itemHTML: "<span></span>",
            source: {
                name: "getData"
            },
            bind: [
                {
                    
                }
            ]
        }
    */
    
    var Tab = {
    
        show: function (id) {
            
            if (this.tabs[id]) {
                
                for (var tab in this.tabs) {
                    
                    if (tab !== id) {
                    
                        this.tabs[tab].style.display = "none";
                    }
                }
                
                this.noTabSelected.style.display = "none";
                this.tabs[id].style.display = "block";
            }
        },
        
        // TODO open new window or reload current window with new location
        url: function (location, newWindow) {
            
            if (newWindow) {
                
                
            }
        }
    };
    
    function init(config) {
        
        var tab = N.clone(Tab, Repeater(this), config);
        
        tab.tabs = {};
        tab.target = tab.dom.querySelector(tab.target);
        tab.tabContainer = tab.dom.querySelector(tab.tabContainer);
        tab.noTabSelected = tab.dom.querySelector(tab.noTabSelected);
        
        tab.fetch(function (err, result) {
            
            if (!err) {
            
                for (var i = 0, l = result.length; i < l; ++i) {
                    
                    var elm = document.createElement(tab.tabTag);
                    elm.setAttribute("id", result[i].tabId);
                    
                    tab.tabs[result[i].tabId] = elm;
                    
                    tab.tabContainer.appendChild(elm);
                    
                    N.mod(elm, result[i].miid);
                }
            }
        });
        
        return tab;
    }
    
    return init;
});
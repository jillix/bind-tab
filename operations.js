var send = require(CONFIG.root + "/core/send.js").send;
var data = [
    
    {
        val: "Domains",
        tabId: "domains",
        miid: "domain_manager",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["domains", "miid"]
            }
        }
    },
    {
        val: "Apps",
        tabId: "apps",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["apps"]
            }
        }
    },
    {
        val: "Users",
        tabId: "users",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["users"]
            }
        }
    },
    {
        val: "Roles",
        tabId: "roles",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["roles"]
            }
        }
    },
    {
        val: "Modules",
        tabId: "modules",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["modules"]
            }
        }
    },
    {
        val: "Operations",
        tabId: "operations",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["operations"]
            }
        }
    }
];

exports.getData = function(link) {
    
    send.ok(link.res, data);
};
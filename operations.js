var send = require(CONFIG.root + "/core/send.js").send;
var data = [
    
    {
        val: "Domains",
        tabId: "domains",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["domains", "domain_manager"]
            }
        }
    },
    {
        val: "Apps",
        tabId: "apps",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["apps", "app_manager"]
            }
        }
    },
    {
        val: "Users",
        tabId: "users",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["users", "user_manager"]
            }
        }
    },
    {
        val: "Roles",
        tabId: "roles",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["roles", "role_manager"]
            }
        }
    },
    {
        val: "Modules",
        tabId: "modules",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["modules", "module_manager"]
            }
        }
    },
    {
        val: "Operations",
        tabId: "operations",
        events: {
            
            "mouseup": {
            
                method: "show",
                args: ["operations", "operation_manager"]
            }
        }
    }
];

exports.getData = function(link) {
    
    send.ok(link.res, data);
};
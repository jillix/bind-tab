var send = require(CONFIG.root + "/core/send.js").send;
var data = [
    
    {
        val: "Domains",
        tabId: "domains",
        events: [{args: ["domains", "domain_manager"]}]
    },
    {
        val: "Apps",
        tabId: "apps",
        events: [{args: ["apps", "app_manager"]}]
    },
    {
        val: "Users",
        tabId: "users",
        events: [{args: ["users", "user_manager"]}]
    },
    {
        val: "Roles",
        tabId: "roles",
        events: [{args: ["roles", "role_manager"]}]
    },
    {
        val: "Modules",
        tabId: "modules",
        events: [{args: ["modules", "module_manager"]}]
    },
    {
        val: "Operations",
        tabId: "operations",
        events: [{args: ["operations", "operation_manager"]}]
    }
];

exports.getData = function(link) {
    
    send.ok(link.res, data);
};
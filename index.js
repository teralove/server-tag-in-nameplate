module.exports = function ServerTagInNameplate(dispatch) {
    
    const servers = {
        // NA
        4004: '[TR] ',
        4009: '[CH] ',
        4012: '[MT] ',
        4024: '[AV] ',
        4032: '[FF] ',
        // EU
        // RU
        // KR
        // JP
        // TW
        // TH
    };
    
    let serverId = 0;
    
    dispatch.hook('S_LOGIN', 10, (event) => {
        serverId = event.serverId;
        //console.log('S_LOGIN.serverId: ' + event.serverId);
    });
    
    dispatch.hook('S_SPAWN_USER', 13, (event) => {
        // changing player names from your server can cause issues (inviting, etc)
        if (serverId != event.serverId) {
            if (servers[event.serverId]) {
                event.name = servers[event.serverId] + event.name;
                return true;
            }
        }
    });
    
}

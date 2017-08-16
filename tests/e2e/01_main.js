
"use strict";
module.exports = {
    before : function(client) {
        console.log('Setting up client');
        client
            .init()
            .pause(1000);
    },
    after : function(client) {
        console.log('Closing down the client');
        client.end();
    },

    'A user can see a title in their browser' : function (client) {
        client.assert.title("context");
    }
};
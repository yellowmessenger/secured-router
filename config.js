'use strict';

module.exports = {
    database: {
        mongo: {
            replSetUrl: 'mongodb://mongodb-0:27017,mongodb-1:27017,mongodb-2:27017',
            replSetOption: '?replicaSet=rs0',
            host: 'mongodb-0',
            port: 27017,
            options: {
                server: {
                    poolSize: 25
                },
                replset: { rs_name: 'rs0' }
            }
        }
    }
};


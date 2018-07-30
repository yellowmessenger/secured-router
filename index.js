'use strict';

let isBotAdmin = function (bot, req) {
    if (req.user) {
        for (let i = 0; i < req.user.roles.length; i++) {
            if (bot === req.user.roles[i].owner && ['ROLE_BOT_ADMIN', 'ROLE_BOT_SUPER_ADMIN'].indexOf(req.user.roles[i].role) !== -1) {
                return true;
            }
        }
    }
    return false;
};

let post = function (router, route, secured, roles, callback) {
    router.post(route, function (req, res, next) {
        if (!secured) {
            callback(req, res, next);
            return;
        }
        if (req.user) {
            if (!roles || roles.length === 0 || (!req.cookies['bot'] && !req.query['bot'])) {
                callback(req, res, next);
                return;
            }

            let bot = req.query['bot'] || req.cookies['bot'];

            for (let i = 0; i < req.user.roles.length; i++) {
                if (bot === req.user.roles[i].owner && roles.indexOf(req.user.roles[i].role) !== -1) {
                    req.bot = bot;
                    delete req.query['bot'];
                    callback(req, res, next);
                    return;
                }
            }
        }
        res.sendStatus(401);
    });
};

let get = function (router, route, secured, roles, callback) {
    router.get(route, function (req, res, next) {
        if (!secured) {
            callback(req, res, next);
            return;
        }
        if (req.user) {
            if (!roles || roles.length === 0 || (req.cookies && !req.cookies['bot'] && !req.query['bot'])) {
                callback(req, res, next);
                return;
            }

            let bot = req.query['bot'] || req.cookies['bot'];

            for (let i = 0; i < req.user.roles.length; i++) {
                if (bot === req.user.roles[i].owner && roles.indexOf(req.user.roles[i].role) !== -1) {
                    req.bot = bot;
                    delete req.query['bot'];
                    callback(req, res, next);
                    return;
                }
            }
        }
        res.sendStatus(401);
    });
};

let patch = function (router, route, secured, roles, callback) {
    router.patch(route, function (req, res, next) {
        if (!secured) {
            callback(req, res, next);
            return;
        }
        if (req.user) {
            if (!roles || roles.length === 0 || (req.cookies && !req.cookies['bot'] && !req.query['bot'])) {
                callback(req, res, next);
                return;
            }

            let bot = req.query['bot'] || req.cookies['bot'];

            for (let i = 0; i < req.user.roles.length; i++) {
                if (bot === req.user.roles[i].owner && roles.indexOf(req.user.roles[i].role) !== -1) {
                    req.bot = bot;
                    delete req.query['bot'];
                    callback(req, res, next);
                    return;
                }
            }
        }
        res.sendStatus(401);
    });
};

let deleteMethod = function (router, route, secured, roles, callback) {
    router.delete(route, function (req, res, next) {
        if (!secured) {
            callback(req, res, next);
            return;
        }
        if (req.user) {
            if (!roles || roles.length === 0 || (req.cookies && !req.cookies['bot'] && !req.query['bot'])) {
                callback(req, res, next);
                return;
            }

            let bot = req.query['bot'] || req.cookies['bot'];

            for (let i = 0; i < req.user.roles.length; i++) {
                if (bot === req.user.roles[i].owner && roles.indexOf(req.user.roles[i].role) !== -1) {
                    req.bot = bot;
                    delete req.query['bot'];
                    callback(req, res, next);
                    return;
                }
            }
        }
        res.sendStatus(401);
    });
};

module.exports = {
    post,
    get,
    deleteMethod,
    patch,
    isBotAdmin
};

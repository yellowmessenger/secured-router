const Promise = require('bluebird');
const config = require('config.js');
mongoose.Promise = Promise;

const db = mongoose.createConnection(config.database.mongo.replSetUrl + '/logs' + config.database.mongo.replSetOption);

// Schema Definition
const logSchema = mongoose.Schema({
    botId: String,
    userId: String,
    comment: String,
    request: mongoose.Schema.Types.Mixed,
    created: Date
});

logSchema.index({botId: 1});
logSchema.index({botId: 1, userId:1});

const Log = db.model('logs', logSchema);

const create = (logObj) => {
    const logToBeSaved = new Log(logObj);
    return logToBeSaved.save();
};

module.exports = {
    create
}

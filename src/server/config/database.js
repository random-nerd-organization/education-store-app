const mongoose = require('mongoose');   

const User = require('../models/User')

module.exports = (config) => {
    try {
        mongoose.connect(`${config.dbPath}/random-store`, {
            promiseLibrary: global.Promise,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        const db = mongoose.connection
        db.once('open', async err => {
            if (err) throw err
            try {
                await User.seedAdminUser()
                console.log('Database ready')
            } catch (reason) {
                console.log('Something went wrong');
                console.log(reason);
            }
        })
        db.on('error', reason => {
            console.log(reason)
        })
    } catch (error) {
        console.log(`Mongoose can't connect, error message: ${error.message}`);
    }
} 
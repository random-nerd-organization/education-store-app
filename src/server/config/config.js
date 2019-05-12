module.exports = {
    development: {
        port: process.env.PORT || 8080,
        // dbPath: 'mongodb://localhost:27017/my-db'
        dbPath: 'mongodb+srv://admin:admin@cluster0-vw4qk.mongodb.net/random-store?retryWrites=true',
    },
    production: {
        port: process.env.PORT || 8080,
        dbPath: 'mongodb+srv://admin:admin@cluster0-vw4qk.mongodb.net/random-store?retryWrites=true',
    }
}
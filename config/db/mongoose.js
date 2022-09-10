const mongoose = require('mongoose');

const env = process.env.NODE_ENV || 'development';
const config = require('../env/db.json')[env];

exports.connect = () => {
    console.log(config.uri)
    mongoose.connect(config.uri, {
        useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
        console.log(`---  Connected to ${process.env.NODE_ENV || 'Development'} Database  ---`);
    });
    mongoose.connection.on('error', (err) => {
        console.error(`--- Error Occured While Connecting to ${process.env.NODE_ENV || 'Development'} Database ---`);
    });
    mongoose.connection.on('disconnect', () => {
        console.log(`--- Disconnected From ${process.env.NODE_ENV || 'Development'} Database ---`)
    });

}
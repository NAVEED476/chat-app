const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error occurred: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB; 

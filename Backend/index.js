import mongoose from 'mongoose'
import { configDotenv } from 'dotenv';
// Load environment variables from .env file
configDotenv();

const url = process.env.db_url;
async function connect() {
    try {
        await mongoose.connect(url);
        console.log('connected succesfully')
    }
    catch (err) {
        console.log("error", err)
    }

};

export default connect();
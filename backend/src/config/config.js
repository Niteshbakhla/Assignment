import { config } from "dotenv";
config();

const _config = {
            GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
            MONGO_URI: process.env.MONGO_URI,
            JWT_SECRET: process.env.JWT_SECRET,
            NODE_ENV: process.env.NODE_ENV
}

export default Object.freeze(_config);
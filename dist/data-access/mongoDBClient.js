"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDB = void 0;
const mongodb_1 = require("mongodb");
const mongoDB = async () => {
    const connectionString = process.env.MONGO_URI || "";
    const databaseName = process.env.MONGO_DATABASE_NAME || "";
    const client = new mongodb_1.MongoClient(connectionString);
    let conn;
    try {
        conn = await client.connect();
    }
    catch (e) {
        console.error(e);
    }
    return conn === null || conn === void 0 ? void 0 : conn.db(databaseName);
};
exports.mongoDB = mongoDB;

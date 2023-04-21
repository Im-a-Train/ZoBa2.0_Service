import { Db, MongoClient } from "mongodb";

export const mongoDB = async (): Promise<Db | undefined> => {
    const connectionString = process.env.MONGO_URI || "";
    const databaseName = process.env.MONGO_DATABASE_NAME || "";
    const client = new MongoClient(connectionString);

    let conn;
    try {
        conn = await client.connect();

    } catch (e) {
        console.error(e);
    }

    return conn?.db(databaseName);
}
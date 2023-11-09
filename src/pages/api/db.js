require("dotenv").config();
import mysql from "mysql2";

export async function query({ query, values = []}) {
  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  }catch (error) {
    throw Error(error.message);
  }
}
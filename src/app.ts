import express from "express";
import mysql from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config();

const connectMySql = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // port: 3306,
    // database: "test",
  });

  return connection;
};

connectMySql();

const app = express();

app.listen("6000", () => {
  console.log("One Shot Life !");
});

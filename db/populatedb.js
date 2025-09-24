#! /usr/bin/env node
require('@dotenvx/dotenvx').config();
const { Client } = require("pg");

// DEBUG: Check if DATABASE_URL is loaded
console.log('DATABASE_URL:', process.env.DATABASE_URL);

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username) 
VALUES
  ('Hello world!', 'Bryan'),
  ('Learning PostgreSQL', 'Odin'),
  ('Building apps', 'Damon');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();

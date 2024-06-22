import { Client } from 'pg';

// Async function to insert data into a table
async function insertData() {
  const client = new Client({
    connectionString: "postgresql://sushantsp14:xhe7PKJu0Ymz@ep-little-haze-61942247.us-east-2.aws.neon.tech/test?sslmode=require/users"
  });

  try {
    await client.connect(); // Ensure client connection is established
    const createQuery = `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`;
    const res = await client.query(createQuery);
    console.log(res);
  } catch (err) {
    console.error('Error during the creation:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();
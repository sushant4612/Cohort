// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://sushantsp14:xhe7PKJu0Ymz@ep-little-haze-61942247.us-east-2.aws.neon.tech/test?sslmode=require"
})

async function createUsersTable(username: string, email : string, password : string) {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ('$1', '$2', '$3')
    `,[ username, email, password]);
    console.log(result)
}

createUsersTable("sushant", "sushant@gmail.com", "1324214sadbaks");
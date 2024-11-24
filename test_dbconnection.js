const { Client } = require('pg');

// Use the provided connection string
const connectionString = 'postgres://aditya:Aspirine123!@localhost:5432/postgres';

const client = new Client({ connectionString });

async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to spaak database!');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  } finally {
    await client.end();
  }
}

testConnection();

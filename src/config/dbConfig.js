require('dotenv').config(); // Load environment variables from .env file

const isDevelopment = process.env.NODE_ENV === 'development';



const config = {
  HOST: isDevelopment ? process.env.DB_HOST_DEV : process.env.DB_HOST,
  PORT: isDevelopment ? process.env.DB_PORT_DEV : process.env.DB_PORT,
  USER: isDevelopment ? process.env.DB_USER_DEV : process.env.DB_USER,
  PASSWORD: isDevelopment ? process.env.DB_PASSWORD_DEV : process.env.DB_PASSWORD,
  DB: isDevelopment ? process.env.DB_NAME_DEV : process.env.DB_NAME,
  dialect: isDevelopment ? process.env.DB_DIALECT_DEV : process.env.DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = config;
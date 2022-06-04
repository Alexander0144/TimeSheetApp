require("process");
require("dotenv").config();

const env = {
    api: {
      port: process.env.SERVER_PORT || 5600,
      host: process.env.SERVER_HOST || "localhost",
      host_alias: process.env.SERVER_HOST_DOMAIN_NAME, 
      protocol: process.env.URLS_PROTOCOL,
      api_root: process.env.URLS_API_ROOT,
      stage: process.env.STAGE,
    },
    db: {
        dialect: process.env.DIALECT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
  };
  
  module.exports = env;
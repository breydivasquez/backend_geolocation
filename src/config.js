require("dotenv").config();

const envc = process.env;
const config = {
  env: envc.NODE_ENV || "development",
  development: {
    server: {
      port: envc.API_PORT
    },
    api: {
      main: "/api/v1",
    },
    db: {
      host: envc.DB_PG_HOST,
      port: envc.DB_PG_PORT,
      user: envc.DB_PG_USER,
      password: envc.DB_PG_PASSWORD,
      database: envc.DB_PG_NAME
    }
  },
  production: {
    server: {
      port: envc.API_PORT
    }
  },
  api: {
    main: "/api/v1",
  },
  db: {
    host: envc.DB_PG_HOST,
    port: envc.DB_PG_PORT,
    user: envc.DB_PG_USER,
    password: envc.DB_PG_PASSWORD,
    database: envc.DB_PG_NAME
  }
};

module.exports =
  config.env == "production" ? config.production : config.development;

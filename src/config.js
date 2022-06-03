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
    },
    geocoding: {
      apiMymappi: envc.BASE_URL_GEOCODING_MYMAPPI,
      keyMymappi: envc.API_KEY_GEOCODING_MYMAPPI,
      keyGoogle: envc.API_KEY_GEOCODING_GOOGLE,
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
  },
  geocoding: {
    api: envc.BASE_URL_GEOCODING,
    key: envc.API_KEY_GEOCODING
  }  
};

module.exports =
  config.env == "production" ? config.production : config.development;

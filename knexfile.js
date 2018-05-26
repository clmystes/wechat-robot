const path = require("path")

const BASE_PATH = path.join(__dirname, "db")

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost:5432/records",
    migrations: {
      directory: path.join(BASE_PATH, "migrations"),
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds"),
    },
  },
}

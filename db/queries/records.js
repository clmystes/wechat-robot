const knex = require("../connection")

function addRecord(record) {
  return knex("records")
    .insert(record)
    .returning("*")
}

module.exports = {
  addRecord,
}

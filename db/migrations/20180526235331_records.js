exports.up = function(knex, Promise) {
  return knex.schema.createTable("records", table => {
    table.increments()
    table.string("name").notNullable()
    table.string("record").notNullable()
    table.timestamp("created_at").defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("records")
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("records")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("records").insert([
        { name: "lee", record: "test" }
      ])
    })
}


exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments();
        /* critical: Vin, Make, Model, Mileage 
           allows null: type and status
        */
        table.string('VIN', 128).notNullable();
        table.string('Make', 128).notNullable();
        table.string('Model', 128).notNullable();
        table.integer('Mileage').notNullable();

        table.string('type', 128);
        table.string('status', 128);

        table.timestamps(true, true);
      })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};

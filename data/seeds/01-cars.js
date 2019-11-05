
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 'JH4KA8160NC005601', Make: 'Acura', Model: 'Legend', Mileage: 120000, type: 'manual', status: 'clean' },
        {id: 2, VIN: '1G8AZ52F23Z114214', Make: 'Saturn', Model: 'Ion', Mileage: 180478, type: 'auto', status: 'salvage' },
        {id: 3, VIN: 'JF1GV7F67DG002982', Make: 'Subary', Model: 'Impreza', Mileage: 20630, type: 'manual', status: 'clean' },
      ]);
    });
};

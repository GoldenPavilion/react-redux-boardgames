# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Leonardo", password: "lullaby", email: "leonardo@tmnt.com", location: "New York, NY", game_host: true);
User.create(username: "Donatello", password: "lullaby", email: "donatello@tmnt.com", location: "New York, NY", game_host: false);

Game.create(
    name: "Ticket to Ride", 
    year_published: 2001,
    min_players: 2, 
    max_players: 5,
    min_playtime: 45,
    max_playtime: 90,
    description_preview: "TRAINS ARE FUN!"
)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Leonardo", password: "password", email: "leonardo@tmnt.com", location: "New York, NY", game_host: true);
User.create(username: "Donatello", password: "password", email: "donatello@tmnt.com", location: "New York, NY", game_host: false);
User.create(username: "Michaelangelo", password: "password", email: "mikey@tmnt.com", location: "New York, NY", game_host: false);
User.create(username: "Raphael", password: "password", email: "raphael@tmnt.com", location: "New York, NY", game_host: false);

Game.create(
    name: "Root", 
    year_published: 2018,
    min_players: 2, 
    max_players: 4,
    min_playtime: 60,
    max_playtime: 90,
    description_preview: "Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629324760985.jpg?format=webp"
)

Game.create(
    name: "Scythe", 
    year_published: 2016,
    min_players: 1, 
    max_players: 5,
    min_playtime: 90,
    max_playtime: 120,
    description_preview: "Scythe gives players almost complete control over their fate. Other than each player's individual hidden objective card, the only elements of luck or variability are 'Encounter' cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness.",
    img: "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/scythe-board-game.jpg?v=1611090922"
)

Game.create(
    name: "Gloomhaven", 
    year_published: 2017,
    min_players: 1, 
    max_players: 4,
    min_playtime: 60,
    max_playtime: 150,
    description_preview: "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254920151-51ulRXlJ7LL.jpg?format=webp"
)

Game.create(
    name: "Pandemic", 
    year_published: 2008,
    min_players: 2, 
    max_players: 4,
    min_playtime: 45,
    max_playtime: 60,
    description_preview: "In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254186140-51iNoyxoamL.jpg?format=webp"
)

Game.create(
    name: "Codenames", 
    year_published: 2015,
    min_players: 2, 
    max_players: 8,
    min_playtime: 15,
    max_playtime: 30,
    description_preview: "The two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254183526-51f6ysXCMmL.jpg?format=webp"
)

Game.create(
    name: "Ticket to Ride", 
    year_published: 2004,
    min_players: 2, 
    max_players: 5,
    min_playtime: 45,
    max_playtime: 90,
    description_preview: "Ticket to Ride is a cross-country train adventure game. Players collect train cards that enable them to claim railway routes connecting cities throughout North America. The longer the routes, the more points they earn.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629324738308.jpg?format=webp"
)

Game.create(
    name: "Everdell", 
    year_published: 2018,
    min_players: 1, 
    max_players: 4,
    min_playtime: 60,
    max_playtime: 120,
    description_preview: "Everdell is a game of dynamic tableau building and worker placement.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1574877074147?format=webp"
)

Game.create(
    name: "Small World", 
    year_published: 2009,
    min_players: 2, 
    max_players: 5,
    min_playtime: 40,
    max_playtime: 80,
    description_preview: "Small World is designed by Philippe Keyaerts and is a fantasy-themed game similar in game play to his Vinci, which was released in 1999 by French publisher Descartes.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254992240-511JJsfrrNL.jpg?format=webp"
)

Game.create(
    name: "Azul", 
    year_published: 2017,
    min_players: 2, 
    max_players: 4,
    min_playtime: 30,
    max_playtime: 60,
    description_preview: "Azul was designed by the world famous, award-winning game author Michael Riesling. Azul captures the beautiful aesthetics of Moorish art in a contemporary board game.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254200327-61EFZADvURL.jpg?format=webp"
)

Game.create(
    name: "Viticulture", 
    year_published: 2015,
    min_players: 1, 
    max_players: 6,
    min_playtime: 90,
    max_playtime: 120,
    description_preview: "Viticulture is a worker-placement game set in the foothills of Tuscany. The Essential Edition includes the second edition of Viticulture along with several elements from the original Tuscany expansion pack, hand-picked by famed designer Uwe Rosenberg.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629323034692.jpg?format=webp"
)

Game.create(
    name: "Spirit Island", 
    year_published: 2016,
    min_players: 1, 
    max_players: 4,
    min_playtime: 90,
    max_playtime: 120,
    description_preview: "Powerful Spirits have existed on this isolated island for time immemorial. They are both part of the natural world and - at the same time - something beyond nature. Native Islanders, known as the Dahan, have learned how to co-exist with the spirits, but with a healthy dose of fear and reverence. However, now, the island has been 'discovered' by invaders from a far-off land. These would-be colonists are taking over the land and upsetting the natural balance, destroying the presence of Spirits as they go. As Spirits, you must grow in power and work together to drive the invaders from your island... before it's too late!",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254941010-61PJxjjnbfL.jpg?format=webp"
)

Game.create(
    name: "7 Wonders", 
    year_published: 2010,
    min_players: 2, 
    max_players: 7,
    min_playtime: 30,
    max_playtime: 45,
    description_preview: "You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times!",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559253945470-61dlm9QcXpL.jpg?format=webp"
)

Game.create(
    name: "The Castles of Burgundy", 
    year_published: 2011,
    min_players: 2, 
    max_players: 4,
    min_playtime: 30,
    max_playtime: 90,
    description_preview: "15th century princes from the Loire Valley devote their efforts to strategic trading and building in order to bring their estates to prosperity and prominence. Over the course of 5 rounds, collect the most points by trading, live stock farming, city building and scientific research to win!",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254202422-51mP2aJfyxL.jpg?format=webp"
)

Game.create(
    name: "Carcassonne", 
    year_published: 2000,
    min_players: 2, 
    max_players: 5,
    min_playtime: 30,
    max_playtime: 45,
    description_preview: "Each game of Carcassonne reveals a unique environment as tiles form a landscape of cities, roads, fields, and monasteries. Claim these features with your followers to win the game.",
    img: "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/carcassonne-board-game.jpg?v=1609629064"
)

Game.create(
    name: "Splendor", 
    year_published: 2014,
    min_players: 2, 
    max_players: 4,
    min_playtime: 30,
    max_playtime: 60,
    description_preview: "Splendor is a fast-paced and addictive game of chip-collecting and card development. Players are merchants of the Renaissance trying to buy gem mines, means of transportation, shops; all in order to acquire the most prestige points. If you're wealthy enough, you might even receive a visit from a noble at some point, which of course will further increase your prestige.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254164722-51AHDwGznvL.jpg?format=webp"
)

Game.create(
    name: "Pandemic Legacy: Season 1", 
    year_published: 2015,
    min_players: 2, 
    max_players: 4,
    min_playtime: 60,
    max_playtime: 75,
    description_preview: "Pandemic Legacy is a co-operative campaign game, with an overarching story-arc played through 12-24 sessions, depending on how well your group does at the game. At the beginning, the game starts very similar to basic Pandemic, in which your team of disease-fighting specialists races against the clock to travel around the world, treating disease hotspots while researching cures for each of four plagues before they get out of hand.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257833516-612BUfjuA7fL.jpg?format=webp"
)

Game.create(
    name: "Race for the Galaxy", 
    year_published: 2007,
    min_players: 2, 
    max_players: 4,
    min_playtime: 30,
    max_playtime: 60,
    description_preview: "In Race for the Galaxy from Rio Grande Games, players build galactic civilizations using game cards that represent worlds or technical and social developments.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629322825257.png?format=webp"
)

Comment.create(content: "What a great game!", user_id: 1, game_id: 1)
Comment.create(content: "This was okay, but has a little too much going on.", user_id: 1, game_id: 2)
Comment.create(content: "Endlessly replayable - as long as you have the same group. Glorious storytelling!", user_id: 1, game_id: 3)
Comment.create(content: "This game is a lot. Like, a lot, a lot.", user_id: 4, game_id: 3)
Comment.create(content: "One of the best co-op games there is!", user_id: 2, game_id: 4)
Comment.create(content: "This was okay, but has a little too much going on.", user_id: 1, game_id: 4)
Comment.create(content: "An incredible party game!", user_id: 3, game_id: 5)
Comment.create(content: "So much fun!", user_id: 1, game_id: 5)
Comment.create(content: "One of the true classic board games.", user_id: 2, game_id: 6)
Comment.create(content: "Had a great time playing this with my kids!!", user_id: 3, game_id: 8)

UserGame.create(user_id: 1, game_id: 1)
UserGame.create(user_id: 1, game_id: 3)
UserGame.create(user_id: 1, game_id: 4)
UserGame.create(user_id: 1, game_id: 5)
UserGame.create(user_id: 1, game_id: 6)
UserGame.create(user_id: 1, game_id: 8)
UserGame.create(user_id: 2, game_id: 2)
UserGame.create(user_id: 2, game_id: 7)
UserGame.create(user_id: 3, game_id: 3)
UserGame.create(user_id: 3, game_id: 5)
UserGame.create(user_id: 3, game_id: 8)
UserGame.create(user_id: 4, game_id: 6)

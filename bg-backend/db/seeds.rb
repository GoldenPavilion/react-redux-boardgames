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

Game.create(
    name: "Lords of Waterdeep", 
    year_published: 2012,
    min_players: 2, 
    max_players: 5,
    min_playtime: 60,
    max_playtime: 90,
    description_preview: "In Lords of Waterdeep, a strategy board game for 2-5 players, you take on the role of one of the masked Lords of Waterdeep, secret rulers of the city. Through your agents, you recruit adventurers to go on quests on your behalf, earning rewards and increasing your influence over the city.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629324168873.jpg?format=webp"
)

Game.create(
    name: "King of Tokyo", 
    year_published: 2011,
    min_players: 2, 
    max_players: 6,
    min_playtime: 30,
    max_playtime: 60,
    description_preview: "King of Tokyo is a game for 2 to 6 players where you play as Mutant monsters, rampaging robots, or even abominable aliens battling in a fun, chaotic atmosphere.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629324168873.jpg?format=webp"
)

Game.create(
    name: "Love Letter", 
    year_published: 2012,
    min_players: 2, 
    max_players: 4,
    min_playtime: 15,
    max_playtime: 20,
    description_preview: "All of the eligible young men (and many of the not-so-young) seek to woo the princess of Tempest. Unfortunately, she has locked herself in the Palace, and you must rely on others to bring your romantic letters to her. Will yours reach her first?",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1540911025441?format=webp"
)

Game.create(
    name: "Welcome to...", 
    year_published: 2018,
    min_players: 1, 
    max_players: 100,
    min_playtime: 25,
    max_playtime: 30,
    description_preview: "As an architect in Welcome to, you want to build the best new town in the United States during the 1950s. Players are developing estates, parks, pools, hiring employees, and more. Welcome to plays like a roll-and-write dice game in which you mark results on a scoresheet... but without dice.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1538760962647?format=webp"
)

Game.create(
    name: "Forbidden Island", 
    year_published: 2010,
    min_players: 2, 
    max_players: 4,
    min_playtime: 30,
    max_playtime: 45,
    description_preview: "Dare to discover Forbidden Island! Join a team of fearless adventurers on a do-or-die mission to capture four sacred treasures from the ruins of this perilous paradise.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629323006480.jpg?format=webp"
)

Game.create(
    name: "Power Grid", 
    year_published: 2004,
    min_players: 2, 
    max_players: 6,
    min_playtime: 120,
    max_playtime: 150,
    description_preview: "The object of Power Grid is to supply the most cities with power when someone's network gains a predetermined size. In this new edition, players mark preexisting routes between cities for connection, and then vie against other players to purchase the power plants that you use to supply the power.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1622740360001?format=webp"
)

Game.create(
    name: "Star Wars: Rebellion", 
    year_published: 2016,
    min_players: 2, 
    max_players: 4,
    min_playtime: 180,
    max_playtime: 240,
    description_preview: "In Rebellion, you control the entire Galactic Empire or the fledgling Rebel Alliance. You must command starships, account for troop movements, and rally systems to your cause.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257537582-61lhssiQPkL.jpg?format=webp"
)

Game.create(
    name: "Clue", 
    year_published: 1949,
    min_players: 3, 
    max_players: 6,
    min_playtime: 30,
    max_playtime: 60,
    description_preview: "The classic detective game! In Clue, players move from room to room in a mansion to solve the mystery of: who done it, with what, and where?",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1600449593257?format=webp"
)

Game.create(
    name: "Dead of Winter", 
    year_published: 2014,
    min_players: 2, 
    max_players: 5,
    min_playtime: 45,
    max_playtime: 120,
    description_preview: "Dead of Winter puts 2-5 players together in a small, weakened colony of survivors in a world where most of humanity are either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors with dozens of different characters in the game.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1574700781988?format=webp"
)

Game.create(
    name: "Sushi Go!", 
    year_published: 2013,
    min_players: 2, 
    max_players: 5,
    min_playtime: 15,
    max_playtime: 30,
    description_preview: "In this fast-playing card game, the goal is to grab the best combination of sushi dishes as they whiz by.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1632756769364?format=webp"
)

Game.create(
    name: "Coup", 
    year_published: 2012,
    min_players: 2, 
    max_players: 6,
    min_playtime: 15,
    max_playtime: 30,
    description_preview: "The valiant efforts of The Resistance have created discord, intrigue and weakness in the political courts of the novena royal, bringing the government to brink of collapse. But for you, a powerful government official, this is your opportunity to manipulate, bribe and bluff your way into absolute power.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254971843-51cnlYAh-6L.jpg?format=webp"
)

Game.create(
    name: "Monopoly", 
    year_published: 1933,
    min_players: 2, 
    max_players: 8,
    min_playtime: 40,
    max_playtime: 300,
    description_preview: "The thrill of bankrupting an opponent, the possibility of playing a 9 hour game, and the absolution between winning and losing, could change with the roll of the dice. Experience the ups and downs by collecting property color’s sets to build houses, and hopefully upgrading to a hotel. But don’t play just for certain colors, or else your opponent may change their strategy.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1543278754636?format=webp"
)

Game.create(
    name: "Terra Mystica", 
    year_published: 2012,
    min_players: 2, 
    max_players: 5,
    min_playtime: 60,
    max_playtime: 150,
    description_preview: "In Terra Mystica, players govern one of 14 factions seeking to terraform and colonize the landscape in their favor in order to build structures and preserve their culture.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1612658886668?format=webp"
)

Game.create(
    name: "Cosmic Encounter", 
    year_published: 2008,
    min_players: 3, 
    max_players: 5,
    min_playtime: 90,
    max_playtime: 120,
    description_preview: "Welcome to the Cosmic Age. The open skies of countless worlds are filled with speeding spaceships, and a panoply of alien species compete to populate the galaxy. Will your people choose to occupy undefended worlds, create peaceful civilizations, or ruthlessly conquer foreign planets?",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559253933920-61BaOTar9nL.jpg?format=webp"
)

Game.create(
    name: "Takenoko", 
    year_published: 2011,
    min_players: 2, 
    max_players: 4,
    min_playtime: 45,
    max_playtime: 60,
    description_preview: "Players take the role of courtesans of the Nippon emperor. They take care of his Giant Panda by growing a bamboo plantation. Their mission: to farm parcels of land, irrigate them, and have green, yellow or pink bamboo grow.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1600813549967?format=webp"
)

Game.create(
    name: "The Resistance", 
    year_published: 2009,
    min_players: 5, 
    max_players: 10,
    min_playtime: 30,
    max_playtime: 45,
    description_preview: "The Empire must fall. Our mission must succeed. By destroying their key bases, we will shatter Imperial strength and liberate our people. Yet spies have infiltrated our ranks, ready for sabotage. We must unmask them. In five nights we reshape destiny or die trying. We are the Resistance!",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1622150592383?format=webp"
)

Game.create(
    name: "Mysterium", 
    year_published: 2015,
    min_players: 2, 
    max_players: 7,
    min_playtime: 30,
    max_playtime: 60,
    description_preview: "A horrible crime has been committed on the grounds of Warwick Manor and it's up to the psychic investigators to get to the bottom of it.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559255824772-51iPxTb5g7L.jpg?format=webp"
)

Game.create(
    name: "Risk", 
    year_published: 1959,
    min_players: 2, 
    max_players: 6,
    min_playtime: 90,
    max_playtime: 120,
    description_preview: "In Risk, you focus on your strategy. You decide on your tactical scheme. You figure out where to place your troops, and who and where you will attack and how often. Every move is a risk that will bring either victory or defeat. Go for the win!",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254847937-51zyVWbt8aL.jpg?format=webp"
)

Game.create(
    name: "Sheriff of Nottingham", 
    year_published: 2014,
    min_players: 3, 
    max_players: 5,
    min_playtime: 60,
    max_playtime: 90,
    description_preview: "In Sheriff of Nottingham, players will not only be able to experience Nottingham as a merchant of the city, but each turn one player will step into the shoes of the Sheriff himself. Players declare goods they wish to bring into the city, goods that are secretly stored in their burlap sack. The Sheriff must then determine who gets into the city with their goods, who gets inspected, and who may have their goods confiscated!",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254204253-61te4F7OK2BL.jpg?format=webp"
)

Game.create(
    name: "Betrayal at House on the Hill", 
    year_published: 2004,
    min_players: 3, 
    max_players: 6,
    min_playtime: 60,
    max_playtime: 75,
    description_preview: "The creak of footsteps on the stairs, the smell of something foul and dead, the feel of something crawling down your back - this and more can be found in Betrayal at House on the Hill. This fun and suspenseful game is a new experience almost every time you play - you and your friends explore ''that creepy old place on the hill'' until enough mystic misadventures happen that one of the players turns on all of the others!",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1595268779978?format=webp"
)

Game.create(
    name: "Machi Koro", 
    year_published: 2012,
    min_players: 2, 
    max_players: 4,
    min_playtime: 15,
    max_playtime: 30,
    description_preview: "Machi Koro is a fast-paced, dice-rolling city builder. in the game, players compete to be the first person to build up their simple village into a sprawling metropolis.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629324572459.jpg?format=webp"
)

Game.create(
    name: "Through the Ages", 
    year_published: 2015,
    min_players: 2, 
    max_players: 4,
    min_playtime: 120,
    max_playtime: 240,
    description_preview: "Epic civilizations always have humble roots. The world of Through the Ages: A New Story of Civilization is diverse, unique, and all-encompassing.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254177082-51eRF2BKYLkL.jpg?format=webp"
)

Game.create(
    name: "Eldritch Horror", 
    year_published: 2013,
    min_players: 1, 
    max_players: 8,
    min_playtime: 120,
    max_playtime: 240,
    description_preview: "Across the globe, ancient evil is stirring. Now, you and your trusted circle of colleagues must travel around the world, working against all odds to hold back the approaching horror. The end draws near! Do you have the courage to prevent global destruction?",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254957620-61KqujHT2B4L.jpg?format=webp"
)

Game.create(
    name: "One Night Ultimate Werewolf", 
    year_published: 2014,
    min_players: 3, 
    max_players: 10,
    min_playtime: 15,
    max_playtime: 30,
    description_preview: "One Night Ultimate Werewolf is a fast-paced game for 3-10 players where everyone is dealt a secret role. In the course of only one night and the following morning, the players will determine who among them is a werewolf...hopefully.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629323264855.png?format=webp"
)

Game.create(
    name: "Twilight Imperium", 
    year_published: 2017,
    min_players: 3, 
    max_players: 6,
    min_playtime: 240,
    max_playtime: 480,
    description_preview: "Twilight Imperium: Fourth Edition is a game of galactic conquest in which three to six players take on the role of one of seventeen factions vying for galactic domination through military might, political maneuvering, and economic bargaining.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629324703845.jpg?format=webp"
)

Game.create(
    name: "Game of Thrones", 
    year_published: 2011,
    min_players: 3, 
    max_players: 6,
    min_playtime: 120,
    max_playtime: 240,
    description_preview: "Twilight Imperium: Fourth Edition is a game of galactic conquest in which three to six players take on the role of one of seventeen factions vying for galactic domination through military might, political maneuvering, and economic bargaining.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1594388478866?format=webp"
)

Game.create(
    name: "Letters from Whitechapel", 
    year_published: 2011,
    min_players: 2, 
    max_players: 6,
    min_playtime: 60,
    max_playtime: 90,
    description_preview: "Letters from Whitechapel is a thematically engrossing board game of deduction and bluffing in which one player takes the role of the infamous Jack the Ripper, while up to five other players are detectives working together to pursue him through Victorian London.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559255024009-61Dlwvt25tL.jpg?format=webp"
)

Game.create(
    name: "Teenage Mutant Ninja Turtles: Shadows of the Past", 
    year_published: 2016,
    min_players: 2, 
    max_players: 5,
    min_playtime: 60,
    max_playtime: 90,
    description_preview: "Taking the role of their favorite Turtle or the ultimate villain Shredder, players battle their way through a series of 60-90 minute missions in which they develop their characters' strengths, fighting styles, and equipment along the way to create a lasting story arc.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559255014804-61FdvjRuU6L.jpg?format=webp"
)

Game.create(
    name: "Superfight", 
    year_published: 2013,
    min_players: 3, 
    max_players: 10,
    min_playtime: 30,
    max_playtime: 45,
    description_preview: "SUPERFIGHT is a game where you argue with your friends over ridiculous fights. The game is very simple. It's fun for all levels and kinds of players.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257672834-41aQAj-nwML.jpg?format=webp"
)

Game.create(
    name: "Shadows Over Camelot", 
    year_published: 2005,
    min_players: 3, 
    max_players: 7,
    min_playtime: 60,
    max_playtime: 90,
    description_preview: "Shadows over Camelot is a unique collaborative game featuring a malevolent twist! As the incarnation of the Knights of the Round Table, you join forces against the game itself in an attempt to protect Camelot.",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559253940409-61DgEOWocLL.jpg?format=webp"
)

Game.create(
    name: "Telestrations", 
    year_published: 2009,
    min_players: 4, 
    max_players: 8,
    min_playtime: 30,
    max_playtime: 45,
    description_preview: "DRAW what you see, then GUESS what you saw. All players simultaneously sketch, pass & guess to reveal hilarious and unpredictable outcomes!",
    img: "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559258098404-61EgR3yjKXL.jpg?format=webp"
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

BoardGameShelf is an easy to use tool to help you organize your table top games. Simply sign up for an account, search through our database of games and click "Add To Shelf" when you've found a game you've owned. Pretty soon you'll have a personalized collection of games with details to help you pick which one would be best for your next game night!

To get started, clone the repo and install any dependencies:

$ bundle install

BACKEND SET-UP

Next, change your directory to bg-backend:

$ cd bg-backend

Run the necessary migrations...

$ rails db:migrate

...and seed the database to make sure you can see the board games we've already curated! 

$ rails db:seed

Lastly, spin up the server a server to get your backend running. 

$ rails server

FRONTEND SET-UP

Start or split into a second terminal, while your rails server is running, and cd into the bg-frontend directory. 

$ cd bg-frontend

With Node Package Manager installed, run npm start. 

$ npm start

Within a few seconds, your browser should load the frontend. Begin exploring!
class Game < ApplicationRecord
    has_many :comments 
    has_many :users, through: :comments
    has_many :user_games
    has_many :users, through: :user_games
end

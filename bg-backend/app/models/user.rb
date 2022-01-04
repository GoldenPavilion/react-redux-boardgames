class User < ApplicationRecord
    has_secure_password

    has_many :comments
    has_many :games, through: :comments
    has_many :user_games
    has_many :games, through: :user_games

    validates :username, :email, uniqueness: true, presence: true
    validates :location, presence: true
end

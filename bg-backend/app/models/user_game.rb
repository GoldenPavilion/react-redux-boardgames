class UserGame < ApplicationRecord
    belongs_to :user
    belongs_to :game

    validates :user_id, game_id, presence: true
end

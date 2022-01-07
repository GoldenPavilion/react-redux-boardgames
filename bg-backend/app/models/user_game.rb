class UserGame < ApplicationRecord
    belongs_to :user
    belongs_to :game

    validates :user_id, :game_id, presence: true
    validates :user_id, uniqueness: { scope: :game_id, 
        message: "can only own a game once" }
end

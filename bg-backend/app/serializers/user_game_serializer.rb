class UserGameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :game_id
end

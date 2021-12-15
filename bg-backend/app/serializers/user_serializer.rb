class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :location, :game_host, :games
end

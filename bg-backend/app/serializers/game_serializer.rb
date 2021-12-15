class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :year_published, :min_players, :max_players, :min_playtime, :max_playtime, :description_preview, :img, :comments
end

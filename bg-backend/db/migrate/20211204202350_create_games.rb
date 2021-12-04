class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.int :year_published
      t.int :min_players
      t.int :max_players
      t.int :min_playtime
      t.int :max_playtime
      t.string :description_preview

      t.timestamps
    end
  end
end

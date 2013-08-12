class CreateStickers < ActiveRecord::Migration
  def change
    create_table :stickers do |t|
      t.integer :coordsX
      t.integer :coordsY
      t.string :userValue

      t.timestamps
    end
  end
end

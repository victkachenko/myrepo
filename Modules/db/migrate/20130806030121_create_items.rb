class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :day
      t.integer :month
      t.integer :year
      t.string :rand

      t.timestamps
    end
  end
end

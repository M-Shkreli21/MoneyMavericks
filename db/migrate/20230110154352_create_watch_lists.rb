class CreateWatchLists < ActiveRecord::Migration[6.1]
  def change
    create_table :watch_lists do |t|
      t.string :name
      t.string :ticker
      t.float :price
      t.float :change_in_price
      t.integer :user_id

      t.timestamps
    end
  end
end

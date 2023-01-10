class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :body
      t.date :date
      t.string :category
      t.integer :user_id
      t.integer :likes

      t.timestamps
    end
  end
end

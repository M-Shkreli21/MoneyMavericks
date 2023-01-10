class CreateTerms < ActiveRecord::Migration[6.1]
  def change
    create_table :terms do |t|
      t.string :term_name
      t.string :definition

      t.timestamps
    end
  end
end

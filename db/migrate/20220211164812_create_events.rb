class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.float :value, null: false
      t.datetime :datetime, null: false

      t.index :name
      t.index :datetime
      t.timestamps
    end
  end
end

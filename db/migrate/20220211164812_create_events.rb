class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.float :value
      t.timestamp :timestamp

      t.timestamps
    end
  end
end

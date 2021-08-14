class CreateDailyReflections < ActiveRecord::Migration[6.1]
  def change
    create_table :daily_reflections do |t|
      t.string :text, default: '', null: false, comment: '反省メモ'
      t.date :practice_day, default: -> { 'CURRENT_DATE' }, null: false, comment: '練習日'
      t.references :category, null: false
      t.references :user, null: false

      t.timestamps
    end

    add_foreign_key :daily_reflections, :categories
    add_foreign_key :daily_reflections, :users
  end
end

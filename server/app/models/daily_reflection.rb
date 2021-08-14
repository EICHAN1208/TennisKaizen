class DailyReflection < ApplicationRecord
  belongs_to :category
  belongs_to :user

  class << self
    def create!(params)
      daily_reflection = new(
        text: params[:text],
        practice_day: Date.today,
        category_id: params[:category_id],
        user_id: 1
      )
      daily_reflection.save!
      daily_reflection
    end
  end
end

class DailyReflectionsController < ApplicationController
  def create
    DailyReflection.create!(permitted_params)
  end

  private

  def permitted_params
    params.require(:daily_reflection).permit(:category_id, :text)
  end
end

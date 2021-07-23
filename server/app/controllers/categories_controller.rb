class CategoriesController < ApplicationController
  def create
    Category.create!(permitted_params)
  end

  private

  def permitted_params
    params.require(:category).permit(:name)
  end
end

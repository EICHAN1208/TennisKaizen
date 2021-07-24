class CategoriesController < ApplicationController
  def index
    categories = Category.all.pluck(:name)
    render json: { category_names: categories }
  end

  def create
    Category.create!(permitted_params)
  end

  private

  def permitted_params
    params.require(:category).permit(:name)
  end
end

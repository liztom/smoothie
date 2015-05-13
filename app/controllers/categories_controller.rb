class CategoriesController < ApplicationController
  def show
    @ingredients = Ingredient.where(category_id: params[:id])
    @base = Base.find_by(id: params[:basis_id])
    @bases = Base.all
    @categories = Category.all
    render 'bases/show'
  end
end

class CategoriesController < ApplicationController
  def show
    if params[:id] == 'all'
      @ingredients = Ingredient.all
    else
      @ingredients = Ingredient.where(category_id: params[:id])
    end
    @base = Base.find_by(id: params[:basis_id])
    @bases = Base.all
    @categories = Category.all
    respond_to do |format|
      format.html { redirect_to basis_path(@base.id) }
      format.js 
    end
  end
end

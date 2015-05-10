class BasesController < ApplicationController
  def create
    @base = Base.new(base_params)
    if @base.save
      flash[:notice] = "Your base was added!"
      redirect_to buses_path
    end
  end  

  def index
    @bases = Base.all
  end

  def show
    @base = Base.find_by(id: params[:id])
    @bases = Base.all
    @categories = Category.all
    @ingredients = Ingredient.all
  end

  private

  def base_params
    params.require(:base).permit(:name, :container)
  end
end

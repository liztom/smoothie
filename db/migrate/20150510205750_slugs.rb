class CreateSlugs < ActiveRecord::Migration
  def change
    add_column :bases, :slug, :string
    remove_column :ingredients, :price, :integer
    add_column :ingredients, :price, :float
  end
end

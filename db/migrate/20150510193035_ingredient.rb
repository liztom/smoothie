class CreatingIngredient < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.string :name
      t.belongs_to :category
      t.integer :price
      t.boolean :in_stock, default: true

      t.timestamps
    end

    create_table :categories do |t|
      t.string :name

      t.timestamps
    end

    create_table :bases do |t|
      t.string :name
      t.string :container

      t.timestamps
    end
  end
end

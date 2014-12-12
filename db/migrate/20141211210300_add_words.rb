class AddWords < ActiveRecord::Migration
  def change
  	 add_column :scores, :words, :integer, default: 100
  end
end

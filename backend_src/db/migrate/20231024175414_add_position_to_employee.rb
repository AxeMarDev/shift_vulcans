class AddPositionToEmployee < ActiveRecord::Migration[7.0]
  def change
    add_column :employee_infos, :position, :string
  end
end

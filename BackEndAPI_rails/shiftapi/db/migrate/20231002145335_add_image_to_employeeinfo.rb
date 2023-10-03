class AddImageToEmployeeinfo < ActiveRecord::Migration[7.0]
  def change
    add_column :employee_infos, :userImage, :text
  end
end

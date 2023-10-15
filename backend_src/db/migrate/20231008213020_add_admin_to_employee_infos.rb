class AddAdminToEmployeeInfos < ActiveRecord::Migration[7.0]
  def change
    add_column :employee_infos, :admin, :boolean
  end
end

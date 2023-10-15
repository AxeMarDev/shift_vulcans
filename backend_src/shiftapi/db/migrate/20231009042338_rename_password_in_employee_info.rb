class RenamePasswordInEmployeeInfo < ActiveRecord::Migration[7.0]
  def change
    rename_column :employee_infos, :password, :password_digest
  end
end

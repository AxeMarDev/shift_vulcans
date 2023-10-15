class AddAttemptsloginToEmployeeInfos < ActiveRecord::Migration[7.0]
  def change
    add_column :employee_infos, :attempts, :integer
  end
end

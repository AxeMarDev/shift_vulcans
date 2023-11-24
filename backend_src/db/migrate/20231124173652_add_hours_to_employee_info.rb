class AddHoursToEmployeeInfo < ActiveRecord::Migration[7.0]
  def change
    add_column :employee_infos, :hoursWorked, :float
  end
end

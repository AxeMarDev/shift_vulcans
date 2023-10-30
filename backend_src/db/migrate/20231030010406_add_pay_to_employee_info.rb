class AddPayToEmployeeInfo < ActiveRecord::Migration[7.0]
  def change
    add_column :employee_infos, :pay, :decimal
  end
end

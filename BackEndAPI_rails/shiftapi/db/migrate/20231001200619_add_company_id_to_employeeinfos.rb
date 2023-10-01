class AddCompanyIdToEmployeeinfos < ActiveRecord::Migration[7.0]
  def change
    add_reference :employee_infos, :companies, null: false, foreign_key: true
  end
end

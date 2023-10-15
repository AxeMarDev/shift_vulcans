class CreateEmployeeInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :employee_infos do |t|
      t.string :name
      t.string :username
      t.string :password
      t.boolean :clockin
      t.string :bio

      t.timestamps
    end
  end
end

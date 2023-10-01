class AddAdminToCompanies < ActiveRecord::Migration[7.0]
  def change
    add_column :companies, :adminname, :string
    add_column :companies, :adminpassword, :string
  end
end

class EmployeeInfo < ApplicationRecord
  belongs_to :company, foreign_key: :companies_id
  has_secure_password
end

class EmployeeInfo < ApplicationRecord
  belongs_to :company, foreign_key: :companies_id
end

class Company < ApplicationRecord
  has_many :employee_infos, foreign_key: :companies_id
end

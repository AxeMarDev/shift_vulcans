class CompanyemployeeController < ApplicationController
  def update
    if (company = Company.find_by(name: params[:companyname]))
      if company.adminname == params[:adminname] && company.adminpassword == params[:adminpassword]

        if (employee1 = company.employee_infos.find_by(id: params[:id]))
          employee1.clockin = !employee1.clockin
          employee1.save
          render json: employee1.clockin
        else
          render json:"error"
        end
      else
        render json: "could not create employee"
      end
    else
      render json: "company not found what"
    end
  end
end

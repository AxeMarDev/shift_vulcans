class EmployeeController < ApplicationController
  def index #
    if company = Company.find_by(name: params[:companyname])
      if (employee = company.employee_infos.find_by(name: params[:employeename]))
        if employee.password == params[:employeepass]
          render json: employee.clockin
        end
      end
    end
  end

end


# rails g controller NameController index create
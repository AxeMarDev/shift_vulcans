class UpdatenameController < ApplicationController
  def update
    input = params[:name]
    input.sub!("-"," ")
    if (employee = Employee.find_by(name: input))
      employee_old_name = employee.name

      if employee.update(name: params[:updatename])
        render json: "#{employee_old_name} is now called #{employee.name} "
      else
        render json: "error changing name"
      end
    else
      render json: "error changing name"
    end
  end
end

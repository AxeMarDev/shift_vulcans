class UpdatenameController < ApplicationController
  def update
    input = params[:name]
    input.sub!("-"," ")
    employee = Employee.find_by(name: params[:name])

    employee_old_name = employee.name
    employee.update(name: params[:updatename])

    render json: "#{employee_old_name} is now called #{employee.name} "
  end
end

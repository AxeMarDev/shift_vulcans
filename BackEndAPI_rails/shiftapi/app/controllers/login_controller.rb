class LoginController < ApplicationController
  def index

    if  (employee_target = EmployeeInfo.find_by( name: params[:name] ) )
      if employee_target.password == params[:password]
        render employee_target.all
      else
        employee_target.attempts = employee_target.attempts + 1
        employee_target.save
        render json: "incorrect password"
      end
    else
      render json: "could not find user"
    end
  end
end

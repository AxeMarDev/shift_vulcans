class GettimeController < ApplicationController
  def index

    if (employee = EmployeeInfo.find_by(name: params[:name]))

      if employee.password == params[:password]
        render json: employee.clockin
      else
        render json: "error accessing #{:name}"
      end
    else
      render json: "error accessing #{:name}"
    end


  end
end

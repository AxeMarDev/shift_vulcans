class UpdatetimeController < ApplicationController
  def update

    if employee = Employee.find_by(name: params[:name])

      if employee.password == params[:password]
        status = employee.clockin

        if status
          status = false
        else
          status = true
        end

        employee.update(clockin: status)
        employee.save

        render json: "success"
      else
        render json: "error accessing #{:name}"
      end
    else
      render json: "error accessing #{:name}"
    end

  end
end

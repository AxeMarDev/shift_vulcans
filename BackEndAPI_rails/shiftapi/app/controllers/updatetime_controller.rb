class UpdatetimeController < ApplicationController
  def update

    employee = Employee.find_by(name: params[:name])
    status = employee.clockin

    if status
      status = false
    else
      status = true
    end

    employee.update(clockin: status)
    employee.save
    render json: "success"

  end
end

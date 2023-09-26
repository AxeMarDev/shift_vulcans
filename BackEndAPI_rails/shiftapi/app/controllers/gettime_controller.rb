class GettimeController < ApplicationController
  def index

    employee = Employee.find_by(name: params[:name])
    render json: employee.clockin

  end
end

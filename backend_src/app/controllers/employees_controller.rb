class EmployeesController < ApplicationController

  def index
    # will 'return' a json displaing all members of employees table
    render json: EmployeeInfo.all

  end
  def create
    # will create a new employee before saving to table
    employee = EmployeeInfo.new( employee_params)

    # will attempt to save to table, if failed, a error will be returned
    unless employee.save
      render json: "error", status: 400
    end

  end

  private
  def employee_params
    params.require(:employee).permit(:name,:bio,:clockin,:password)
  end

end

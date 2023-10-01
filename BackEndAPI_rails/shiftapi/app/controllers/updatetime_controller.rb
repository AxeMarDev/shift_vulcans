class UpdatetimeController < ApplicationController
  def update

    # we will check if our table of employees holds a employee by name passed in request
    if (employee = EmployeeInfo.find_by(name: params[:name]))

      # if we find one, then we will see if we can access this employee with the passed password
      if employee.password == params[:password]

        # if we can, we retrieve the clockin status
        status = employee.clockin

        # and toggle this status
        if status
          status = false
        else
          status = true
        end

        #then save back to our database entry
        employee.update(clockin: status)
        employee.save

        # return to client
        render json: "success"
      else
        # return to client error
        render json: "error accessing #{:name}"
      end
    else
      # return to client error
      render json: "error accessing #{:name}"
    end

  end
end

class EmployeeController < ApplicationController

  before_action :authenticate_user

  def index 
    if company = Company.find_by(name: params[:companyname])
      if (employee = company.employee_infos.find_by(name: params[:employeename]))
        if employee.password == params[:employeepass]
          render json: employee.clockin
        end
      end
    end
  end

    def update
      if (company = @current_user.company)
        if (employeeTarget = company.employee_infos.find_by(id: params[:id])) # delete old employee data table
          if (params[:updateAction] == "clock")
            employeeTarget.clockin = !employeeTarget.clockin
            employeeTarget.save
            render json: { message: "successful clockin/clockout" }
          elsif (params[:updateAction] == "admin")
            employeeTarget.admin = !employeeTarget.admin
            employeeTarget.save
            render json: { message: "successful admin call" }
          else
            render json: { message: "action " + params[:action] + " does not exist" }
          end
        else
          render json: { message: "employee target does not exist" }
        end
      else
        render json: { message: "you're not part of the company" }
      end
    end

    private
  def authenticate_user
    token = request.headers['Authorization']&.split(' ')&.last
    decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')

    user_id = decoded_token[0]['user_id']
    @current_user = EmployeeInfo.find(user_id)
  rescue JWT::DecodeError, ActiveRecord::RecordNotFound
    render json: { error: 'Unauthorized' }, status: :unauthorized
  end

end


# rails g controller NameController index create\
# index = get
# update = fetch
# post = create
# delete = destroy
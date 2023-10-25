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
      if(company = @current_user.company)
        if(employeeTarget = company.employee_infos.find_by(id: params[:id])) # delete old employee data table
          if(0 == params[:action].to_i)
            employeeTarget.clockin = !employeeTarget.clockin
            employeeTarget.save
            render json: {message: "success"}
          else 
            render json: {message: "action (clockin) does not exsist"}

          end
        else 
          render json: {message: "employee target does not excist"}

        end
      else 
        render json: {message: "your not part of company"}

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
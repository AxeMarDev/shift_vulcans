
# curl --header "Content-Type: application/json"  --request POST --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"axellelectric", "employeename":"axell","employeepass":"password" }'  http://localhost:3000/companyemployees
class CompanyemployeesController < ApplicationController

  # curl --header "Content-Type: application/json"  --request DELETE --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"axellelectric", "id":"4" }'  http://localhost:3000/companyemployees

  before_action :authenticate_user
  def destroy
    if (company = Company.find_by(name: params[:companyname]))
      if company.employee_infos.find_by(id: @current_user) && @current_user.admin == true

        employee_destory = company.employee_infos.find_by(id: params[:id])
        if (employee_destory !=  @current_user) &&  (employee_destory.admin != true)
          employee_destory.destroy
          employee_destory.save
          company.save
          render json: company.employee_infos
        else
          render json: "cannot delete self or admin"
        end


      else
        render json: "could not create employee"
      end
    else
      render json: "company not found what"
    end
  end
  def create
    if (company = Company.find_by(name: params[:companyname]))
      if company.employee_infos.find_by(id: @current_user) && @current_user.admin == true
        company.employee_infos.create( name: params[:employeename],
                                  username: params[:employeename],
                                  password: params[:employeepass],
                                  userImage: params[:userImage],
                                  clockin: false,
                                  bio: "empty",
                                  admin: false,
                                  position: params[:position])

        company.save
        render json: company.employee_infos
      else
        render json: "could not create employee"
      end

    else
      render json: "company not found"
    end
  end

  def index
    if (company = Company.find_by(name: params[:companyname]))
      if company.employee_infos.find_by(id: @current_user) && @current_user.admin == true
        render json: company.employee_infos
      else
        render json: "cannot accesses company"
      end
    else
      render json: "company not found"
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

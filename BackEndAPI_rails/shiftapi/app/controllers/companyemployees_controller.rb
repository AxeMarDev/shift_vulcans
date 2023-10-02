
# curl --header "Content-Type: application/json"  --request POST --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"axellelectric", "employeename":"axell","employeepass":"password" }'  http://localhost:3000/companyemployees
class CompanyemployeesController < ApplicationController

  # curl --header "Content-Type: application/json"  --request DELETE --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"axellelectric", "id":"4" }'  http://localhost:3000/companyemployees

  def destroy
    if (company = Company.find_by(name: params[:companyname]))
      if company.adminname == params[:adminname] && company.adminpassword == params[:adminpassword]
        employee_destory = company.employee_infos.find_by(id: params[:id])
        employee_destory.destroy
        employee_destory.save
        company.save
        render json: company.employee_infos
      else
        render json: "could not create employee"
      end
    else
      render json: "company not found what"
    end
  end
  def create
    if (company = Company.find_by(name: params[:companyname]))
      if company.adminname == params[:adminname] && company.adminpassword == params[:adminpassword]
        company.employee_infos.create( name: params[:employeename],
                                  username: params[:employeename],
                                  password: params[:employeepass],
                                  userImage: params[:userImage],
                                  clockin: false,
                                  bio: "empty")

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
      if company.adminname == params[:adminname] && company.adminpassword == params[:adminpassword]
        render json: company.employee_infos
      else
        render json: "could not auth"
      end
    else
      render json: "company not found"
    end
  end
end

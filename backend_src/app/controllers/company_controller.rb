class CompanyController < ApplicationController
  def index

    if ( company_row = Company.find_by(name: params[:companyname]))
      if company_row.adminname == params[:adminname] && company_row.adminpassword == params[:adminpassword]
        render json: company_row
      else
        render json: "can not find"
      end

    else
      render json: "company not found"
    end
  end

  # curl --header "Content-Type: application/json"  --request POST --data '{"companyName":"company", "name":"me", "username":"me", "password":"password"}' http://localhost/company
  def create
    if (@company = Company.create(name: params[:companyName]))
      if(@employee = @company.employee_infos.new( name: params[:name],
                                                  username: params[:username],
                                                  password: params[:password],
                                                  password_confirmation: params[:password],
                                                  bio: "",
                                                  admin: true,
                                                  clockin: false,
                                                  userImage: params[:userImage],
                                                  position: params[:position]))

        if @employee.save
          @company.save
          render json: { message: "account made" }
        else
          render json: { message: "error" }
        end
      else
        render json: "error"
      end

    else
      render json: "error created"
    end
  end
end

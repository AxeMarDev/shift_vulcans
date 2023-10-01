class CompanyController < ApplicationController
  def index
    if ( company_row = Company.find_by(name: params[:companyname]))
      render json: company_row
    else
      render json: "company not found"
    end
  end

  def create
    if Company.create(name: params[:companyname], adminname: params[:adminname], adminpassword: params[:adminpassword])
      render json: "company created"
    else
      render json: "error created"
    end
  end
end

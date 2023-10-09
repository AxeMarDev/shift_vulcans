class AuthenticationController < ApplicationController
  def create
    company = Company.find_by(name: params[:companyName])
    @employee = company.employee_infos.find_by(username: params[:username])

    if @employee && @employee.authenticate(params[:password])
      token = generate_token(@employee)
      render json: { token: token, company: company,  employee: @employee }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def generate_token(person)
    # Use a JWT library to generate a token with user information.
    payload = { user_id: person.id }
    JWT.encode(payload, Rails.application.secrets.secret_key_base, 'HS256')
  end
end

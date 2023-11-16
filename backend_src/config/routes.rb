Rails.application.routes.draw do

  #this will get all the company info and return it client: for admin login
  resources :company, only: [:index, :create]
  # curl --header "Content-Type: application/json"  --request GET --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"axellelectric"}'  http://localhost:3000/company
  # curl --header "Content-Type: application/json"  --request POST --data '{"adminname":"", "adminpassword":"password", "companyname":"cs"}'  http://localhost:3000/company

  # this will get the list of employees or create an employee
  resources :companyemployees, only: [:index, :create, :destroy]
  # curl --header "Content-Type: application/json"  --request POST --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"company1", "employeename":"axell","employeepass":"password" }'  http://localhost:3000/companyemployees
  # curl --header "Content-Type: application/json"  --request GET --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"axellelectric" }'  http://localhost:3000/companyemployees
  post 'authenticate', to: 'authentication#create'
  resources :companyemployee, only:[ :update]
  resources :employee, only:[:index, :update]
  

end

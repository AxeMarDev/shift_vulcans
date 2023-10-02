Rails.application.routes.draw do


  #this will get all the company info and return it client: for admin login
  resources :company, only: [:index, :create]
  # curl --header "Content-Type: application/json"  --request GET --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"axellelectric"}'  http://localhost:3000/company
  # curl --header "Content-Type: application/json"  --request POST --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"axellelectric"}'  http://localhost:3000/company

  # this will get the list of employees or create an employee
  resources :companyemployees, only: [:index, :create, :destroy]
  # curl --header "Content-Type: application/json"  --request POST --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"company1", "employeename":"axell","employeepass":"password" }'  http://localhost:3000/companyemployees
  # curl --header "Content-Type: application/json"  --request GET --data '{"adminname":"user1", "adminpassword":"2002068", "companyname":"axellelectric" }'  http://localhost:3000/companyemployees

  resources :companyemployee, only:[ :update]






  #!!!!
  # rewrite this to match with company

  # Will be basic route to get the list of employees;
  # Will be basic route to add the list of employees
  resources :employees, only: [:index, :create] # GET && POST
  # request template
  # curl --request GET http://localhost:3000/employees
  # curl --header "Content-Type: application/json" --request POST --data '{"name":"user1", "bio":"worker", "clockin":"false", "password":"2002068"}' http://localhost:3000/employees

  # Will be basic route to update the time of a certain employee
  #resources :updatetime, param: :name , only: [:update]
  # curl --header "Content-Type: application/json" --request PATCH http://localhost:3000/updatetime/Axell
  patch 'updatetime', to: 'updatetime#update' # this will not require a param name to be passed on the url
  # request template
  # curl --header "Content-Type: application/json" --request PATCH  --data '{"password":"2002068", "name":"user1"}' http://localhost:3000/updatetime

  # required username and password
  # Will be basic route to get the time of a certain employee
  resources :gettime,only: [:index]
  # request template
  # curl --header "Content-Type: application/json" --request GET --data '{"password":"2002068", "name":"user1"}' http://localhost:3000/gettime

  #will update the name of an employee
  resources :updatename, param: :name, only:[:update]
  # request template
  # curl --header "Content-Type: application/json" --request PATCH --data '{"updatename":"Axell Martinez"}' http://localhost:3000/updatename/Axell
  # curl --header "Content-Type: application/json" --request PATCH --data '{"updatename":"Axell Martinez"}' http://localhost:3000/updatename/Axell-M

  # routes pending
  # Plan: webview login page will be served by react front end server
  # When user reaches for login resource, it will be sent by react ti backend api
  resources :login, only: [:index]
  resources :logout, only: [:update]

  # task to do// figure out how to connect company table to employee
  # fix migrations for <name,bio,clockin> for employee

  # ADDING COLUMN TO TABLE
  # rails g migration AddAgeToEmployees age:integer // will add age to Employees
  # rails db:migrate

  # mysql
  # mysql.server start
  # mysql.server stop
  # SHOW DATABASES
  # CREATE DATABASE

  # shortcuts
  # rails c
  # rails db:migrate // do not migrate model that is present in database
  # rails g controller <controllername> <arguments>
  # rails g model <modelname> <types>


end

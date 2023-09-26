Rails.application.routes.draw do

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

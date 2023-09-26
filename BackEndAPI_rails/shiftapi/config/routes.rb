Rails.application.routes.draw do

  # Will be basic route to get the list of employees;
  # Will be basic route to add the list of employees
  resources :employees, only: [:index, :create] # GET && POST
  # request template
  # curl --request GET http://localhost:3000/employees
  # curl --header "Content-Type: application/json" --request POST --data '{"name":"user1", "bio":"worker", "clockin":"false"}' http://localhost:3000/employees

  # Will be basic route to update the time of a certain employee
  resources :updatetime, param: :name, only: [:update]
  # request template
  # curl --header "Content-Type: application/json" --request PATCH http://localhost:3000/updatetime/Axell

  # Will be basic route to get the time of a certain employee
  resources :gettime, param: :name ,only:[:index]
  #request template
  #  curl --header "Content-Type: application/json" --request GET --data '{"name":"Axell"}' http://localhost:3000/gettime

  #will update the name of an employee
  resources :updatename, param: :name, only:[:update]
  # request templaye
  #  curl --header "Content-Type: application/json" --request PATCH --data '{"updatename":"Axell Martinez"}' http://localhost:3000/updatename/Axell
  #  curl --header "Content-Type: application/json" --request PATCH --data '{"updatename":"Axell Martinez"}' http://localhost:3000/updatename/Axell-M


  #mysql
  # mysql.server start
  # mysql.server stop
  # SHOW DATABASES
  # CREATE DATABASE

  # shortcuts
  # rails g controller <controllername> <arguments>
  # rails g model <modelname> <types>


end

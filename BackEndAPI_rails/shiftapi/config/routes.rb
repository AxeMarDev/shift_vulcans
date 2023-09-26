Rails.application.routes.draw do

  # Will be basic route to get the list of employees;
  # Will be basic route to add the list of employees
  resources :employees, only: [:index, :create] # GET && POST
  # request template
  # curl --request GET http://localhost:3000/employees
  # curl --header "Content-Type: application/json" --request POST --data '{"name":"user1", "bio":"worker", "clockin":"false"}' http://localhost:3000/employees




  # shortcuts
  # rails g controller <controllername> <arguments>
  # rails g model <modelname> <types>


end

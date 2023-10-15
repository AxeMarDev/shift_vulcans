require "test_helper"

class CompanyemployeesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get companyemployees_index_url
    assert_response :success
  end

  test "should get create" do
    get companyemployees_create_url
    assert_response :success
  end
end

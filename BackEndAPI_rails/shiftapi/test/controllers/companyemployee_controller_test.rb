require "test_helper"

class CompanyemployeeControllerTest < ActionDispatch::IntegrationTest
  test "should get patch" do
    get companyemployee_patch_url
    assert_response :success
  end
end

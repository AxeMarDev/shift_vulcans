require "test_helper"

class UpdatenameControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get updatename_update_url
    assert_response :success
  end
end

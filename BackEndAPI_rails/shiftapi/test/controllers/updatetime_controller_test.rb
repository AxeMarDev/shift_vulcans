require "test_helper"

class UpdatetimeControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get updatetime_update_url
    assert_response :success
  end
end

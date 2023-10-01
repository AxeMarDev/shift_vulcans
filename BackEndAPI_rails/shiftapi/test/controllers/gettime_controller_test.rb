require "test_helper"

class GettimeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get gettime_index_url
    assert_response :success
  end
end

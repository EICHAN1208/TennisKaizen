require "test_helper"

class DailyReflectionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get daily_reflections_create_url
    assert_response :success
  end
end

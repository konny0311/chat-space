FactoryGirl.define do

  factory :message do
    content   "hello"
    image     Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/cat.jpg'))
    group_id  "1"
    user_id   "1"
  end
end

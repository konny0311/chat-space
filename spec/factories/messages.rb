FactoryGirl.define do

  factory :message do
    content   Faker::Lorem.sentence
    image     Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/cat.jpg'))
    group
    user
  end
end

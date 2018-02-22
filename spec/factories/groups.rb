FactoryGirl.define do
  factory :group do
    name Faker::Team.name

    # after(:create) do |group|
    #   create(:message, 1, group: group)
    # end
  end
end

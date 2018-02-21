require 'rails_helper'
describe Message do
  describe '#create' do
    it "is invalid without content" do
      message = build(:message, content: "")
      message.valid?
      expect(message.errors[:content]).to include("can't be blank")
    end
  end
end

require 'rails_helper'
describe Message do
  describe '#create' do
    context 'can save' do
      it 'is valid with content' do
        expect(build(:message, image: nil)).to be_valid
      end

      it 'is valid with image' do
        expect(build(:message, content: nil)).to be_valid
      end

      it 'is valid with both image and content' do
        expect(build(:message)).to be_valid
      end
    end

    context 'cannot save' do
      it 'is invalid without both content and image' do
        message = build(:message, image: nil, content: nil)
        binding.pry
        message.valid?
        expect(message.errors[:content]).to include('を入力してください')
      end
    end

    end

  end

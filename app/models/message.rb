class Message < ApplicationRecord
  belongs_to :users
  belongs_to :groups
  mount_uploader :image, ImageUploader
  validates :content, presence: true, unless: :image?

end

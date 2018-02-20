class Message < ApplicationRecord

  belongs_to :user, optional: true
  belongs_to :group, optional: true
  mount_uploader :image, ImageUploader
  validates :content, presence: true, unless: :image?

end

# README

# Database structure
## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true, unique: true|
|email|string|null: false, add_index: unique: true|

### Association
- has_many :members
- has_many :messages

## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :members
- has_many :messages

## members table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## messages table

|Column|Type|Options|
|------|----|-------|
|body|text|add_index|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

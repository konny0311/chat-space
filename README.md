# README

# Database structure
## user table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, add_index: unique: true|

### Association
- has_many :members
- has_many :messages

## group table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :members
- has_many :messages

## member table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## message table

|Column|Type|Options|
|------|----|-------|
|body|text|add_index|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

if @new_messages.present?
json.array! @new_messages do |new_message|
  json.content new_message.content
  json.image new_message.image
  json.id new_message.id
  json.created_at new_message.created_at
  json.user_name new_message.user_name
end
end

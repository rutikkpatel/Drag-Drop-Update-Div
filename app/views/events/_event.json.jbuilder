json.extract! event, :id, :name, :venue, :created_at, :updated_at
json.url event_url(event, format: :json)

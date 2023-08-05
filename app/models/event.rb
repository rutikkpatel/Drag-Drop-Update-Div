class Event < ApplicationRecord
  validates :name, presence: true
  validates :venue, presence: true
end

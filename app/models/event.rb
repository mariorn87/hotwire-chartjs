class Event < ApplicationRecord
  validates :name, presence: true
  validates :value, presence: true
  validates :datetime, presence: true
end

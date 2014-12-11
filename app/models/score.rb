class Score < ActiveRecord::Base
	validates :score, presence: true
	validates :username, presence: true
	validates :goal, presence: true
	validates :score, numericality: { greater_than: 50 }
end

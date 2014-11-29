def calculate_high_scores all_scores
	all_scores.order(score: :asc).limit(10)
end
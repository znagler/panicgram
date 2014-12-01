def calculate_high_scores(all_scores,goal)
	scores_for_view = []
	all_scores.where(goal: goal).order(score: :asc).limit(10).each do |score|
		pair = []
		pair << score.username
		pair << score.score/10.0
		scores_for_view << pair
	end
	while scores_for_view.length < 10
		scores_for_view << ["-","-"]
	end
	scores_for_view
end
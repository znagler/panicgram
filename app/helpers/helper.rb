def calculate_high_scores(all_scores,goal,last_day_only)
	scores_for_view = []
	# scores_with_integer_times = all_scores.map{ |n| {goal: n[:goal],created_at: n[:created_at].to_i , username: n[:username] , score: n[:score]} }
	# one_day_ago = Time.now.to_i - 86400
	# last_day_scores = scores_with_integer_times.select {|n| n if n[:created_at] > one_day_ago}

	all_scores = all_scores.where(["created_at > ?", 1.days.ago]) if last_day_only

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
get '/' do
  @scores = Score.all
  erb :index
end

get '/play/:time' do
  redirect '/' if (params[:time]!="25" && params[:time]!="100")
  erb :play
end


post '/score' do
	Score.create(score: params[:score],username: params[:username],goal: params[:goal])
	redirect '/'
end


get '/hs_check' do
	# binding.pry
	return "true" if Score.where(goal: params["goal"]).length < 10 
	return "true" if params["time"].to_i < Score.where(goal: params["goal"]).order(score: :asc)[9].score
	"false"
end
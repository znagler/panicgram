get '/' do
  @scores = Score.all
  erb :index
end

get '/blog' do
  erb :blog
end


get '/play/:time' do
  redirect '/' if (params[:time]!="25" && params[:time]!="100")
  @goal = params[:time]
  erb :play
end


post '/score' do
	Score.create(score: params[:score],username: params[:username],goal: params[:goal])
	redirect '/'
end


get '/hs_check' do
	return "true" if Score.where(goal: params["goal"]).where(["created_at > ?", 1.days.ago]).length < 10 
	return "true" if params["time"].to_i < Score.where(goal: params["goal"]).where(["created_at > ?", 1.days.ago]).order(score: :asc)[9].score
	"false"
end
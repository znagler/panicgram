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



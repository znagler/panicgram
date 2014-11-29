get '/' do
  @scores = Score.all
  erb :index
end

get '/play/:time' do
  redirect '/' if (params[:time]!="10" && params[:time]!="30")
  erb :play
end


post '/win' do
  Score.create(score: 10, username: params[:username])
end

post '/test_route' do
	p "~"*100
  # @highscores = Score.all
  # erb :_win
end



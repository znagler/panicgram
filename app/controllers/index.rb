get '/' do
  @scores = Score.all
  erb :index
end

get '/play/:time' do
  redirect '/' if (params[:time]!="10" && params[:time]!="30")
  erb :play
end


post '/test_route' do
	p "~"*100
	Score.create(score:params[:score],username: params[:username])
	redirect '/'
end



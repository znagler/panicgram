get '/' do
  @scores = Score.all
  erb :index
end

get '/play/:time' do
  redirect '/' if (params[:time]!="25" && params[:time]!="150")
  erb :play
end


post '/test_route' do
	p "~"*100
	Score.create(score:params[:score],username: params[:username])
	redirect '/'
end



get '/' do
  erb :index
end

get '/play/:time' do
  redirect '/' if (params[:time]!="10" && params[:time]!="30")
  erb :play
end


post '/win' do
  Score.create(score: 10, username: params[:username])
end

get '/highscores' do
  # @highscores = Score.all
  # erb :_win
end



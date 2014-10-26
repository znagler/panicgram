get '/' do
  erb :index
end

get '/play' do
  erb :play
end


post '/win' do
  Score.create(score: 10, username: params[:username])
end

get '/highscores' do
  # @highscores = Score.all
  # erb :_win
end



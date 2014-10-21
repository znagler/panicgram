get '/' do
  erb :index
end

post '/win' do

  Score.create(score: 10, username: params[:username])
  # Score.all.to_json
  # redirect '/highscores'
end

get '/highscores' do
  @highscores = Score.all
  erb :_win
end



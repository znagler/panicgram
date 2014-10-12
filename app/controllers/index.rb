get '/' do
  game_on = Game.new
  @playstring = game_on.current_gs[-5..-1]
  erb :index
end


get '/play' do
  redirect '/' if session[:word].nil?
  @playstring = "true"
  @playstring = "fake" if Word.find_by(word: session[:word]).nil?
  erb :index
end

post '/' do
  session[:word] = params[:word_input].upcase
  redirect '/play'
end


# p Word.all.first

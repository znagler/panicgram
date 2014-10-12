get '/' do
  game_on = Game.new
  @playstring = game_on.current_gs[-5..-1]
  erb :index
end


get '/play' do
  redirect '/' if session[:word].nil?

  @playstring = session[:word]
  # @playstring = "true"

  # @playstring = "fake" if Word.find_by(word: session[:word]).nil?
  erb :index
end

post '/' do
  # session[:status] = game_on.current_gs
  session[:word] = Game.test(params[:word_input])
  redirect '/play'
end


# p Word.all.first

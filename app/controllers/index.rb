get '/' do
  session[:status] = ""
  session[:playstring] = Game.generate_string(25)
  erb :index
end


get '/play' do
  # redirect '/' if session[:word].nil?
  session[:status] = Game.get_status(session[:input].upcase)
  # @playstring = "true"

  # @playstring = "fake" if Word.find_by(word: session[:word]).nil?
  erb :index
end

post '/' do
  session[:status] = ""
  session[:input] = params[:word_input]
  redirect '/play'
end


# p Word.all.first

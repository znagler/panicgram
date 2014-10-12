get '/' do
  session[:status] = ""
  session[:jumps] = 0
  session[:playstring] = Game.generate_string(25)
  erb :index
end


get '/play' do
  # redirect '/' if session[:word].nil?
  status = Game.get_status_int(session[:input].upcase)
  session[:status] = Game.get_status_string(status)
  if status == 1
    session[:jumps] -= 1 if session[:jumps] > 0
  elsif status == 4
    session[:jumps] += 1
    session[:playstring]=session[:playstring][4..-1]
  end

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

get '/' do

  session[:status] = ""
  session[:jumps] = 0
  session[:playstring] = Game.generate_string(10)
  erb :index
end


get '/play' do
  status = Game.get_status_int(session[:input].upcase)
  session[:status] = Game.get_status_string(status)
  case status
  when 1
    if session[:jumps] > 0
      session[:jumps] -= 1
      session[:playstring] = Game.advance(session[:playstring],1)
    else
      session[:status] = "No jumps"
    end
  when 4
    session[:jumps] += 1
    session[:playstring] = Game.advance(session[:playstring],4)
  end


  erb :index
end

post '/' do

  session[:status] = ""
  session[:input] = params[:word_input]
  redirect '/play'
end


# p Word.all.first

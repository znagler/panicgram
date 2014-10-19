get '/' do
  # redirect '/reset' if session[:playstring].nil?
  erb :index
end



get '/reset' do

  session[:status] = ""
  session[:jumps] = 0
  session[:loaded] = ""
  # session[:playstring] = Game.generate_string(20)
  # session[:playstring] = "abcdefghijklmnopqrstuvwxyz"
  redirect '/'

end



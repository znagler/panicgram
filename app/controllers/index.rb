get '/' do
  # redirect '/reset' if session[:playstring].nil?
  erb :index
end



get '/reset' do

  session[:status] = ""
  session[:jumps] = 0
  session[:loaded] = ""

  redirect '/'

end



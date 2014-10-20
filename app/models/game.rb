# class Game
#   # attr_reader :original_gs, :current_gs, :status
#   class << self

#     def advance(str,int)
#       int.times { str = str[1..-1] }
#       str

#     end

#   # def initialize
#   #   p "wtf"
#   #   @original_gs = generate_string(25)
#   #   @jumps = 0
#   #   @status = "All good"
#   #   @current_gs = @original_gs
#   #   # play
#   # end

#   def generate_string(desired_length)
#     str = ""
#     while true
#       str += "bbccddddffggghhjkllllmmnnnnnnpprrrrrrssssttttttvwy".split(//).sample
#       return str if str.length == desired_length
#       str += "bbccddddffggghhllllmmnnnnnnpprrrrrrsssstttttt".split(//).sample
#       return str if str.length == desired_length
#       str += "aaaaaaaaaeeeeeeeeeeeeiiiiiiiiioooooooouuuu".split(//).sample
#       return str if str.length == desired_length
#     end
#   end

#   def get_status_int(str)
#     return 1 if str == "J"
#     return 2 if str.length < 5
#     return 3 if Word.find_by(word: str).nil?
#     4
#   end

#   def get_status_string(int)
#   case int
#   when 1
#     "jump attempted"
#   when 2
#     "Too short"
#   when 3
#     "Fake word"
#   when 4
#     "All good"
#   end
# end



#   def analyze_input(input_string)
#     return "jump" if input_string == "j"


#   end



#   def shift(int)
#     @current_gs = @current_gs[0..(@current_gs.length-int)]
#   end




#   end
# end

# # a = Game.new
# # p a.original_gs
# # p a.current_gs
# # a.shift(4)
# # p a.current_gs
# # a.shift(2)
# # p a.current_gs


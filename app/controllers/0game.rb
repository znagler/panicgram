
# class Game

#   attr_reader :original_gs

#   def initialize
#     @original_gs = generate_string(25)
#   end

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

#   def analyze_input(gamestring,input_string)
#     return false if input_string.length < 5 && input_string != "j"



#   end


# end

# a = Game.new
# p Word.all.first
# p a.original_gs

class Game
  # attr_reader :original_gs, :current_gs, :status
  class << self

  # def initialize
  #   p "wtf"
  #   @original_gs = generate_string(25)
  #   @jumps = 0
  #   @status = "All good"
  #   @current_gs = @original_gs
  #   # play
  # end

  def generate_string(desired_length)
    str = ""
    while true
      str += "bbccddddffggghhjkllllmmnnnnnnpprrrrrrssssttttttvwy".split(//).sample
      return str if str.length == desired_length
      str += "bbccddddffggghhllllmmnnnnnnpprrrrrrsssstttttt".split(//).sample
      return str if str.length == desired_length
      str += "aaaaaaaaaeeeeeeeeeeeeiiiiiiiiioooooooouuuu".split(//).sample
      return str if str.length == desired_length
    end
  end

  def get_status(str)
    return "nice jump" if str == "J"
    return "fake" if Word.find_by(word: str).nil?
    "all good"

  end



  def analyze_input(input_string)
    return "jump" if input_string == "j"


  end



  def shift(int)
    @current_gs = @current_gs[0..(@current_gs.length-int)]
  end




  end
end

# a = Game.new
# p a.original_gs
# p a.current_gs
# a.shift(4)
# p a.current_gs
# a.shift(2)
# p a.current_gs


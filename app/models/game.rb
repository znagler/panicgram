class Game
  attr_reader :original_gs, :current_gs

  def initialize
    p "wtf"
    @original_gs = generate_string(25)
    @jumps = 0
    @current_gs = "test"
    @current_gs = @original_gs
    # play
  end

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

  def analyze_input(input_string,gamestring)
    if input_string == "j"

    end


  end

  def shift(int)
    @current_gs = @current_gs[0..(@current_gs.length-int)]
  end

  def take_input
    gets.chomp
  end

  def play
    while @current_gs.length > 0
      p @current_gs.length
      puts "Current string: #{@current_gs[-5..0]}"
      shift(take_input.length)
      @current_gs = @current_gs[0..-2]

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


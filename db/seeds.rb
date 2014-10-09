# Word.create(word: "apple")
File.open('db/dictionary5.txt').each do |line|
    Word.create(word: line.chomp)

  # Word.create(word: line.chomp, sorted_word: line.chomp.downcase.chars.sort.join)
  end

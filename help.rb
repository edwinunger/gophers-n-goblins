class Sudoku
  def initialize(board_string)
    @board_string = board_string
    @board = []
    board_string.each_char.with_index do |char, index|
      @board << Cell.new(index, char.to_i)
    end
  end

  def cells_in_row(num)
    @board.select do |cell|
      cell.row == num
    end
  end

  def cells_in_column(num)
    @board.select do |cell|
      cell.column == num
    end
  end

  def cells_in_box(num)
    @board.select do |cell|
      cell.box == num
    end
  end

  def try_solve_cell(cell)
    options = (1..9).to_a
    cells_in_row(cell.row)
      .map(&:num)
      .compact
      .each do |number|
        options.delete(number)
      end
    cells_in_column(cell.column)
      .map(&:num)
      .compact
      .each do |number|
        options.delete(number)
      end
    cells_in_box(cell.box)
      .map(&:num)
      .compact
      .each do |number|
        options.delete(number)
      end
    cell.num = options[0] if options.length == 1
  end

  def solved?
    numbers = @board.map(&:num)
    !numbers.include?(nil)
  end

  def solve
    until solved?
      @board.each do |cell|
        if !cell.num
          try_solve_cell(cell)
        end
      end
    end
    self
  end

  # Returns a nicely formatted string representing the current state of the board
  def to_s
    @board.each_slice(27) do |block|
      puts "-------------------------------"
      block.each_slice(9) do |row|
        hor = row.map do |cell|
          number = cell.num
          number ||= '-'
        end
        to_print = '| '
        hor.each_slice(3) { |section|
          to_print << section.join('  ') << ' | '
        }
        puts to_print
      end
    end
    puts "-------------------------------"
  end
end


class Cell
  attr_reader :row, :box, :column
  attr_accessor :num

  def initialize(pos, num)
    pos = pos.to_s(9)
    pos = pos.rjust(2, "0")

    if num > 0
      @num = num
    else
      @num = nil
    end

    @row = pos[0].to_i
    @column = pos[1].to_i
    @box = get_box(pos)
  end

  def get_box(pos)
    pos_vert = pos.to_i/30
    pos_hor = pos[1].to_i/3
    return 0 if pos_vert == 0 && pos_hor == 0
    return 1 if pos_vert == 0 && pos_hor == 1
    return 2 if pos_vert == 0 && pos_hor == 2
    return 3 if pos_vert == 1 && pos_hor == 0
    return 4 if pos_vert == 1 && pos_hor == 1
    return 5 if pos_vert == 1 && pos_hor == 2
    return 6 if pos_vert == 2 && pos_hor == 0
    return 7 if pos_vert == 2 && pos_hor == 1
    return 8 if pos_vert == 2 && pos_hor == 2
  end
end

# practice_cell = Cell.new(52, 2)
# game = Sudoku.new("---26-7-168--7--9-19---45--82-1---4---46-29---5---3-28--93---74-4--5--367-3-18---")
# # p game.to_s
# # puts game.try_solve_cell(practice_cell)
# puts game.solve

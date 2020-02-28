class Stack
    attr_reader :stack
    def initialize
      # create ivar to store stack here!
      @stack = []
    end

    def push(el)
      # adds an element to the stack
      stack << el
    end

    def pop
      # removes one element from the stack
      stack.pop
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
      stack[-1]
    end
end

class Queue
    attr_reader :stack
    def initialize
        @stack = []
    end

    def enqueue(el)
        stack << el
    end

    def dequeue
        stack.shift
    end

    def peek
        stack.first
    end
end

class Map
    attr_reader :new_array
    def initialize
        @new_array = []
    end

    def set(key, value)
        pairs = new_array.index { |pair| pair[0] == key }
        if pairs
            new_array[pairs][1] = value
        else
            new_array << [key,value]
        end
        value
    end

    def get(key)
        new_array.each { |pair| return pair[1] if pair[0] == key }
        nil
    end

    def delete(key)
        value = get(key)
        new_array.reject! { |pair| pair[0] == key }
        "Removed the following pair #{[key,value]}"
    end

    def show
        @new_array
    end
end
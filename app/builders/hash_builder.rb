# builds an object using public setters with attributes defined from a hash
module HashBuilder
  private

  def initialize_from_hash(opts = {})
    opts.each do |key, value|
      # "Open" the class for changes
      class_eval do
        define_method("#{key}") { value } 
      end
    end
  end
end
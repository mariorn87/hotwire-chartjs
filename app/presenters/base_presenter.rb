class BasePresenter < SimpleDelegator
  attr_reader :options

  alias obj __getobj__

  def initialize(data_obj, options = {})
    @options = options
    super(data_obj)
  end
end

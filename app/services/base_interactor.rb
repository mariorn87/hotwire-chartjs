class BaseInteractor
  include HashBuilder

  attr_accessor :request, :callee

  def initialize(callee, opts = {})
    @callee = callee
    @request = callee.request
    initialize_from_hash opts
  end
end

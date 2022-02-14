module Events
  class IndexInteractor < BaseInteractor
    def call
      Event.all.order(:datetime)
    end
  end
end
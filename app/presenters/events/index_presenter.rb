module Events
  class IndexPresenter < BasePresenter
    def data_per_period(period = 'day')
      EventsComposer.new(events, period).compose.to_json
    end

    private

    def events
      @events ||= obj.order(:datetime)
    end
  end
end
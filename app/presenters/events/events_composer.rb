module Events
  class EventsComposer
    attr_reader :events, :period

    def initialize(events, period)
      @events = events
      @period = period
    end

    def compose
      events_per_name.map do |name, event_data|
        {
          name: name,
          data: EventsDataComposer.new(event_data, period).compose
        }
      end
    end

    private

    def events_per_name
      @_events_per_name ||= begin
        names = events.pluck(:name).uniq
        names.each_with_object({}) { |name, result| result[name] = events.where(name: name) }
      end
    end
  end
end
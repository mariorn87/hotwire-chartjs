module Events
  class EventsDataComposer
    include DateUtils

    attr_reader :event_data, :datetimes, :period

    def initialize(event_data, period)
      @event_data = event_data
      @period = period
      @datetimes = event_data.pluck(:datetime)
    end

    def compose
      send("compose_per_#{period}")
    end

    private

    def compose_per_day
      datetimes.map(&:to_date).uniq.map do |date|
        {
          x: date,
          y: event_data.where(:datetime => date.beginning_of_day..date.end_of_day).count
        }
      end
    end

    def compose_per_hour
      datetimes.map(&:beginning_of_hour).uniq.map do |datetime|
        {
          x: datetime,
          y: event_data.where(:datetime => datetime.beginning_of_hour..datetime.end_of_hour).count
        }
      end
    end

    def compose_per_minute
      datetimes.map(&:beginning_of_minute).uniq.map do |datetime|
        {
          x: datetime,
          y: event_data.where(:datetime => datetime.beginning_of_minute..datetime.end_of_minute).count
        }
      end
    end
  end
end
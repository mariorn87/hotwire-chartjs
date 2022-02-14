module Events
  class CreateInteractor < BaseInteractor
    def call
      Event.create(create_params)
    end

    private

    def create_params
      { name: name, value: value, datetime: datetime.to_datetime.utc }
    end
  end
end
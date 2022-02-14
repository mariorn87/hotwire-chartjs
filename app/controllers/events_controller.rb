class EventsController < ApplicationController
  def index
    events = ::Events::IndexInteractor.new(self).call
    @presenter = ::Events::IndexPresenter.new(events)
  end

  def create
    ::Events::CreateInteractor.new(self, create_params).call
    @presenter = ::Events::IndexPresenter.new(Event.all)
  end

  private

  def create_params
    params.require(:event).permit(:name, :value, :datetime)
  end
end

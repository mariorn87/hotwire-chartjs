Rails.application.routes.draw do
  root "events#index"
  resources :events, only: %i(new create index)
end

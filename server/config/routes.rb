Rails.application.routes.draw do
  resources :categories, only: %w[index create]
  resources :daily_reflections
end

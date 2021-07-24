Rails.application.routes.draw do
  resources :categories, only: %w[index create]
end

Rails.application.routes.draw do
  resources :comments
  namespace :api do
    resources :users
    resources :games
  end
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
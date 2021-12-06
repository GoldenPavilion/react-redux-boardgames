Rails.application.routes.draw do
  resources :user_games
  namespace :api do
    resources :users
    resources :games
    resources :comments
  end
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
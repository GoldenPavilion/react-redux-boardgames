Rails.application.routes.draw do
  get '/api/login', to: "sessions#create"
  
  namespace :api do
    resources :users
    resources :games
    resources :user_games
    resources :comments
  end
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
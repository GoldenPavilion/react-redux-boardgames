Rails.application.routes.draw do
  post '/api/login', to: "api/sessions#create"
  get '/api/get_current_user', to: "api/sessions#get_current_user"

  
  namespace :api do
    resources :users
    resources :games
    resources :user_games
    resources :comments
  end
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
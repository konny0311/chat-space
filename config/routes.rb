Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resources :users, only: [:edit, :update, :destroy] do
  resources :messages, only: [:index]
  end

end

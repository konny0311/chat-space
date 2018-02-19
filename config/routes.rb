Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resources :users,     only: [:index, :edit, :update, :destroy]
  resources :groups,    only: [:new, :create, :edit, :update] do
  resources :messages,  only: [:index, :create]
  end
end

Rails.application.routes.draw do
  devise_for :users, :controllers => {
    :sessions => 'users/sessions'
  }
  root 'groups#index'
  resources :users,     only: [:index, :edit, :update, :destroy]
  resources :groups,    only: [:index, :new, :create, :edit, :update] do
  resources :messages,  only: [:index, :create]
  end
end

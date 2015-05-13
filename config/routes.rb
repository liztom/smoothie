Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root 'static_pages#index'

  get '/cart', to: 'static_pages#cart', as: 'cart'
  get '/menu', to: 'bases#index', as: 'menu'
  
  resources :bases do
    resources :categories 
  end 
end

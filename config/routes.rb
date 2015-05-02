Rails.application.routes.draw do
  root 'static_pages#index'

  get '/menu', to: 'static_pages#menu', as: 'menu'
  get '/menu/smoothie', to: 'static_pages#smoothie', as: 'smoothie'
  get '/menu/acai', to: 'static_pages#acai', as: 'acai'
  get '/menu/juice', to: 'static_pages#juice', as: 'juice'
  get '/menu/salad', to: 'static_pages#salad', as: 'salad'

  get '/cart', to: 'static_pages#cart', as: 'cart'

end

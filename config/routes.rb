Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root 'users#new'

   resources :users
   resources :sessions
   get 'xi_tongshezhi/index'
   get 'qiyediya/index'
   get 'jianzhuxinxi/index'
end

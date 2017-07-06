Rails.application.routes.draw do

	  get 'she_baojiankong/index'




  root 'qi_yejiankong#index'
  resources :qi_yejiankong

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

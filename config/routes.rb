Rails.application.routes.draw do
  devise_for :users
  root "rooms#index"  
  resources :rooms, only: [:index, :show] do  
    collection do 
    get "no_limit"
  end  
end 
  mount ActionCable.server => "/cable"
end

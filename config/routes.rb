Rails.application.routes.draw do
  
  resources :terms
  resources :posts
  resources :watch_lists
  resources :users

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  
  get "/company_profile", to: "api#company_profile"
  get "/stock_quote", to: "api#stock_quote"
  get "/stock_peers", to: "api#stock_peers"
  get "/stock_transactions", to: "api#stock_transactions"
  get "/stock_recommendations", to: "api#stock_recommendations"
  get "/stock_info", to: "api#stock_info"
  get "/stock_news", to: "api#stock_news"
  get "crypto_list", to: "api#crypto_list"
  get "crypto_info", to: "api#crypto_info"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

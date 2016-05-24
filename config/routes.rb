Rails.application.routes.draw do
  root 'site#angular'

  scope '/api', defaults: { format: :json } do
  # since we're just doing a json api we don't need new and edit pages to hold forms for our users
    resources :lists, except: [:new, :edit] do
      resources :items, except: [:new, :edit]
    end
  end

  get '*path', to: 'site#angular'

end

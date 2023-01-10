class WatchListSerializer < ActiveModel::Serializer
  attributes :id, :name, :ticker, :price, :change_in_price, :user_id
end

class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :date, :category, :user_id, :likes
end

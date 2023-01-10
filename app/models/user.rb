class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :watch_lists

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
end

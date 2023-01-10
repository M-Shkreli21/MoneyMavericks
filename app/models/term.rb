class Term < ApplicationRecord

    validates :term_name, presence: true
    validates :definition, presence: true
end

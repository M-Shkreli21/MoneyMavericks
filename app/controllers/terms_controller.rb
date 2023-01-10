class TermsController < ApplicationController

    skip_before_action :check_user, only: [:index]

    rescue_from ActiveRecord::RecordNotFound, with: :render_term_not_found_error
    rescue_from ActiveRecord::RecordInvalid, with: :render_term_invalid_error

    def index
        terms = Term.all
        render json: terms
    end

    def show
        term = find_term
        render json: term
    end

    def create
        new_term = Term.create!(term_params)
        render json: new_term, status: :created
    end

    def update
        term = find_term
        term.update!(term_params)
        render json: term, status: :accepted
    end

    def destroy
        term = find_term
        term.destroy
        render json: {}
    end

    private

    def term_params
        params.permit(:term_name, :definition)
    end

    def find_term
        Term.find(params[:id])
    end

    def render_term_not_found_error
        render json: { errors: "Term not found" }, status: :not_found
    end

    def render_term_invalid_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

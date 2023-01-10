class PostsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_post_not_found_error
rescue_from ActiveRecord::RecordInvalid, with: :render_post_invalid_error

    def index
        posts = Post.all
        render json: posts
    end

    def show
        post = find_post
        render json: post
    end

    def create
        new_post = Post.create!(post_params)
        render json: new_post, status: :created
    end

    def update
        post = find_post
        post.update!(post_params)
        render json: post, status: :accepted
    end

    def destroy
        post = find_post
        post.destroy
        render json: {}
    end

    private

    def post_params
        params.permit(:title, :body, :category)
    end

    def find_post
        Post.find(params[:id])
    end

    def render_post_not_found_error
        render json: { errors: "Post not found" }, status: :not_found
    end

    def render_post_invalid_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

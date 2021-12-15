class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
        # render json: @comments
        render json: CommentSerializer.new(@comments)
    end

    def show
        @comment = Comment.find(params[:id])
        # render json: @comment
        render json: CommentSerializer.new(@comment)
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render json: @comment, status: :created, location: @comment
        else
            render json: @comment.errors, status: :unprocessable_entity
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:content, :user_id, :game_id)
    end
end

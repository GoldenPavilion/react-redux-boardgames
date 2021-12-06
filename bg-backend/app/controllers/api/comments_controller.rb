class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render json: @comments
    end

    def show
        @comment = Comment.find(params[:id])
        render json: @comment
    end

    private

    def comment_params
        params.require(:comment).permit(:content, :user_id, :game_id)
    end
end

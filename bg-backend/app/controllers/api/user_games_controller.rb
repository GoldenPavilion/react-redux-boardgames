class Api::UserGamesController < ApplicationController
    def index
        @user_games = UserGame.all
        render json: @user_games
    end

    def show
        @user_game = UserGame.find(params[:id])
        render json: @user_game
    end

    private 

    def user_game_params
        params.require(:user_game).permit(:user_id, :game_id)
    end
end

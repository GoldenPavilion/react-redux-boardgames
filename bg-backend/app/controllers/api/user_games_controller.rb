class Api::UserGamesController < ApplicationController
    def index
        @user_games = UserGame.all
        render json: UserGameSerializer.new(@user_games)
    end

    def show
        @user_game = UserGame.find(params[:id])
        render json: UserGameSerializer.new(@user_game)
    end

    def create
        @user_game = UserGame.new(user_games_params)

        if @user_game.save
            render json: UserGame.new(@user_game)
        else
            render json: @user_game.errors, status: :unprocessable_entity
        end
    end

    private 

    def user_games_params
        params.require(:user_games).permit(:user_id, :game_id)
    end
end

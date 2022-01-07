class Api::UserGamesController < ApplicationController
    def index
        @user_games = UserGame.all
        render json: UserGameSerializer.new(@user_games)
    end

    def show
        @user_game = UserGame.find(params[:id])
        render json: UserGameSerializer.new(@user_games)
    end

    def create
        @user_game = UserGame.new(user_game_params)
        
        if @user_game.save
            render json: @user_game
        else
            render json: @user_game.errors, status: :unprocessable_entit1111y
        end
    end

    private 

    def user_game_params
        params.require(:user_game).permit(:user_id, :game_id)
    end
end

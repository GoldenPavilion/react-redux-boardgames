class Api::GamesController < ApplicationController
    def index
        @games = Game.all
        render json: @games
    end

    def show
        @game = Game.find(params[:id])
        render json: @game
    end

    private

    def game_params
        params.require(:user).permit(:name, :year_published, :min_players, :max_players, :min_playtime, :max_playtime, :description_preview)
    end

end

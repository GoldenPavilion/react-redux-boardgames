class Api::GamesController < ApplicationController
    def index
        @games = Game.all
        render json: @games
    end

    def show
        @game = Game.find(params[:id])
        render json: @game
    end

    def create
        @game = Game.new(game_params)

        if @game.save
            render json: @game, status: :created, location: @game
        else
            render json: @game.errors, status: :unprocessable_entity 
        end
    end

    private

    def game_params
        params.require(:game).permit(:name, :year_published, :min_players, :max_players, :min_playtime, :max_playtime, :description_preview)
    end

end

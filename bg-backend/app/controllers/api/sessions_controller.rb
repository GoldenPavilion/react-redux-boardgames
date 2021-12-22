class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            session[:user_id] = @user.id
            render json: @user
        else
            render json: {
                error: "Invalid"
            }
        end
    end

    def destroy
    end

    def get_current_user
        if logged_in?
            render json: current_user
        else
            render json: {
                error: "No Login"
            }
        end
    end
end

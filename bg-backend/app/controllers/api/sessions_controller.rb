class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by(username: params[:session][:username])
        if @user && @user.authenticate(params[:session][:password])
            session[:user_id] = @user.id
            render json: UserSerializer.new(@user)
        else
            render json: {
                error: "Invalid"
            }
        end
    end

    def get_current_user
        if logged_in?
            render json: UserSerializer.new(current_user)
        else
            render json: {
                error: "No Login"
            }
        end
    end

    def destroy
        if current_user
            session.clear
        end
    end
end

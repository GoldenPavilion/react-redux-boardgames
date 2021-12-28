class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def index
    @users = User.all
    render json: UserSerializer.new(@users)
  end

  def show
    render json: UserSerializer.new(@user)
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      render json: UserSerializer.new(@user), status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:username, :password_digest, :email, :location, :game_host)
    end
end

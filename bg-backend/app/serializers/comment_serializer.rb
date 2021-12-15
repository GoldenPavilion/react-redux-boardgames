class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :user, :game
end

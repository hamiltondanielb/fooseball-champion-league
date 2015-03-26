class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :wins, :losses, :email
end

// import models
const User = require('./User');
const Dog = require('./Dog');
const UserDog = require('./UserDog');

// The code below is for dogs that have been created by a user and dogs that the user owns.

// Users have many Dogs
User.hasMany(Dog, {
  foreignKey: "user_id"
});


// The code below is for the linkage when a user follows a dog.

// User belongs to many Dog (through UserDog)
User.belongsToMany(Dog, { 
  through: "user_dog",
  foreignKey: "user_id"
});

// Dog belongs to many User (through UserDog)
Dog.belongsToMany(User, {
  through: "user_dog",
  foreignKey: "dog_id"
});

module.exports = {
  User,
  Dog,
  UserDog,
};
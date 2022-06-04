const Sequelize = require("sequelize");
const db = require("../config/database");
//const Task = require("./Task");

const User = db.define('user', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    profile_picture: {
        type: Sequelize.STRING
    },
    birth_date: {
        type: Sequelize.DATE
    },
    about: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN
    }
});

// User.hasMany(Task, {foreignKey: 'user_id'}); 
// Task.belongsTo(User, {foreignKey: "user_id"});

module.exports = User;
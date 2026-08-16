const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')
const Thought = require('./Thought')

const Like = db.define('Like', {

})

Like.belongsTo(User)
Like.belongsTo(Thought)

User.hasMany(Like)
Thought.hasMany(Like)

module.exports = Like
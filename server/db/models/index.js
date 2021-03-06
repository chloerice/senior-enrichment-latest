'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into Sequelize so any other part of the application could call Sequelize.model('student') OR Sequelize.models.student to get access to the `student` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)

const Campus = require('./campus')
const Student = require('./student')
const User = require('./user')
const OAuth = require('./oauth')

Student.belongsTo(Campus, { hooks: true, onUpdate: 'cascade', constraints: false })

module.exports = { Campus, Student, User, OAuth }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workout = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises:{
        type: Array
    }},
    {
        toJSON: {
            virtuals: true
        } 
    });

workout.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, exercise)=> {
        return total + exercise.duration;
    }, 0);      
}); 
const Workout = mongoose.model('Workout', workout);
module.exports = Workout;
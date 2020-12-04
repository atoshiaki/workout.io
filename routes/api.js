const router = require("express").Router();
const Workout = require("../model/workout.js");
router.get('/api/workouts/', ( req ,res) => {
    Workout.find({})
        .sort([['day', -1]])
        .limit(1)
        .exec()
        .then(workout => {
            res.json(workout);
          }) 
          .catch(err => {
            res.status(400).json(err);
          });

});
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(workout => {
        res.json(workout);
      }) 
      .catch(err => {
        res.status(400).json(err);
      });
});
router.put('/api/workouts/:id', ( req, res) => {
    Workout.findById(req.params.id)
        .exec()
        .then(workout => {
            workout.exercises.push(req.body);
            workout.save()
                .then(workout => {
                    res.json(workout);
                })
                .catch(err => {
                    res.status(400).json(err);
                });
        })
        .catch(err => {
            res.status(400).json(err);
          });
});

router.get('/api/workouts/range', ( req ,res) => {
    Workout.find({})
        .sort([['day', -1]])
        .exec()
        .then(workouts => {
            console.log(workouts)
            res.json(workouts);
          }) 
          .catch(err => {
            res.status(400).json(err);
          });

});

module.exports = router;


var Todos = require('../models/todoModels');

module.exports = function(app){

    app.get('/api/setupTodos', function(req, res) {
        
        // seed database
        var starterTodos =[
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttchment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttchment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttchment: false
            }
        ];
        Todos.create(starterTodos, function(err, results){
            res.send(resuts);
        });
    });
}

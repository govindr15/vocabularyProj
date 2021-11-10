const addWordsRoute = require('./addWords');
const flashcardRoute = require('./flashcard');
const mainRoute = require('./main');
const mcqRoute = require('./mcq');
const path = require('path');

const constructorMethod = (app) => {
  app.use('/', mainRoute);

  app.use('/flashcard', flashcardRoute);

  app.use('/addWords', addWordsRoute);
  
  app.use('/mcq', mcqRoute);
  
    // app.use('/', (req, res) => {
    //     res.sendFile(path.resolve('static/main.html'));
    // });

    // app.use('/flashcard', (req, res) => {
    //     res.sendFile(path.resolve('static/flashcard.html'));
    // });

    // app.use('/addWords', (req, res) => {
    //     res.sendFile(path.resolve('static/addWords.html'));
    // });
  
    // app.use('/mcq', (req, res) => {
    //     res.rendor('mcq/mcqTest');
    // });

    app.use('*', (req, res) => {
        
    });
};

module.exports = constructorMethod;
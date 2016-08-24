

var AsyncStorageSchema = {
  questions: [
      {type:'binary', question: "Did you drink today?", frequency: 'daily' },
      {type: 'binary', question: 'Did you eat today?', frequency: 'daily'}

  ],
  questionsDepreciated: [
      {type:'binary', question: "Did you drink today?", frequency: 'daily' },
      {type: 'binary', question: 'Did you eat today?', frequency: 'daily'}

  ],
  answers: [
    {
      question_id: 0,
      text: "Did you drink today?",
      answers: [
        {date: 'date Object insert here', value: 0},
        {date: 'another date Object', value: 1},
        {date: 'another date Object', value: 1}
      ]
    },
    {
      question_id:1,
      type: 'binary',
      answers: [
        {date: 'date Object', value: 0},
        {date: 'date Object', value: 0},
        {date: 'date Object', value: 0}
      ]
    }

  ],
  appData: {
    tripped: false,
    numberOfActive: 0,
    hasAnsweredToday: false

  }

};

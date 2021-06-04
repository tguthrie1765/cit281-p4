const { data } = require("./p4-data.js");


function getQuestions(){
    let returnQuestion = data.map(function(item){
        return item.question
    });
return returnQuestion;
};

function getAnswers(){
    let returnAnswer = data.map(function(item){
        return item.answer;
    });
    return returnAnswer
};

function getQuestionsAnswers(){
    let questionNAnswer = JSON.parse(JSON.stringify(data));
    return questionNAnswer;
};

function getQuestion(number = ""){
    let objectToReturn = {
        error: '',
        question: '',
        number: '',
    };

    number1 = parseInt(number);
    if(number1 == NaN){
        objectToReturn.error = 'question number must be an integer'        
    }
    if(number1 < 1){
        objectToReturn.error = 'Question number must be >= 1'
    }
    if(number1 > data.length){
        objectToReturn.error = `Question number must be less than the number of questions (${data.length})`        
    }
    if(number1 >= 1 && number1 <= data.length){
        objectToReturn.question = `${data[number1-1].question}`
        objectToReturn.number = number1
    }
    return objectToReturn;
};

function getAnswer(number = "") {
    let objectToReturn = {
        error: '',
        answer: '',
        number: '',
    };

    number1 = parseInt(number);
    if(number1 == NaN){
        objectToReturn.error = 'question number must be an integer'        
    }
    if(number1 < 1){
        objectToReturn.error = 'Question number must be >= 1'
    }
    if(number1 > data.length){
        objectToReturn.error = `Question number must be less than the number of questions (${data.length})`        
    }
    if(number1 >= 1 && number1 <= data.length){
        objectToReturn.answer = `${data[number1-1].answer}`
        objectToReturn.number = number1
    }
    return objectToReturn;
};

function getQuestionAnswer(number = ""){
    let objectToReturn = {
        question: '',
        answer: '',
        number: '',
        error: '',
    };

    number1 = parseInt(number);
    if(number1 == NaN){
        objectToReturn.error = 'question number must be an integer'        
    }
    if(number1 < 1){
        objectToReturn.error = 'Question number must be >= 1'
    }
    if(number1 > data.length){
        objectToReturn.error = `Question number must be less than the number of questions (${data.length})`        
    }
    if(number1 >= 1 && number1 <= data.length){
        objectToReturn.question = `${data[number1-1].question}`
        objectToReturn.answer = `${data[number1-1].answer}`
        objectToReturn.number = number1
    }
    return objectToReturn;
};

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
const testGetQs = true;
const testGetAs = true;
const testGetQsAs = true;
const testGetQ = true;
const testGetA = true;
const testGetQA = true;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }


  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
  }

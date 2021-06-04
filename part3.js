const fastify = require('fastify')();
const {getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer} = require("./p4-module.js")

fastify.get('/cit/question',(request, reply) =>{
    const getQuest = getQuestions();
    
    reply
        .code(200)
        .header("Content-Type","application/json; charset=utf-8")
        .send({error: '', statusCode: 200, questions: getQuest});
});

fastify.get('/cit/answer',(request, reply) =>{
    const getAns = getAnswers();
    
    reply
        .code(200)
        .header("Content-Type","application/json; charset=utf-8")
        .send({error: '', statusCode: 200, questions: getAns});
});

fastify.get('/cit/questionanswer',(request, reply) =>{
    const getAns = getQuestionsAnswers();
    
    reply
        .code(200)
        .header("Content-Type","application/json; charset=utf-8")
        .send({error: '', statusCode: 200, questions_answers: getAns});
});

fastify.get('/cit/question/:number',(request, reply) =>{
    const {number}= request.params;
    const getAns = getQuestion(parseInt(number));

    reply
    .code(200)
    .header("Content-Type","application/json; charset=utf-8")
    .send({error: getAns.error, statuscode: 200, question: getAns.question, number: number});    
});
    
fastify.get('/cit/answer/:number',(request, reply) =>{
    const {number}= request.params;
    const getAns = getAnswer(parseInt(number));

    reply
    .code(200)
    .header("Content-Type","application/json; charset=utf-8")
    .send({error: getAns.error, statuscode: 200, answer: getAns.answer, number: number});    
});

fastify.get('/cit/questionanswer/:number',(request, reply) =>{
    const {number}= request.params;
    const getAns = getQuestionAnswer(parseInt(number));

    reply
    .code(200)
    .header("Content-Type","application/json; charset=utf-8")
    .send({error: getAns.error, statuscode: 200, question: getAns.question, answer: getAns.answer, number: number});    
});

fastify.get('*',(request, reply) =>{
    
    reply
    .code(404)
    .header("Content-Type","application/json; charset=utf-8")
    .send({error: 'Route not found', statuscode: 404});    
});

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});

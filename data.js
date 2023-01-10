db.User.insertMany([
    {
     User: 12,
     codekata: 24,
     attendance: 98,
     Absent:2,
     tasks: 11,
     Not_SubmitTask:5,
     topic: "What is hook?,Lifecycle of Hook",
     Date:"15 aug",
     company_drives: 61,
     mentors: 14,
     placement:20,
     id: "1"
    },
    {
     User: 25,
     codekata: 7,
     Absent:2,
     topic: "useState, useEffect,Passing data from child to parent component",
     attendance: 44,
     Date:"16 sep",
     tasks: 4,
     Not_SubmitTask:2,
     company_drives: 69,
     mentors: 31,
     placement:5,
     id: "2"
    },
    {
     User: 49,
     codekata: 96,
     attendance: 76,
     Date:"17 oct",
     topic: "ex:- hangman / tictactoe / tile match",
     Absent:5,
     Not_SubmitTask:1,
     tasks: 23,
     company_drives: 42,
     placement:10,
     mentors: 94,
     id: "3"
    },
    {
     User: 75,
     codekata: 67,
     attendance: 71,
     topic: "Playing around with API,fetch() or axios",
     tasks: 91,
     Date:"18 oct",
     Absent:1,
     company_drives: 49,
     placement:9,
     Not_SubmitTask:2,
     mentors: 5,
     id: "4"
    },
    {
     User: 92,
     codekata: 3,
     attendance: 31,
     topic: "Recap of callback, Pormise Topics",
     tasks: 73,
     Not_SubmitTask:10,
     Absent:5,
     Date:"19 oct",
     company_drives: 97,
     placement:5,
     mentors: 52,
     id: "5"
    },
    {
     User: 45,
     codekata: 44,
     attendance: 29,
     topic: "What is context, provide, createContext,Avoid props drilling",
     tasks: 25,
     Date:"20 oct",
     Absent:2,
     company_drives: 60,
     placement:8,
     Not_SubmitTask:7,
     mentors: 20,
     id: "6"
    },
    {
     User: 21,
     codekata: 99,
     attendance: 61,
     tasks: 18,
     topic: "Implementing CRUD with HTML, CSS JavaScrip",
     Date:"21 oct",
     company_drives: 59,
     Absent:2,
     mentors: 73,
     Not_SubmitTask:6,
     placement:15,
     id: "7"
    },
    {
     User: 22,
     codekata: 11,
     attendance: 38,
     topic: "What is mobile first approach?,How to setup bootstrap?",
     tasks: 71,
     Date:"22 oct",
     company_drives: 42,
     placement:7,
     Not_SubmitTask:4,
     mentors: 81,
     id: "8"
    },
    {
     User: 24,
     codekata: 52,
     attendance: 71,
     topic: "What is a grid in bootstrap?,how to do nested columns, column ordering?",
     tasks: 27,
     Date:"23 aug",
     company_drives: 91,
     mentors: 55,
     Not_SubmitTask:9,
     placement:5,
     id: "9"
    },
    {
     User: 61,
     codekata: 79,
     attendance: 8,
     tasks: 52,
     company_drives: 62,
     topic: "Scoping - var vs let vs const,template literals",
     mentors: 35,
     Date:"24 oct",
     placement:10,
     Not_SubmitTask:1,
     id: "10"
    },
    {
     User: 98,
     codekata: 48,
     attendance: 6,
     tasks: 20,
     topic: "array & object destructure,module import & export",
     company_drives: 20,
     mentors: 79,
     Date:"25 oct",
     placement:5,
     Not_SubmitTask:6,
     id: "11"
    },
    {
     User: 31,
     codekata: 66,
     attendance: 53,
     tasks: 35,
     Date:"26 sep",
     topic: "Class in Javascript,Working with array lists",
     company_drives: 33,
     placement:7,
     Not_SubmitTask:5,
     mentors: 4,
     id: "12"
    },
    {
     User: 27,
     codekata: 19,
     attendance: 85,
     topic: "Props vs state,react-router-dom",
     Date:"27 oct",
     tasks: 95,
     company_drives: 5,
     Not_SubmitTask:1,
     placement:15,
     mentors: 93,
     id: "13"
    }
   ]) 

  // Find all the topics and tasks which are thought in the month of October
 db.User.find({},{topic:1,tasks:1,Date:"oct"}).pretty()

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.User.find({},{company_drives:1,Date:"oct"}).pretty()
//Find all the company drives and students who are appeared for the placement.
db.User.find({},{company_drives:1,placement:1}),pretty()
//Find the number of problems solved by the user in codekata
db.User.find({},{codekata:1,User:1}).pretty()
//Find all the mentors with who has the mentee's count more than 15
db.User.find({mentors:{$gt:15}}).pretty()
//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.User.find({},{User:1,Absent:1,Not_SubmitTask:1,Date:"oct"}).pretty()
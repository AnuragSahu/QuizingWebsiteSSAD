package main

import (
  "fmt"
  "github.com/jinzhu/gorm"                            // ORM package for Go
  _ "github.com/jinzhu/gorm/dialects/sqlite"          // for SQLite. Only imports functions so that ORM can use. Hence the '_'
)

// This is the structure for your database. Very similar to how SQLAlchemy works with Flask.
type Person struct {
  ID uint `json:"personid"`
  FirstName string `json:"firstname"`
  LastName string `json:"lastname"`
}

type Quiz struct {
  ID uint `json:"questionid"`
  Genre string `json:"genre"`
  Question string `json:"question"`
  Option1 string `json:"option1"`
  Option2 string `json:"option2"`
  Option3 string `json:"option3"`
  Option4 string `json:"option4"`
  CorrectAnswer string `json:"correctoption"`
}

type Attempt struct {
  ID uint `json:"attemptid"`
  Score string `json:"score"`
  PersonId string `json:"personid"`
}




func main() {
   db, _ := gorm.Open("sqlite3", "./gorm.db")             // Creates an SQLite database, stores it in the file.
   defer db.Close()                                       // defer basically tells it to execute at the end of the main function's scope
   db.AutoMigrate(&Person{},&Quiz{},&Attempt{})                              // Creates database based on the Person structure as schema
   q1 := Quiz{Genre: "Politics1",Question: "Minimum age required to contest for Loksabha election?",Option1: "35 Years", Option2: "28 Years", Option3: "30 Years", Option4: "25 Years", CorrectAnswer: "4"}
   q2 := Quiz{Genre: "Politics1",Question: "When and where was the first EVM (Electronic Voting Machine) used?",Option1: "1982, Kerala", Option2: "1981, karnataka", Option3: "1998, Maharastra", Option4: "2000, West Benga", CorrectAnswer: "1"}
   q3 := Quiz{Genre: "Politics1",Question: "Nagar Palika Bill was first introduced in Parliament during the Prime Ministership of",Option1: "Lal Bahadur Shastri", Option2: "Rajiv Gandhi", Option3: "Indira Gandhi", Option4: "V P Singh", CorrectAnswer: "2"}
   q4 := Quiz{Genre: "Politics1",Question: "Who is the first Predent of Indian National Congress?",Option1: "M K Gandhi", Option2: "W C Bonnerjee", Option3: "Dadabhai Naoroji", Option4: "George Yule", CorrectAnswer: "2"}
   q5 := Quiz{Genre: "Politics1",Question: "Minimum age required to contest for Presidentship in India?",Option1: "35 Years", Option2: "28 Years", Option3: "30 Years", Option4: "25 Years", CorrectAnswer: "1"}
   q6 := Quiz{Genre: "Statistics1",Question: "The expected value or _______ of a random variable is the center of its distribution.",Option1: "mode", Option2: "median", Option3: "mean", Option4: "bayesian inference", CorrectAnswer: "3"}
   q7 := Quiz{Genre: "Statistics1",Question: "Which of the following of a random variable is a measure of spread ?",Option1: "vaiance", Option2: "standard deviation", Option3: "empirical mean", Option4: "All the above", CorrectAnswer: "1"}
   q8 := Quiz{Genre: "Statistics1",Question: "The square root of the variance is called the ________ deviation.",Option1: "empirical", Option2: "mean", Option3: "Continuous", Option4: "standard", CorrectAnswer: "4"}
   q9 := Quiz{Genre: "Statistics1",Question: "Chebyshev’s inequality states that the probability of a “Six Sigma” event is less than :",Option1: "10%", Option2: "20%", Option3: "30%", Option4: "3%", CorrectAnswer: "4"}
   q10 := Quiz{Genre: "Statistics1",Question: "Which of the following random variables are the default model for random samples ?",Option1: "iid", Option2: "id", Option3: "pmd", Option4: "All the above", CorrectAnswer: "1"}
   p1 := Person{FirstName: "John", LastName: "Doe"}
   // p2 := Person{FirstName: "Jane", LastName: "Smith"}     // Example Person objects being created
   db.Create(&p1)                                         // Creates an entry in the db with the object p1
   db.Create(&q1)
   db.Create(&q2)
   db.Create(&q3)
   db.Create(&q4)
   db.Create(&q5)
   db.Create(&q6)
   db.Create(&q7)
   db.Create(&q8)
   db.Create(&q9)
   db.Create(&q10)
   var p3 Person                                          // identify a Person type for us to store the results in
   var qq1 Quiz
   db.First(&qq1)
   db.First(&p3)                                          // Find the first record in the Database and store it in p3
   //fmt.Println("Hello World")
   fmt.Println(p3.FirstName)
   //fmt.Println(qq1.Genre)
   //fmt.Println(qq1.Question)
   fmt.Println(p3.LastName)                               // print out our record from the database
}

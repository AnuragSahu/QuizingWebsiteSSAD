package main

import (
   "fmt"
   "github.com/gin-contrib/cors"                        // Why do we need this package?
   "github.com/gin-gonic/gin"
   "github.com/jinzhu/gorm"
   _ "github.com/jinzhu/gorm/dialects/sqlite"           // If you want to use mysql or any other db, replace this line
)

var db *gorm.DB                                         // declaring the db globally
var err error

type Person struct {
   ID uint `json:"id"`
   Name string `json:"name"`
   Password string `json:"password"`
}


type QuizGenre struct{
  ID uint `json:"id"`
  Name string `json:"name_of_genre"`
}

type QuizsInGenre struct
{
  ID uint `json:"id"`
  GenreName string `json:"genrename"`
  QuizNo string `json:"quizno"`
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
    Genre string `json:"genre"`
    Score string `json:"score"`
    PersonId string `json:"personid"`
  }

func main() {
   db, err = gorm.Open("sqlite3", "./gorm.db")
   if err != nil {
      fmt.Println(err)
   }
   defer db.Close()

   db.AutoMigrate(&Person{},&Attempt{},&Quiz{},&QuizGenre{},&QuizsInGenre{})
   r := gin.Default()
   r.GET("/allquestions/",GetQuestions)
   r.GET("/genres/",GetGenres)
   r.GET("/question/:id", GetQuesNo)
   r.GET("/people/", GetPeople)                             // Creating routes for each functionality
   r.GET("/people/:id", GetPerson)
   r.POST("/userpresent/",UserPresent)
   r.POST("/putpeople/", CreatePerson)
   r.POST("/putscore/", CreateScore)
   r.POST("/putquestion/", CreateQuestion)
   r.PUT("/people/:id", UpdatePerson)
   r.DELETE("/people/:id", DeletePerson)
   r.DELETE("/question/:id", DeleteQuestion)
   r.Use((cors.Default()))
   r.Run(":8080")                                           // Run on port 8080
}


func DeletePerson(c *gin.Context) {
   id := c.Params.ByName("id")
   var person Person
   d := db.Where("id = ?", id).Delete(&person)
   fmt.Println(d)
   c.Header("access-control-allow-origin", "*")
   c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func DeleteQuestion(c *gin.Context) {
  id := c.Params.ByName("id")
  var person Quiz
  d := db.Where("id = ?", id).Delete(&person)
  fmt.Println(d)
  c.Header("access-control-allow-origin", "*")
  c.JSON(200, gin.H{"id #" + id: "deleted"})
}


func UpdatePerson(c *gin.Context) {
   var person Person
   id := c.Params.ByName("id")
   if err := db.Where("id = ?", id).First(&person).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   }
   c.BindJSON(&person)
   db.Save(&person)
   c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
   c.JSON(200, person)
}

func CreatePerson(c *gin.Context) {
   var person Person
   c.BindJSON(&person)
   fmt.Println(person.Name)
   db.Create(&person)
   c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
   c.JSON(200, person)
}


func CreateScore(c *gin.Context) {
  fmt.Println("Hello")
  /*var person Attempt
  c.BindJSON(&person)
  fmt.Println(person.score)
  db.Create(&person)
  c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
  c.JSON(200, person)*/
}


func CreateQuestion(c *gin.Context) {
  var quiz Quiz
  c.BindJSON(&quiz)
  fmt.Println(quiz.Question)
  db.Create(&quiz)
  c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
  c.JSON(200, quiz)
}


func UserPresent(c *gin.Context) {
  var par Person
  c.BindJSON(&par)
  fmt.Println(par.Name) 
  if err := db.Where("name = ? AND password = ?",par.Name, par.Password).First(&par).Error; err!=nil {
    c.AbortWithStatus(404)
      fmt.Println(err)
  }  else {
    c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
    c.JSON(200, par)
 }  
}

func GetPerson(c *gin.Context) {
   id := c.Params.ByName("id")
   var person Person
   if err := db.Where("id = ?", id).First(&person).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
      c.JSON(200, person)
   }
}

func GetQuesNo(c *gin.Context) {
  id := c.Params.ByName("id")
  var quiz Quiz
  if err := db.Where("id = ?", id).First(&quiz).Error; err != nil {
     c.AbortWithStatus(404)
     fmt.Println(err)
  } else {
     c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
     c.JSON(200, quiz)
  }
}

func GetPeople(c *gin.Context) {
    var person []Person
    if err := db.Find(&person).Error; err != nil {
       c.AbortWithStatus(404)
       fmt.Println(err)
    } else {
       c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
       c.JSON(200, person)
    }
 }

func GetQuestions(c *gin.Context) {
    var quiz []Quiz
    if err := db.Find(&quiz).Error; err != nil {
       c.AbortWithStatus(404)
       fmt.Println(err)
    } else {
       c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
       c.JSON(200, quiz)
    }
 }



 func GetGenres(c *gin.Context) {
  var genre []QuizGenre
  if err := db.Find(&genre).Error; err != nil {
     c.AbortWithStatus(404)
     fmt.Println(err)
  } else {
     c.Header("access-control-allow-origin", "*") // Why am I doing this? Find out. Try running with this line commented
     c.JSON(200, genre)
  }
}
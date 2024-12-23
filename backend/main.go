package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/WTNB1225/casino/backend/handler"
)

func main() {
	e := echo.New()
	
	// setting middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// connect to db
	db, err := handler.OpenDB()
	if err != nil {
		e.Logger.Fatal(err)
	}
	handler.DB = db

	// routing
	e.GET("/users", handler.ListUsers)
	e.GET("/users/:id", handler.GetUser)
	e.POST("/users", handler.CreateUser)
	e.PUT("/users/:id", handler.UpdateUser)
	e.DELETE("/users/:id", handler.DeleteUser)

	//start server
	e.Logger.Fatal(e.Start(":3030"))
}
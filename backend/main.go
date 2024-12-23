package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/WTNB1225/casino/backend/handler"
	echojwt "github.com/labstack/echo-jwt/v4"
	"github.com/golang-jwt/jwt/v5"
)

type jwtCustomClaims struct {
	UserName string `json:"username"`
	Admin	bool   `json:"admin"`
	jwt.RegisteredClaims
}

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
	
	// Configure middleware with the custom claims type
	config := echojwt.Config{
		NewClaimsFunc: func(c echo.Context) jwt.Claims {
			return new(jwtCustomClaims)
		},
		SigningKey: []byte("secret"),
	}


	// routing
	e.GET("/users", handler.ListUsers)
	e.GET("/users/:id", handler.GetUser, echojwt.WithConfig(config))
	e.POST("/users", handler.CreateUser)
	e.PUT("/users/:id", handler.UpdateUser)
	e.DELETE("/users/:id", handler.DeleteUser)

	e.POST("/login", handler.Login)

	//start server
	e.Logger.Fatal(e.Start(":3030"))
}
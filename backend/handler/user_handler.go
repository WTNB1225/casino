package handler

import (
	"fmt"
	"net/http"
	"time"
	"github.com/WTNB1225/casino/backend/model"
	"github.com/WTNB1225/casino/backend/request"
	"github.com/labstack/echo/v4"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB
var user model.User
var users []model.User
var userRequest request.UserRequest

func OpenDB() (*gorm.DB, error) {
	dsn := "host=172.17.0.2 user=postgres password=postgres dbname=postgres port=5432 sslmode=disable TimeZone=Asia/Tokyo"
	var err error
	DB, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	DB.AutoMigrate(&model.User{})
	return DB, nil
}

func ListUsers(c echo.Context) error {
	if err := DB.Find(&users).Error; err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	fmt.Println(users)
	return c.JSON(http.StatusOK, users)
}

func GetUser(c echo.Context) error {
	userId := c.Param("id")
	if err := DB.First(&user, userId).Error; err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	return c.JSON(http.StatusOK, user)
}

func CreateUser(c echo.Context) error {
	err := c.Bind(&userRequest); if err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(userRequest.Password), bcrypt.DefaultCost)
	fmt.Println(hashedPassword)

	userRecord := model.User {
		UserName: userRequest.UserName,
		Email: userRequest.Email,
		HashedPassword: string(hashedPassword),
		CreatedAt: time.Now(),
	}

	if err := DB.Create(&userRecord).Error; err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	return c.JSON(http.StatusOK, userRecord)
}

func UpdateUser(c echo.Context) error {
	return c.JSON(http.StatusOK, "UpdateUser")
}

func DeleteUser(c echo.Context) error {
	return c.JSON(http.StatusOK, "DeleteUser")
}
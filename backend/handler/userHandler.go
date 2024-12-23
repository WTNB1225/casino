package handler

import (
	"net/http"
	"github.com/labstack/echo/v4"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"github.com/WTNB1225/casino/backend/model"
	"fmt"
)

var DB *gorm.DB
var user model.User
var users []model.User

func OpenDB() (*gorm.DB, error) {
	dsn := "host=172.17.0.2 user=postgres password=postgres dbname=postgres port=5432 sslmode=disable TimeZone=Asia/Tokyo"
	var err error
	DB, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}
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
	return c.JSON(http.StatusOK, "GetUser")
}

func CreateUser(c echo.Context) error {
	return c.JSON(http.StatusOK, "CreateUser")
}

func UpdateUser(c echo.Context) error {
	return c.JSON(http.StatusOK, "UpdateUser")
}

func DeleteUser(c echo.Context) error {
	return c.JSON(http.StatusOK, "DeleteUser")
}
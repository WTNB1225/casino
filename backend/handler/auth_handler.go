package handler

import (
	"github.com/labstack/echo/v4"
	"github.com/WTNB1225/casino/backend/request"
	"net/http"
	"golang.org/x/crypto/bcrypt"
	"github.com/golang-jwt/jwt/v5"
	"time"
)

type jwtCustomClaims struct {
	UserName string `json:"username"`
	Admin	bool   `json:"admin"`
	jwt.RegisteredClaims
}

var loginRequest request.LoginRequest

func Login(c echo.Context) error {
	err := c.Bind(&loginRequest); if err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	if err := DB.Where("email = ?", loginRequest.Email).First(&user).Error; err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	
	status := bcrypt.CompareHashAndPassword([]byte(user.HashedPassword), []byte(loginRequest.Password))
	if status != nil {
		return c.JSON(http.StatusBadRequest, "Login Failed")
	}

	claims := &jwtCustomClaims{
		user.UserName,
		false,
		jwt.RegisteredClaims {
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 72)),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	t, err := token.SignedString([]byte("secret"))
	if err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	return c.JSON(http.StatusOK, echo.Map{
		"token": t,
	})
}

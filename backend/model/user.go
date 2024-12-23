package model

import (
	"time"
)

type User struct {
	ID             int    `gorm:"primary_key,unique,not null"`
	UserName       string `gorm:"unique,length:20,not null"`
	Email          string `gorm:"unique,not null"`
	HashedPassword string `gorm:"not null"`
	CreatedAt      time.Time
	UpdatedAt      time.Time
}

package model

import (
	"time"
)

type User struct {
	ID             int    `gorm:"primaryKey"`
	UserName       string `gorm:"unique;not null"`
	Email          string `gorm:"unique;not null"`
	HashedPassword string `gorm:"not null"`
	CreatedAt      time.Time
	UpdatedAt      time.Time
}

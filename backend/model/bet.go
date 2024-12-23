package model

import (
	"time"
)

type Bet struct {
	ID int `gorm:"primary_key,unique"`
	UserID int
	Status bool
	Stake int
	Payout int
	CreatedAt time.Time
	UpdatedAt time.Time
}
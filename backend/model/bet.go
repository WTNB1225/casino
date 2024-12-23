package model

import (
    "time"
)

type Bet struct {
    ID        int       `gorm:"unique;not null;primaryKey"`
    UserID    int       `gorm:"not null"`
    Status    bool      `gorm:"not null"`
    Stake     int       `gorm:"not null"`
    Payout    int       `gorm:"not null"`
    CreatedAt time.Time
    UpdatedAt time.Time
}
package request

type UserRequest struct {
	UserName string `json:"username"`
	Email string `json:"email"`
	Password string `json:"password"`
}

type LoginRequest struct {
	Email string `json:"email"`
	Password string `json:"password"`
}
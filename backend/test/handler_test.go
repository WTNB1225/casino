package handler

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/WTNB1225/casino/backend/handler"
	"github.com/WTNB1225/casino/backend/model"
	"github.com/labstack/echo/v4"
	"github.com/stretchr/testify/assert"
)

var (
	userValidJSON = `{"username":"test1","email": "test@email.com", "password": "password"}`
	userValidJSON2 = `{"username":"test2","email": "test2@email.com", "password": "password"}`
)

func TestCreateUser(t *testing.T) {
	e := echo.New()
	db, err := handler.OpenDB()
	if err != nil {
		e.Logger.Fatal(err)
	}
	handler.DB = db

	// 正しいJSONを送信
	req := httptest.NewRequest(http.MethodPost, "/users", strings.NewReader(userValidJSON))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)
	if assert.NoError(t, handler.CreateUser(c)) {
		assert.Equal(t, http.StatusOK, rec.Code) // ステータスコードのチェック
	}

	// 同じJSONを再度送信 -> 重複エラー
	req = httptest.NewRequest(http.MethodPost, "/users", strings.NewReader(userValidJSON))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
	rec = httptest.NewRecorder()
	c = e.NewContext(req, rec)
	if assert.Nil(t, handler.CreateUser(c)) {
		assert.Equal(t, http.StatusBadRequest, rec.Code) // ステータスコードのチェック
	}

	// 異なるJSONを送信
	req = httptest.NewRequest(http.MethodPost, "/users", strings.NewReader(userValidJSON2))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
	rec = httptest.NewRecorder()
	c = e.NewContext(req, rec)
	if assert.NoError(t, handler.CreateUser(c)) {
		assert.Equal(t, http.StatusOK, rec.Code) // ステータスコードのチェック
	}

	// ユーザ一覧を取得
	req = httptest.NewRequest(http.MethodGet, "/users", nil)
	rec = httptest.NewRecorder()
	c = e.NewContext(req, rec)
	if assert.NoError(t, handler.ListUsers(c)) {
		assert.Equal(t, http.StatusOK, rec.Code) // ステータスコードのチェック
		var users[] model.User
		if assert.NoError(t, json.Unmarshal(rec.Body.Bytes(), &users)) {
			assert.Equal(t, 2, len(users)) // ユーザ数のチェック
		}
	}
}
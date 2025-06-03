package app

func (app *Application) AddUser(user User) (string, error) {
	checkUserExistsQuery := `select * from users where username=$1`
	result, err := app.DB.Exec(checkUserExistsQuery, user.Username)
	if err != nil {
		return "", err
	}

	rowsAffected, err := result.RowsAffected()
	if rowsAffected > 0 {
		return "This username already exists, pick another one!", nil
	}

	hashPassword, err := app.HashPassword(user.Password)
	if err != nil {
		return "", err
	}

	addUserQuery := `insert into users(username, password) values($1, $2)`
	_, err = app.DB.Exec(addUserQuery, user.Username, hashPassword)
	if err != nil {
		return "", err
	}

	return "Your account has been created successfully!", nil
}

// func (app *Application) LoginUser(user User) (bool, User, string, error) {

// }

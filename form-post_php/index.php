<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Регистрация</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <h1>Регистрация</h1>
  <form action="cabinet.php" method="POST" enctype="multipart/form-data">
    <div class="form-input">
      <label for="firstName">Имя:</label>
      <input type="text" name="firstName" id="firstName" />
    </div>
    <div class="form-input">
      <label for="lastName">Фамилия:</label>
      <input type="text" name="lastName" id="lastName" />
    </div>
    <div class="form-input">
      <label for="login">Логин:</label>
      <input type="text" name="login" id="login" />
    </div>
    <div class="form-input">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" />
    </div>
    <div class="form-input">
      <label for="password">Пароль:</label>
      <input type="password" name="password" id="password" />
    </div>
    <div class="form-input">
      <label for="avatar">Аватар:</label>
      <input type="file" name="avatar" id="avatar" />
    </div>
    <div class="form-input">
      <input type="submit" value="Зарегистрироваться" />
    </div>
  </form>
</body>

</html>
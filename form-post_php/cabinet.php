<?php
  $avatar = $_FILES['avatar'];
  $avatarPath = 'images/'.time().'_'.$avatar['size'].'_'.$avatar['name'];
  move_uploaded_file($avatar['tmp_name'], $avatarPath);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Личный кабинет</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div class="user">
    <img src="<?=$avatarPath?>" alt="<?=$_POST['firstName']?> <?=$_POST['lastName']?>" />
    <h2>Добро пожаловать, <?=$_POST['firstName']?> <?=$_POST['lastName']?></h2>
    <p>Логин: <?=$_POST['login']?></p>
    <p>Email: <?=$_POST['email']?></p>
    <p>Пароль: <?=$_POST['password']?></p>
  </div>
</body>

</html>

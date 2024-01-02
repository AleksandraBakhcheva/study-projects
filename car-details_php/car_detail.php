<?php
  $cars = require 'data.php';
  $carId = (int)$_GET['carId'];
  $foundCar = null;

  if(!$carId) {
    header('Location: error.html');
  }

  foreach ($cars as $car) {
    if($car['id'] === $carId) {
      $foundCar = $car;
      break;
    }
  }

  if(!isset($foundCar)) {
    header('Location: error.html');
  }
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?=$foundCar['maker']?> <?=$foundCar['model']?></title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="car-item">
    <img src="<?=$foundCar['image']?>" alt="<?=$foundCar['maker']?> <?=$foundCar['model']?>" />
    <div class="car-info">
      <h2><?=$foundCar['maker']?> <?=$foundCar['model']?></h2>
      <p>Год выпуска: <?=$foundCar['made_year']?> г.</p>
      <p>Максимальная скорость: <?=$foundCar['top_speed']?> км/ч</p>
      <p>Ускорение до 10км/ч: <?=$foundCar['acceleration_to_100']?> с</p>
      <p>Мощность: <?=$foundCar['power']?> л/с</p>
      <p>Масса: <?=$foundCar['weight']?> кг</p>
      <a class="button" href="/">К списку авто</a>
    </div>
  </div>
</body>

</html>

<?php
  require 'array.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Dogs</title>
  <link rel="stylesheet" href="assets/style.css">
</head>

<body>
  <div class="dogs">
    <?php foreach ($dogs as $key => $dog):?>
      <div class="dog dog-<?=$key+1?>">
        <div>
          <img src="<?=$dog['avatar']?>" alt="<?=$dog['name']?>">
          <h3>Кличка: <?=$dog['name']?></h3>
          <h5>Порода: <?=$dog['breed']?></h5>
          <p>Возраст: <?=$dog['age']?></p>
          <p class="phones">Телефоны хозяина:
          <?php foreach ($dog['ownerPhones'] as $phone):?>
          <span><?=$phone?></span>
          <?php endforeach;?>
          </p>
          <div class="address">
          <h5>Адрес хозяина:</h5>
          <ul>
            <li>Город: <?=$dog['ownerAddress']['city']?></li>
            <li>Улица: <?=$dog['ownerAddress']['street']?></li>
            <li>Дом: <?=$dog['ownerAddress']['houseNumber']?></li>
          </ul>
          </div>
        </div>
      </div>
      <?php endforeach;?>
  </div>
</body>

</html>



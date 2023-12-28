<?php
  require 'menu.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?=$title?></title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
<header>
  <div>
    <div class="logo">
      <a href="/">
        <div>LOGO</div>
      </a>
    </div>
    <h2><?=$headerTitle ?? 'Header'?></h2>
    <nav>
      <ul>
        <?=printMenu($headerMenu)?>
      </ul>
    </nav>
  </div>
</header>

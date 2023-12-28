<?php
$headerMenu = [
  '/' => 'Home',
  'news.php' => 'News',
  'shop.php' => 'Shop',
  'contacts.php' => 'Contacts',
  'about.php' => 'About',
];

$footerMenu = [
  '/' => 'Home',
  'contacts.php' => 'Contacts',
  'about.php' => 'About',
];

function printMenu($menuPar) {
  foreach ($menuPar as $link => $description) {
    echo "<li><a href='$link'>$description</a></li>";
  }
}
?>
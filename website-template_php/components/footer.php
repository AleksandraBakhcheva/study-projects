<?php
  $today = getdate();
?>

<footer>
  <h3><?=$footerTitle ?? 'Footer'?></h3>
  <nav>
    <ul>
      <?=printMenu($footerMenu)?>
    </ul>
  </nav>
  <p>Copyright © <?=$today['year']?></p>
</footer>
</body>

</html>
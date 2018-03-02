<?php
//variables
define('SITE_ROOT', dirname(__FILE__));
$header = SITE_ROOT . '/includes/header.php';
$footer = SITE_ROOT . '/includes/footer.php';

//Functions
function includeGlobals() {
  global $header, $footer;
  echo $header;
}

?>

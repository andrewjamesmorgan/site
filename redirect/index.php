<?php
  header("HTTP/1.1 301 Moved Permanently");
  header("Location: http://www.allwynsanger.com" . $_SERVER["REQUEST_URI"]);
  exit();
?>

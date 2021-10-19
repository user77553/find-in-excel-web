<?php

$search = $_POST["search"];

if ($search) {

    exec("python3 finder.py ".$search, $output);

    echo implode("", $output);

}
?>

<?php

require 'core/bootstrap.php';

$routes = [];

$router-define([
	'' => 'controllers/index.php',
	'test' => 'controllers/test.php'
	]);

$router = new router();
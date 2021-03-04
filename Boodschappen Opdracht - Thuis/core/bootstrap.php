<?php


//router
require 'core/router.php';

//Required for connection
require 'core/database/connection.php';

//Required for making queries to database
require 'core/database/querybuilder.php';
require 'core/items.php';
$config = require 'config.php';




//Connects to SQL database, located in database/connection.php
$connection = connection::make($config['database']);
$query = new makeQuery($connection);
$Items = $query->selectAll('items', 'groceries');

// throw exceptions, when SQL error is caused
$connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
// prevent emulation of prepared statements
$connection->setAttribute(\PDO::ATTR_EMULATE_PREPARES, false);


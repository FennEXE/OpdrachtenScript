<?php

//Required for connection
require 'database/connection.php';

//Required for making queries to database
require 'database/querybuilder.php';
require 'items.php';

//Connects to SQL database, located in database/connection.php
$connection = connection::make();
$query = new makeQuery($connection);
$Items = $query->selectAll('items', 'groceries');

// throw exceptions, when SQL error is caused
$connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
// prevent emulation of prepared statements
$connection->setAttribute(\PDO::ATTR_EMULATE_PREPARES, false);
<?php

//Fetches values to a class located in items.php
//Obsolete as this is moved to a class in database/querybuilder.php
/*function fetchAllItems($connection)
{
	$sqlSelect = $connection->prepare('SELECT * FROM items');

	$sqlSelect->execute();

	return $sqlSelect->fetchAll(PDO::FETCH_CLASS, 'item');
}*/

/*
//This is necessary to connect to the database. Currently unsecure
function DatabaseConnect()
{
	//Adress of the database
	$dsn = 'mysql:dbname=groceries;host=localhost;port=3306;charset=utf8';
	//Username for login
	$username = 'root';
	//Password, currently empty
	$password = '';
	try 
	{
		return new PDO($dsn, $username, $password);
	} catch (PDOException $e) {
		//Error message for when database can't be reached
		echo($e->getMessage());
	}
}
*/
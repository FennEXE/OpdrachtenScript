<?php

class Connection
{
	public static function make()
	{
		//Database info, change when needed
		$db = "groceries"; //Name of database
		$host = "localhost"; //Host of database
		$port = "3306"; //Port of database

		//These are used to log in to database
		$username = 'root'; //Username
		$password = ''; //Password

		//Adress of the database
		$dsn = "mysql:dbname={$db};host={$host};port={$port};charset=utf8";
		
		try 
		{
			return new PDO($dsn, $username, $password);
		} catch (PDOException $e) {
			//Error message for when database can't be reached
			die($e->getMessage());
		}
	}
}
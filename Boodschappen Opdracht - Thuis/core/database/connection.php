<?php

class Connection
{
	public static function make($config)
	{
		

		//Adress of the database
		$dsn = "mysql:dbname=" . $config["db"] . ";host=" . $config["host"] . ";port=" . $config["port"] . ";charset=utf8";

		try 
		{
			return new PDO($dsn, $config["username"], $config["password"]);

		} catch (PDOException $e) {
			//Error message for when database can't be reached
			die($e->getMessage());
		}
	}
}
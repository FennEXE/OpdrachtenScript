<?php

//Old code:
//[0] is amount, [1] is price
/*
$boodschappen = [
	"brood" => array(0, 1.00), 
	"broccoli" => array(0, 0.99), 
	"krentenbollen" => array(0, 1.20), 
	"noten" => array(0, 1.20)
];
*/

//id, name, number, price 
/*class item 
{
	public $id;
	public $name;
	public $number;
	public $price;

	public function __construct($id, $name, $number, $price)
	{
		//Automatically triggered on instantiation
		$this->id = $id;
		$this->name = $name;
		$this->number = $number;
		$this->price = $price;
	}

	public function isUnique()
	{
		$this->price = 1.50;
		return $this->price;
	}
}
*/
/*
$item = [
	new item(0, "placeholder", 0, 0),
	new item(1, "brood", 0, 1.00),
	new item(2, "broccoli", 0, 0.99),
	new item(3, "krentenbollen", 0, 1.20),
	new item(4, "noten", 0, 1.20),
	new item(5, "baguette", 0, 0.50)
];
*/

/* works, learning new method of connecting through function.
try 
{
$connection = new PDO($dsn, $username, $password);
} catch (PDOException $e) {
	echo($e->getMessage());
}
*/

//These are required for SQL stuff to function properly
require 'bootstrap.php';


require "index.view.php"; //HTML stuff

//Test stuff below, doesn't currently work, throws an error when called:
function updateAmount($gItem, $amount)
{
	$tempConnection = new PDO($dsn, $username, $password);
	$tempConnection->query("
	UPDATE items 
	SET number={$amount} 
	WHERE id={$gItem}");
	$tempConnection->close();	
}


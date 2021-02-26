<?php


//Creates select queries.
class MakeQuery
{
	protected $connection;

	public function __construct($connection)
	{
		$this->connection = $connection;
	}

	public function selectAll($table, $intoClass)
	{
		$sqlSelect = $this->connection->prepare("SELECT * FROM {$table}");

		$sqlSelect->execute();

		return $sqlSelect->fetchAll(PDO::FETCH_CLASS, $intoClass);
	}
}


<?php


class router
{
	protected $routes = [];
	
	public function defined($routes)
	{
		$this->routes = $routes;
	}

	/*
	public function direct($uri)
	{
		if (array_key_exists($uri, $this->routes))
		{
			return $this->routes[$uri];
		}

		//throw new Exception('No route');
	}
	*/
}




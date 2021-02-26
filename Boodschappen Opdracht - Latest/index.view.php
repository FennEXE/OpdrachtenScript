<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<link rel="stylesheet" href="style.css">

	<body>
		<table class="boodschappenlijst" border>
			<col width=100>
			<col width=100>
			<col width=100>
			<col width=100>
			<tbody>
				<tr>
					<th class="title">Product</th>
					<th class="title">Prijs</th>
					<th class="title">Aantal</th>
					<th class="title">Subtotaal</th>
				</tr>
				<tr class="brood">
					<td id="naamBrood">Brood</td>
					<td id="prijsBrood"></td>
					<td id="aantalBrood">
						<span id="broodQuantity" class="productQuantity">
					<input id="brood" class="product-Quantity" type="button" value="-" onclick="removeProduct(brood)"> <a id="broodNummer"></a>
					<input id="brood" class="product+Quantity" type="button" value="+" onclick="addProduct(brood)"></span>
					</td>
					<td id="broodCost" class="productTotalCost">0</td>
				</tr>
				<tr class="broccoli">
					<td id="naamBroccoli">Broccoli</td>
					<td id="prijsBroccoli"></td>
					<td id="aantalBroccoli">
						<span id="broccoliQuantity" class="productQuantity">
					<input id="broccoli" class="product-Quantity" type="button" value="-" onclick="removeProduct(broccoli)"> <a id="broccoliNummer"></a>
					<input id="broccoli" class="product+Quantity" type="button" value="+" onclick="addProduct(broccoli)"></span>
					</td>
					<td id="broccoliCost" class="productTotalCost">0</td>
				</tr>
				<tr class="krentenbollen">
					<td id="naamKrentenbollen">Krentenbollen</td>
					<td id="prijsKrentenbollen"></td>
					<td id="aantalKrentenbollen">
						<span id="krentenbollenQuantity" class="productQuantity">
					<input id="krentenbollen" class="product-Quantity" type="button" value="-" onclick="removeProduct(krentenbollen)"> <a id="krentenbollenNummer"></a>
					<input id="krentenbollen" class="product+Quantity" type="button" value="+" onclick="addProduct(krentenbollen)"></span>
					</td>
					<td id="krentenbollenCost" class="productTotalCost">0</td>
				</tr>
				<tr class="noten">
					<td id="naamNoten">Noten</td>
					<td id="prijsNoten"></td>
					<td id="aantalNoten">
						<span id="notenQuantity" class="productQuantity">
					<input id="noten" class="product-Quantity" type="button" value="-" onclick="removeProduct(noten)"> <a id="notenNummer"></a>
					<input id="noten" class="product+Quantity" type="button" value="+" onclick="addProduct(noten)"></span>
					</td>
					<td id="notenCost" class="productTotalCost">0</td>
				</tr>
				<tr>
					<td colspan="3" class="totaltitle">Totaal</th>
						<td colspan="1" id="totaalCost" class="totalcost">0</td>
						</th>
				</tr>
			</tbody>
		</table>
	</body>
	<footer>
		<ul>
			<?php foreach ($Items as $item) : ?>
				<li><b>Product:</b> <?= $item->name; ?></li>
				<li><b>Amount:</b> <?= $item->number; ?></li>
				<li><b>Price:</b> &euro;<?= number_format($item->price, 2, ',', ' '); ?></li>
				<br>
			<?php endforeach; ?>
			
		</ul>
	</footer>
</html>
<script src="script.js"></script>
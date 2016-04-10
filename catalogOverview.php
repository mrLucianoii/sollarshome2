  <?php
        $shell = "shell500";
        class Product {
          private $name;
          private $path2;
          private $priceOpt2;
          private $squareFoot;

          public function getName(){
          	return $this->name;
          }

          public function getUrl(){
          	return $this->path2;
          }

          
         public function getBasePrice(){
           return $this->priceOpt2;
          }
         public function getSF(){
          return $this->squareFoot;
         }
        }
               
           var_dump($shell);
        	$con = new PDO("mysql:host=localhost; dbname=sollarProductDB",
					"sollarsDBAdmin","+)4TeJm?!TS5");
	        $con->setAttribute(PDO::ATTR_ERRMODE,
						PDO::ERRMODE_EXCEPTION);

            $query = "SELECT name,priceOpt2,path2,squareFoot FROM Buildings where shellType = :shell ";
	        $ps = $con->prepare($query);


			// Fetch matching row.
			$ps->execute(array(':shell' => $shell));
			$ps->setFetchMode(PDO::FETCH_CLASS, "Product");
			$products = $ps->fetchAll();

        

            //var_dump($con);

			print "<h1 style='text-align:center'> COTTAGE FAMILY GALLERY</h1><br>\n";
			print "<img id='greenLine' src='img/our-vision/greenLine.png' width='98' height='11'><br>\n";
					
				print "<div class='container'>\n";

				print "<div class='row'>\n";
				 
					print "<div class='col-md-6'>\n";
						
							print "<p style='text-align:justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<p>\n";
							
                        
                       
						print "</div>\n"; // column
						
						print "<div class='col-md-6'>\n";
						
						print	"<form action='' method='post'>
											  <div class='form-control'>
											  <label for = 'cost'><b>COST:</b></label>
											  <input type='radio' name='cost' value='50000- 60000'> $50K-$60K 
											  <input type='radio' name='cost' value='60000-70000'> $60K-$70K 
											  <input type='radio' name='cost' value='70000-80000'> $70K-$80K 
											  </div>

											  <div class='form-control'>
											  <label for = 'bedroom'><b>BEDROOM:</b></label>
											  <input type='radio' name='bedroom' value='1'> 1
											  <input type='radio' name='bedroom' value='2'> 2
											  <input type='radio' name='bedroom' value='3'> 3
											  <input type='radio' name='bedroom' value='4'> 4
											  <input type='radio' name='bedroom' value='5'> 5 
											  </div>

											  <div class='form-control'>
											  <label for = 'kitchen'><b>KITCHEN</b></label>
											  <input type='radio' name='kitchen' value='yes'> Yes
											  <input type='radio' name='kitchen' value='no'> No 
											  </div>

											  <div class='form-control'>
											  <label for = 'bathroom'><b>BATHROOM:</b></label>
											  <input type='radio' name='bathroom' value='1'> 1
											  <input type='radio' name='bathroom' value='2'> 2
											  <input type='radio' name='bathroom' value='3'> 3
											  </div>
											  
											  <div class='form-control'>
											  <label for = 'master_bedroom'><b>MASTER BEDROOM</b></label>
											  <input type='radio' name='master_bedroom' value='yes'> Yes
											  <input type='radio' name='master_bedroom' value='no'> No 
											  </div>

											  <div class='form-control'>
											  <input type='button' value='Search' onclick='getProducts()'>
											  </div>
											</form>\n"; 
							
                        
                       
						print "</div>\n"; // column
						print "</div>\n";  //row
						print "</div>\n"; // container

						print "<br><br>\n";
			print "<div style='position: relative; padding-bottom: 41px' class='container' id='results'>\n";

			 foreach($products as $product){
				
				 
					print "<div class='p-box col-sm-4 text-center'>\n";
						print "<div>\n";
							print "<a href='homes.html#single-family/1'><img src=".$product->getUrl()." width='100%' height='auto' alt='Single Family Home'></a>\n";
							
						print "</div>\n";
							print "<h3>".$product->getName()."</h3>\n";
							print "<p>
                              <strong>Base Price:</strong>".$product->getBasePrice()." USD</p>
                              <p><strong>SF:</strong>".$product->getSF()." SF
							</p>\n";
                        
                       
					print "</div>\n";
				
						 }
				
			print "</div>\n";	
			
?>
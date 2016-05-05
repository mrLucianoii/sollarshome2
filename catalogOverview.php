  <?php
        //$shell = $_GET['str'];
        
        $shell = $_GET['q'];
    
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
    
        public function getDesc(){
            return $this->desc;
        }
        }
               
           //var_dump($shell);
        	$con = new PDO("mysql:host=23.229.196.192; dbname=sollarProductDB",
					"sollarsDBAdmin","+)4TeJm?!TS5");
	        $con->setAttribute(PDO::ATTR_ERRMODE,
						PDO::ERRMODE_EXCEPTION);

         
        if ($shell == 'all'){
            
             $query = "SELECT name,priceOpt2,path2,squareFoot FROM Buildings where shellType != :clere and shellType != :garages ";
              //print $query;
              $ps = $con->prepare($query);
              $ps->execute(array(':clere' => "clere", ':garages' => "garages"));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
            
//            var_dump($products);
            $shellNameH1 = "All Availble Homes";
            $shellDescription = "We can build a custom Sollars Home™ having any size, shape or configuration. But some people already know what they are looking for, or don't have the budget, or time, to do a custom project from scratch. For these people, we offer a large catalog of model homes that can serve as starting points to spur creativity. These units are virtual model homes in the same sense that new home subdivisions offer model homes. Our base models come with upgraded standard appointments such as granite countertops, GE appliances, and Pella windows and doors. Any finish option can be selected, so if you see a feature or finish you like in one model home, it can be applied to another model just as easily. All units can be equipped with a full basement, and Sollars Home models can be widely customized to meet your needs. ";
            
            
        }else {
            $query = "SELECT name,priceOpt2,path2,squareFoot FROM Buildings where shellType = :shell ";
	        $ps = $con->prepare($query);
            
            
			// Fetch matching row.
			$ps->execute(array(':shell' => $shell));
			$ps->setFetchMode(PDO::FETCH_CLASS, "Product");
			$products = $ps->fetchAll();
          
         $queryDesc = "SELECT * FROM Shell where name = :shell";
         
          $ds = $con->prepare($queryDesc);
          
          $ds->execute(array(':shell' => $shell));
          $ds->setFetchMode(PDO::FETCH_ASSOC);
          $shellDesc = $ds->fetchAll();
            
            $shellDescription = $shellDesc[0]['desc'];
            $shellNameH1 =  ucfirst($shellDesc[0]['fullName']);
        }

           // print_r(array_values($products));
            print "<section class='greenMe greenMe2'>";
			print "<h1 style='text-align:center'>FAMILY GALERY</h1><br>\n";
			print "<img id='greenLine' src='img/patented/whiteLine.png' width='98' height='11'><br>\n";
            
                    print "<div class='dropdown'>
                          <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>Model Types
                          <span class='caret'></span></button>
                          <ul class='dropdown-menu'>
                            <li><a href='catalog.html#eichler' onclick='location.reload()'>Palo-Max</a></li>
                            <li><a href='catalog.html#secondUnit' onclick='location.reload()'>2nd Units Guest House</a></li>
                            <li><a href='catalog.html#singleRanch' onclick='location.reload()'>Single Storey Ranch</a></li>
                            
                            <li><a href='catalog.html#all' onclick='location.reload()'>Show All </a></li>
                        </ul>
                        </div><br>";
				
            print "</section>";	
				print "<section id='filter' class='container'>\n";

				print "<div class='row'>\n";
				 
					print "<div class='col-md-6'>\n";
						      print "<h2 style='padding-top: 0; font-weight: 500; font-size: 22px; color: #727272'>".$shellNameH1."</h2>";
							print "<p style='text-align:justify'>".$shellDescription."<p>\n";
							
                        
                       
						print "</div>\n"; // column
						
						print "<div style='margin-top: 29px;' class='col-md-6'>\n";
						
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

											  <div class='sd-form-control'>
											  <input class='btn btn-secondary' type='button' value='Search' onclick='getProducts()'>
											  <input class='btn btn-secondary' type='button' value='Reset' onclick='initialize()'>
											  </div>
											</form>\n"; 
							
                        
                       
						print "</div>\n"; // column
						print "</div>\n";  //row
						print "</section>\n"; // container

						print "<br><br>\n";

        if(count($products) <= 0){

        		echo "<h1>NO RESULTS FOUND.</h1>";

      		}
      		else {
      			foreach($products as $product){
				
				 
					print "<div class='p-box col-sm-4 text-center'>\n";
						print "<div id='h-box'>\n";
							print "<a href='homes.html#single-family/1'><img src=".$product->getUrl()." width='100%' height='250px' alt='Single Family Home'></a>\n";
							
						print "</div>\n";
							print "<h3>".$product->getName()."</h3>\n";
							print "<p>
                              <strong>Base Price:</strong>".$product->getBasePrice()." USD</p>
                              <p><strong>SF:</strong>".$product->getSF()." SF
							</p>\n";
                        
                       
					print "</div>\n";
				
						 }
				
      		}	
			
?>
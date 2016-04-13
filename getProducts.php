<!--
   _  _           _______.     ______       __          __      _______  
 _| || |_        /       |    /  __  \     |  |        |  |    |       \ 
|_  __  _|      |   (----`   |  |  |  |    |  |        |  |    |  .--.  |
 _| || |_        \   \       |  |  |  |    |  |        |  |    |  |  |  |
|_  __  _|   .----)   |      |  `--'  |    |  `----.   |  |    |  '--'  |
  |_||_|     |_______/        \______/     |_______|   |__|    |_______/ 
                                                                         
 _______   _______      _______. __    _______ .__   __.      _______.   
|       \ |   ____|    /       ||  |  /  _____||  \ |  |     /       |   
|  .--.  ||  |__      |   (----`|  | |  |  __  |   \|  |    |   (----`   
|  |  |  ||   __|      \   \    |  | |  | |_ | |  . `  |     \   \       
|  '--'  ||  |____ .----)   |   |  | |  |__| | |  |\   | .----)   |      
|_______/ |_______||_______/    |__|  \______| |__| \__| |_______/       
                                                                        
                                                                      -->
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
		
	    <meta name="keywords"           content="">
	    <meta name="description"        content="">
	    <meta name="author"             content="">
	    <meta name="designer"           content="">
	    <meta property="fb:admins"      content="">
	    <meta property="og:type"        content="Business Website">
	    <meta property="og:url"         content="http://www.SollarsHome.com">
	    <meta property="og:image"       content="img/landing/home-landing.jpg">
	    <meta property="og:title"       content=" Sollars Home™">
	    <meta property="og:description" content="At Sollars Home™, we are custom builders at heart. We can build a Sollars Home™ of practically any size, shape, or configuration you can envision. We also offer pre-designed standard buildings for specific uses that are terrific values; truly Luxury Made Affordable. ">
       
	   <link rel="icon" type="image/png"
	    href="sollars-tab-icon.png" />
	   
	    <title>family Gallery</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="sollars-tab-icon.png">
		
        <script src="js/lib/jquery.min.js"></script>
        <script src="js/ezLoader.js"></script>



        <link rel="stylesheet" href="css/bootstrap.min.css">
		<!-- #SOLID Style Sheets -->
		<link rel="stylesheet" href="css/fonts.css">
		<link rel="stylesheet" href="css/sollar.css">

        <link rel="stylesheet" href="css/home.css">
		<link rel="stylesheet" href="css/archs.css">
        <link rel="stylesheet" href="css/global.css">
		
    </head>

    <body>

    	 <?php
          
    	   
         if(isset($_GET['minCost']))
         {
         	 $minCost = $_GET['minCost'];  
         }

         if(isset($_GET['maxCost']))
         {
           $maxCost = $_GET['maxCost'];  
         }

         if(isset($_GET['bedroom']))
         {
           $bedroom = $_GET['bedroom'];
         }

         if(isset($_GET['kitchen']))
         {
           $kitchen = $_GET['kitchen']; 
         }

         if(isset($_GET['bathroom']))
         {
           $bathroom = $_GET['bathroom'];  
         }

         if(isset($_GET['masterBedroom']))
         {
           $masterBedroom = $_GET['masterBedroom'];  
         }
    	   
         if($minCost == 'null'){
          $minCost = NULL;
         }
          if($maxCost == 'null'){
          $maxCost = NULL;
         }
      
        if($kitchen == 'null'){
          $kitchen = NULL;
         }
         
          if($bathroom == 'null'){
          $bathroom = NULL;
         }
          if($bedroom == 'null'){
          $bedroom = NULL;
         }

          if($masterBedroom == 'null'){
          $masterBedroom = NULL;
         }
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
        

          $con = new PDO("mysql:host=23.229.196.192; dbname=sollarProductDB","sollarsDBAdmin","+)4TeJm?!TS5");
          $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

          $query = "SELECT name,priceOpt2,path2,squareFoot FROM Buildings where shellType = :shell ";
          $products = array();

          if($minCost!=null && $maxCost!=null && $kitchen == null && $bedroom == null && $bathroom == null && $masterBedroom == null ){

              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost";
              //print $query;
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
          }

          if($kitchen != null && $minCost ==null && $maxCost == null &&  $bedroom == null && $bathroom == null && $masterBedroom == null ){
              $query = $query."and kitchen = :kitchen ";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':kitchen' => $kitchen));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
            
          }
          
         if($bedroom != null && $minCost==null && $maxCost==null && $kitchen == null &&  $bathroom == null && $masterBedroom == null ){
              $query = $query."and qtyRooms = :bedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':bedroom' => $bedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
            

          }

         if($bathroom != null && $minCost==null && $maxCost==null && $kitchen == null && $bedroom == null &&  $masterBedroom == null ){

              $query = $query."and qtyBath = :bathroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':bathroom' => $bathroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();

          } 
         
          if($masterBedroom != null && $minCost==null && $maxCost==null && $kitchen == null && $bedroom == null && $bathroom == null  ){

              $query = $query."and masterBedroom = :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();


          }
           
          // 2 combinations
          if($minCost!=null && $maxCost!=null && $kitchen != null && $bedroom == null && $bathroom == null && $masterBedroom == null ){
             
              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and kitchen = :kitchen";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':kitchen' => $kitchen));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
              
          }

          if($minCost!=null && $maxCost!=null && $kitchen == null && $bedroom != null && $bathroom == null && $masterBedroom == null ){
              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and qtyRooms = :bedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':bedroom' => $bedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
              
          }
          
          if($minCost!=null && $maxCost!=null && $kitchen == null && $bedroom == null && $bathroom != null && $masterBedroom == null ){

              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and qtyBath = :bathroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':bathroom' => $bathroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();

              
          }
          
          if($minCost!=null && $maxCost!=null && $kitchen == null && $bedroom == null && $bathroom == null && $masterBedroom != null ){

              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and masterBedroom = :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
              
          }

          if($kitchen != null && $minCost ==null && $maxCost == null &&  $bedroom != null && $bathroom == null && $masterBedroom == null ){

              $query = $query."and kitchen = :kitchen and qtyRooms = :bedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':kitchen' => $kitchen, ':bedroom' => $bedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
            
          }
          if($kitchen != null && $minCost ==null && $maxCost == null &&  $bedroom == null && $bathroom != null && $masterBedroom == null ){
               $query = $query."and kitchen = :kitchen and qtyBath = :bathroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':kitchen' => $kitchen, ':bathroom' => $bathroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();

            
          }
          if($kitchen != null && $minCost ==null && $maxCost == null &&  $bedroom == null && $bathroom == null && $masterBedroom != null ){

             $query = $query."and kitchen = :kitchen and masterBedroom = :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':kitchen' => $kitchen, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
            
          }

          if($bedroom != null && $minCost==null && $maxCost==null && $kitchen == null &&  $bathroom != null && $masterBedroom == null ){

            $query = $query."and qtyRooms = :bedroom and qtyBath = :bathroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':bedroom' => $bedroom, ':bathroom' => $bathroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();

          }

          if($bedroom != null && $minCost==null && $maxCost==null && $kitchen == null &&  $bathroom == null && $masterBedroom != null ){

            $query = $query."and qtyRooms = :bedroom and masterBedroom = :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':bedroom' => $bedroom, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();


          }

          if($bathroom != null && $minCost==null && $maxCost==null && $kitchen == null && $bedroom == null &&  $masterBedroom != null ){

            $query = $query."and qtyBath = :bathroom and masterBedroom = :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':bathroom' => $bathroom, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();

          } 

          // 3 combinations
          if($minCost!=null && $maxCost!=null && $kitchen != null && $bedroom != null && $bathroom == null && $masterBedroom == null ){
             $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and kitchen = :kitchen and qtyRooms = :bedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':kitchen' => $kitchen, ':bedroom' => $bedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
              
          }

          if($minCost!=null && $maxCost!=null && $kitchen != null && $bedroom == null && $bathroom != null && $masterBedroom == null ){

            $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and kitchen = :kitchen and qtyBath = :bathroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':kitchen' => $kitchen, ':bathroom' => $bathroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();

              
          }

          if($minCost!=null && $maxCost!=null && $kitchen != null && $bedroom == null && $bathroom == null && $masterBedroom != null ){
              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and kitchen = :kitchen and masterBedroom = :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':kitchen' => $kitchen, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
              
          }

           if($minCost!=null && $maxCost!=null && $kitchen == null && $bedroom != null && $bathroom != null && $masterBedroom == null ){

              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and qtyRooms = :bedroom and qtyBath = :bathroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':bedroom' => $bedroom, ':bathroom' => $bathroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
          }
           if($minCost!=null && $maxCost!=null && $kitchen == null && $bedroom != null && $bathroom == null && $masterBedroom != null ){
              
              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and qtyRooms = :bedroom and masterBedroom= :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':bedroom' => $bedroom, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
          }
          if($minCost!=null && $maxCost!=null && $kitchen == null && $bedroom == null && $bathroom != null && $masterBedroom != null ){

              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and masterBedroom = :masterBedroom and qtyBath = :bathroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':masterBedroom' => $masterBedroom, ':bathroom' => $bathroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
          }

          if($kitchen != null && $minCost ==null && $maxCost == null &&  $bedroom != null && $bathroom != null && $masterBedroom == null ){
                $query = $query."and kitchen = :kitchen and qtyRooms = :bedroom and qtyBath = :bathroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':kitchen' => $kitchen, ':bedroom' => $bedroom, ':bathroom' => $bathroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
        
            
          }

          if($kitchen != null && $minCost ==null && $maxCost == null &&  $bedroom != null && $bathroom == null && $masterBedroom != null ){

             $query = $query."and kitchen = :kitchen and qtyRooms = :bedroom and masterBedroom = :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':kitchen' => $kitchen, ':bedroom' => $bedroom, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
            
          }

          if($kitchen != null && $minCost ==null && $maxCost == null &&  $bedroom == null && $bathroom != null && $masterBedroom != null ){

             $query = $query."and kitchen = :kitchen and masterBedroom = :masterBedroom and qtyBath = :bathroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':kitchen' => $kitchen, ':masterBedroom' => $masterBedroom, ':bathroom' => $bathroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
            
          }

          if($bedroom != null && $minCost==null && $maxCost==null && $kitchen == null &&  $bathroom != null && $masterBedroom != null ){

             $query = $query."and masterBedroom = :masterBedroom and qtyRooms = :bedroom and qtyBath = :bathroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':masterBedroom' => $masterBedroom, ':bedroom' => $bedroom, ':bathroom' => $bathroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();

          }

          // 4 combinations

         if($minCost!=null && $maxCost!=null && $kitchen != null && $bedroom != null && $bathroom != null && $masterBedroom == null ){
              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and kitchen = :kitchen and qtyRooms = :bedroom and qtyBath = :bathroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':kitchen' => $kitchen, ':bedroom' => $bedroom, ':bathroom' => $bathroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
              
          }

          if($minCost!=null && $maxCost!=null && $kitchen != null && $bedroom != null && $bathroom == null && $masterBedroom != null ){

            $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and kitchen = :kitchen and qtyRooms = :bedroom and masterBedroom = :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':kitchen' => $kitchen, ':bedroom' => $bedroom, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();

              
          }

          if($minCost!=null && $maxCost!=null && $kitchen != null && $bedroom == null && $bathroom != null && $masterBedroom != null ){

               $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and kitchen = :kitchen and qtyBath = :bathroom and masterBedroom = :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':kitchen' => $kitchen, ':bathroom' => $bathroom, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
          }

          if($minCost!=null && $maxCost!=null && $kitchen == null && $bedroom != null && $bathroom != null && $masterBedroom == null ){
              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and qtyRooms = :bedroom and qtyBath = :bathroom and masterBedroom = :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':bedroom' => $bedroom, ':bathroom' => $bathroom, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
              
          }

          if($kitchen != null && $minCost ==null && $maxCost == null &&  $bedroom != null && $bathroom != null && $masterBedroom != null ){
            $query = $query."and kitchen = :kitchen and qtyRooms = :bedroom and qtyBath = :bathroom and masterBedroom = :masterBedroom";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':kitchen' => $kitchen, ':bedroom' => $bedroom, ':bathroom' => $bathroom, ':masterBedroom' => $masterBedroom));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
          }


        
            //5 combinations

          if($minCost!=null && $maxCost!= null && $kitchen != null && $bedroom != null && $bathroom != null && $masterBedroom != null ){

              $query = $query."and priceOpt2 >= :minCost and priceOpt2 <= :maxCost and qtyRooms = :bedroom and qtyBath = :bathroom and masterBedroom = :masterBedroom and kitchen = :kitchen";
              $ps = $con->prepare($query);
              $ps->execute(array(':shell' => $shell, ':minCost' => $minCost, ':maxCost' => $maxCost, ':bedroom' => $bedroom, ':bathroom' => $bathroom, ':masterBedroom' => $masterBedroom, ':kitchen' => $kitchen));
              $ps->setFetchMode(PDO::FETCH_CLASS, "Product");
              $products = $ps->fetchAll();
          }




         
       

         

        //var_dump($products);

		
      if(count($products) <= 0){

        echo "<h1>NO RESULTS FOUND.</h1>";

      }

				
			
			else {
        foreach($products as $product){
				
				 
					echo "<div class='p-box col-sm-4 text-center'>\n";
						echo "<div id='img-circle'>\n";
							echo "<a href='homes.html#single-family/1'><img src=".$product->getUrl()." width='82.33%' height='auto' alt='Single Family Home'></a>\n";
							
						echo "</div>\n";
							echo "<h3>".$product->getName()."</h3>\n";
							echo "<p>
                              <strong>Base Price:</strong>".$product->getBasePrice()." USD</p>
                              <p><strong>SF:</strong>".$product->getSF()." SF
							</p>\n";
                        
                       
					echo "</div>\n";
						 }
				
				}
			
				?>


    </body>
    </html>
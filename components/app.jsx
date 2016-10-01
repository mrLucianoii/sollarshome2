'use strict';

// Piece by piece, this whole site will be converted to be fully powered by react

// This is a new content feature for Sollars in the press

// Array for future Admin Portal
var basePath = "img/press-logos/",
    pressItems = [{ 
      name: "Realty Times",
      file: "realtytimesLogo.png",
      url: "http://realtytimes.com/newhomes1/item/47074-20160829-is-concrete-the-future-of-homebuilding",
      quote: "Sollars Home has introduced an innovative new home technique that they say can revolutionize the way we build, and the way we live." 
    },
    {
      name: "Business Wire",
      file: "businessWireLogo.png",
      url:  "http://www.businesswire.com/news/home/20160608005412/en/Sollars-Home™-Develops-Revolutionary-Building-Method-Crafting",
      quote:"http://www.businesswire.com/news/home/20160608005412/en/Sollars-Home™-Develops-Revolutionary-Building-Method-Crafting" 
    },
     {
      name: "Concrete Products",
      file: "concreteproducts_logo.png",
      url:  "http://www.concreteproducts.com/news/news-scope/9983-sf-bay-area-builder-develops-new-method-for-crafting-concrete-homes.html#.V-_FwzKZORt",
      quote:"http://www.businesswire.com/news/home/20160608005412/en/Sollars-Home™-Develops-Revolutionary-Building-Method-Crafting" 
    }];

var Articles = React.createClass({
  render: function() {
      var pressList = pressItems.map(function(obj, i){
          return <li key={i} ><a href={ obj.url }><img id={"pressLogo" + i} src={ basePath + obj.file }/></a></li>;  
      });

     return <ul > { pressList } </ul>;
  }
});

var Press = React.createClass({
  render: function() {
    return <section id="pressRel" className="greenMe grey text-center">
    <h1> {this.props.name} </h1>
        <img src="img/patented/whiteLine.png" width="98" height="11" alt="WhiteLine"/>
      <Articles />
    </section>;
  }
});

ReactDOM.render(
  <Press name="AS SEEN IN" />,
  document.getElementById('SD_SOLLARS')
);

 
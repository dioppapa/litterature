
var acceuil = true

function cssCanvas(){
   
    $('#canvas, #canvasb').css({
   
        'width': '90%' ,
          'height': '45%' ,
         
          'position': 'absolute',
       
          'top': '55%',
          'left': '5%',
          
        
        });

        $('#canvasb').css({
   
          'z-index': '1' ,
            
            
          
          });


       
}



cssCanvas()

var X
var Y 

var xca 
var ctx = document.getElementById('canvas').getContext('2d');

X = ctx.canvas.width

    
Y = ctx.canvas.height


 xca = (86.5*X)/100

//xca = (84*X)/100

var xcf = (14*X)/100

var dar  = (4*X)/100

var dax = (X*51.5) / 100
var day = (Y*90) / 100

var r = (38*X)/100 
var al = (50.5*X)/100
var bet = (90*Y)/100


var rr = (37*X)/100 
          var all = (50*X)/100
          var bett = (90*Y)/100
         

var lay = (72*Y)/100
var lby = (81*Y)/100

//xca = dax
var xcam = 6
var ycam = 5



//window.requestAnimationFrame(dlevreAnimations);



var cooxfa  = (35*X)/100
var cooyfa = (50*Y)/100
 

var cooxfb =(35*X)/100
var cooyfb= (35*Y)/100   



var cooxda =  (64*X)/100
var cooyda= (50*Y)/100 

var cooxdb = (24*X)/100
 var  cooydb = (-30*Y)/100 
var tab =  valeurDeAetB(  cooxda , cooxdb ,  cooyda ,  cooydb)
      var A = tab[0]
      var B = tab[1]

draw()



//dlevreAnimations()
 
 
animationPage() 
function  animationPage() {
   mess =   setInterval( function() {
    dlevreAnimations()
     
     if(xca <= (13.6*X)/100){
      xca  = (85.5*X)/100
      
      
        
        if(acceuil==false){
           clearInterval(mess)

             $('#canvasb').css({
           'display': 'none',
                });
        }
       
      }
      

      }, 50);
}


function  tournePage() {
  $('#canvasb').css({
    'display': 'block',
    'z-index': '3' ,
         });
        
         xca  = (85.5*X)/100
var  tourn =   setInterval( function() {
    dlevreAnimations()
     if(xca <= (13.6*X)/100){
     
      clearInterval(tourn)
        $('#canvasb').css({
          'display': 'none',
          'z-index': '3' ,
              });
        xca  = (85.5*X)/100
      }
      }, 50);
}





   













  

function draw() {
   
  var canvas = document.getElementById('canvas');
  
  if (canvas.getContext) {
    
    var ctx = document.getElementById('canvas').getContext('2d');

X = ctx.canvas.width

    
Y = ctx.canvas.height



 
    da()
        
        db(ctx)
       
        dc(ctx)
         dd(ctx)
        
        de(ctx)
       
        df(ctx)
        
        dg(ctx)
       
        dh(ctx)
       
        di(ctx)
     
      
        dlevre(ctx)
        dlevreb(ctx)
         
      
  }   

       
  
        
     
    }

    
   

  
 
  

  function dlevre(ctx){
   
    ctx.beginPath();
    ctx.fillStyle  = 'white'
    ctx.lineWidth = 0.3
      
   
    ctx.moveTo((51.5*X)/100, (72*Y)/100);
    ctx.lineTo((51.5*X)/100, (81*Y)/100);
    ctx.quadraticCurveTo((64*X)/100, (50*Y)/100, (88.5*X)/100, (70*Y)/100);
    ctx.quadraticCurveTo((64*X)/100, (35*Y)/100, (51.5*X)/100, (72*Y)/100);
    
    ctx.fill()
    ctx.beginPath();

   
   }


   
   function dlevreAnimations(){
    var canvas = document.getElementById('canvasb');
  
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

      
        X = ctx.canvas.width
        
            
        Y = ctx.canvas.height
        
        ctx.clearRect(0,0,X,Y)
    ctx.beginPath();
    ctx.fillStyle  = 'white'
    ctx.strokeStyle  = 'black'
    ctx.lineWidth = 0.5
      
    


var ycb = - (Math.sqrt( Math.pow( r , 2 ) - Math.pow((xca - al), 2) ) - bet)  
var ycbb = - (Math.sqrt( Math.pow( rr , 2 ) - Math.pow((xca - all), 2) ) - bett)  

ctx.beginPath();
ctx.moveTo(dax, lay);
ctx.lineTo(dax, lby );

var xa , xb , xaa , xbb

if( xca <= (86.5*X)/100 &&  xca >= (50*X)/100 ){
   xa = (64*X)/100 ; xb = (50*Y)/100 ; xaa = (64*X)/100 ; xbb = (35*Y)/100
}
else if( xca < (50*X)/100 &&  xca >= (40*X)/100 ){
  xa = (60*X)/100 ; xb = (50*Y)/100 ; xaa = (60*X)/100 ; xbb = (35*Y)/100
}
else if( xca < (40*X)/100 &&  xca >= (30*X)/100 ){
  xa = (55*X)/100 ; xb = (64*Y)/100 ; xaa = (55*X)/100 ; xbb = (49*Y)/100
}

else if( xca < (30*X)/100 &&  xca >= (20*X)/100 ){
  xa = (55*X)/100 ; xb = (64*Y)/100 ; xaa = (55*X)/100 ; xbb = (50*Y)/100
}
else if( xca < (20*X)/100 &&  xca > (12*X)/100  ){
  xa = (35*X)/100 ; xb = (50*Y)/100 ; xaa = (35*X)/100 ; xbb = (35*Y)/100

}

 ctx.quadraticCurveTo(  xa, xb, xca,ycbb);

    
    ctx.lineTo(xca, ycb);

    
    ctx.quadraticCurveTo(xaa, xbb, (51.5*X)/100, (72*Y)/100);
    
    ctx.fill()
    ctx.stroke()

    xca = xca - 1
 
  

    }
    
   
   }
   function  valeurDeAetB(  x1 ,  x2 ,  y1 ,  y2){
		
		var valeur = []
		
		var a = (y1 - y2)/(x1-x2) ;

   
		var b =  (y2*x1- x2*y1)/(x1-x2) ;
		
		valeur.push(a);
		valeur.push(b);
		
		return valeur ;
       
	}


   function dlevreb(ctx){
   
    ctx.beginPath();
    ctx.lineWidth = 0.3
      

    ctx.moveTo((51*X)/100, (72*Y)/100);
    ctx.lineTo((51*X)/100, (81*Y)/100);
    ctx.quadraticCurveTo((35*X)/100, (50*Y)/100, (12*X)/100, (72*Y)/100);
    ctx.quadraticCurveTo((35*X)/100, (35*Y)/100, (51.5*X)/100, (74*Y)/100);
    
    ctx.fill()
    ctx.beginPath();
   
   }

   function rectArrondi(ctx, x, y, largeur, hauteur, rayon) {
    ctx.beginPath();
    ctx.moveTo(x, y + rayon);
    ctx.lineTo(x, y + hauteur - rayon);
   ctx.quadraticCurveTo(x, y + hauteur, x + rayon, y + hauteur);
  //  ctx.lineTo(x + largeur - rayon, y + hauteur);
   ctx.quadraticCurveTo(x + largeur, y + hauteur, x + largeur, y + hauteur - rayon);
//    ctx.lineTo(x + largeur, y + rayon);
//    ctx.quadraticCurveTo(x + largeur, y, x + largeur - rayon, y);
//    ctx.lineTo(x + rayon,y);
 //   ctx.quadraticCurveTo(x, y, x, y + rayon);
    ctx.fill();
  }
  

  function di(ctx){
   
    ctx.beginPath();
    ctx.strokeStyle  = '#a9a9a9'
    ctx.lineWidth = 1
   
    ctx.moveTo((6*X)/100 , (84*Y)/100);
    ctx.quadraticCurveTo((30*X)/100, (65.9*Y)/100, (47.6*X)/100, (86.1*Y)/100);
    ctx.stroke()
    
    
    ctx.moveTo((6*X)/100 , (84.5*Y)/100);
    ctx.quadraticCurveTo((30*X)/100, (68*Y)/100, (47.5*X)/100, (86.3*Y)/100);
    ctx.stroke()
   
    
    ctx.moveTo((6*X)/100 , (84.8*Y)/100);
    ctx.quadraticCurveTo((30*X)/100, (71*Y)/100, (47.5*X)/100, (86.8*Y)/100);
    ctx.stroke()
    
  }
  
  function dh(ctx){
    ctx.beginPath();
    ctx.strokeStyle  = '#a9a9a9'
   
    ctx.lineWidth = 0.5
  

    ctx.moveTo((5*X)/100 , (86*Y)/100);
    ctx.quadraticCurveTo((35*X)/100, (79*Y)/100, (47*X)/100, (89*Y)/100);
    ctx.stroke()
    ctx.moveTo((5*X)/100 , (86*Y)/100);
    ctx.quadraticCurveTo((35*X)/100, (79*Y)/100, (47*X)/100, (89*Y)/100);
    ctx.stroke()
   
    ctx.moveTo((4.8*X)/100 , (87*Y)/100);
    ctx.quadraticCurveTo((35*X)/100, (82*Y)/100, (47*X)/100, (89*Y)/100);
    ctx.stroke()
   
   
    ctx.moveTo((4.2*X)/100 , (88*Y)/100);
    ctx.quadraticCurveTo((35*X)/100, (83*Y)/100, (47*X)/100, (89*Y)/100);
    ctx.stroke()
   
    
    ctx.moveTo((4*X)/100 , (88.6*Y)/100);
    ctx.quadraticCurveTo((35*X)/100, (84*Y)/100, (47*X)/100, (89*Y)/100);
    ctx.stroke()
   
   
    ctx.moveTo((7*X)/100 , (88.9*Y)/100);
    ctx.quadraticCurveTo((35*X)/100, (87*Y)/100, (46*X)/100, (89*Y)/100);
    ctx.stroke()
    
   
  }
  function dg(ctx){
   
    ctx.beginPath();
   
    ctx.lineWidth = 0.5
    ctx.strokeStyle  = '#a9a9a9'
 
   
    
    ctx.moveTo((11*X)/100 , (73.5*Y)/100);
    ctx.quadraticCurveTo((37*X)/100, (49*Y)/100, (51*X)/100, (81*Y)/100);
    ctx.stroke();
    
   
   
     ctx.moveTo((10*X)/100 , (75*Y)/100);
    ctx.quadraticCurveTo((36*X)/100, (49.7*Y)/100, (50.5*X)/100, (81.6*Y)/100);
    ctx.stroke();
   
    
  
     ctx.moveTo((9.2*X)/100 , (76.7*Y)/100);
    ctx.quadraticCurveTo((34*X)/100, (50*Y)/100, (50.5*X)/100, (81.3*Y)/100);
    ctx.stroke();
    
    
   
   
    ctx.moveTo((8.5*X)/100 , (77.7*Y)/100);
    ctx.quadraticCurveTo((33*X)/100, (51*Y)/100, (50*X)/100, (82*Y)/100);
    ctx.stroke();

    
    
    ctx.moveTo((8*X)/100 , (79*Y)/100);
    ctx.quadraticCurveTo((31*X)/100, (52*Y)/100, (49.5*X)/100, (82*Y)/100);
    ctx.stroke();
    
    ctx.moveTo((7*X)/100 , (81*Y)/100);
    ctx.quadraticCurveTo((31*X)/100, (53*Y)/100, (49.5*X)/100, (82.2*Y)/100);
    ctx.stroke();
  
   
  
    ctx.moveTo((6*X)/100 , (83*Y)/100);
    ctx.quadraticCurveTo((30*X)/100, (54*Y)/100, (49*X)/100, (82.5*Y)/100);
    ctx.stroke();
   
   
    ctx.moveTo((13*X)/100 , (77*Y)/100);
    ctx.quadraticCurveTo((33*X)/100, (61*Y)/100, (48.7*X)/100, (83*Y)/100);
    ctx.stroke();
   
   
    ctx.moveTo((15*X)/100 , (76*Y)/100);
    ctx.quadraticCurveTo((33*X)/100, (64*Y)/100, (48.2*X)/100, (83.3*Y)/100);
    ctx.stroke();
    
  
}
function da(){
  ctx.beginPath();



  ctx.fillStyle  = 'black'
    ctx.arc( dax , day, dar, Math.PI, 2*Math.PI);
    ctx.fill()
    
}

function dd(ctx){
   
    ctx.beginPath();
    ctx.strokeStyle  = '#a9a9a9'
    ctx.lineWidth = 0.5
  
    ctx.moveTo((52*X)/100 , (81*Y)/100);
    ctx.quadraticCurveTo((64*X)/100, (50*Y)/100, (88.5*X)/100, (70*Y)/100);
    ctx.stroke();
   
     
    ctx.moveTo((52.5*X)/100 , (81.5*Y)/100);
    ctx.quadraticCurveTo((64*X)/100, (51*Y)/100, (89*X)/100, (71*Y)/100);
    ctx.stroke();
   
    ctx.moveTo((53*X)/100 , (82*Y)/100);
    ctx.quadraticCurveTo((64*X)/100, (52*Y)/100, (89.5*X)/100, (72*Y)/100);
    ctx.stroke();
    
    ctx.moveTo((53.5*X)/100 , (82.5*Y)/100);
    ctx.quadraticCurveTo((64*X)/100, (53*Y)/100, (89.7*X)/100, (73*Y)/100);
    ctx.stroke();
    
    ctx.moveTo((54*X)/100 , (83*Y)/100);
    ctx.quadraticCurveTo((64*X)/100, (54*Y)/100, (91*X)/100, (74*Y)/100);
    ctx.stroke();
   
    
    ctx.moveTo((54.5*X)/100 , (83.5*Y)/100);
    ctx.quadraticCurveTo((64*X)/100, (55*Y)/100, (91.4*X)/100, (75*Y)/100);
    ctx.stroke();
   
   
    ctx.moveTo((55*X)/100 , (84*Y)/100);
    ctx.quadraticCurveTo((64*X)/100, (56*Y)/100, (92*X)/100, (76*Y)/100);
    ctx.stroke();
   

}

function de(ctx){
    ctx.beginPath();
    ctx.strokeStyle  = '#a9a9a9'
    ctx.lineWidth = 0.5
   
    ctx.moveTo((55*X)/100 , (84.5*Y)/100);
    ctx.quadraticCurveTo((68*X)/100, (54*Y)/100, (94*X)/100, (81*Y)/100);
    ctx.stroke();
    ctx.moveTo((55*X)/100 , (84.7*Y)/100);
    ctx.quadraticCurveTo((68*X)/100, (56*Y)/100, (94*X)/100, (82*Y)/100);
    ctx.stroke();
    ctx.moveTo((55*X)/100 , (84.9*Y)/100);
    ctx.quadraticCurveTo((68*X)/100, (58*Y)/100, (95*X)/100, (84*Y)/100);
    ctx.stroke();
    
    ctx.moveTo((55.1*X)/100 , (85*Y)/100);
    ctx.quadraticCurveTo((70*X)/100, (60*Y)/100, (91*X)/100, (82*Y)/100);
    ctx.stroke();
   

    ctx.moveTo((55.1*X)/100 , (85.2*Y)/100);
    ctx.quadraticCurveTo((70*X)/100, (62*Y)/100, (94*X)/100, (84*Y)/100);
    ctx.stroke();
     
    ctx.moveTo((55.3*X)/100 , (86*Y)/100);
    ctx.quadraticCurveTo((62*X)/100, (65*Y)/100, (90*X)/100, (81.9*Y)/100);
    ctx.stroke();
    
    ctx.moveTo((63*X)/100 , (77*Y)/100);
    ctx.quadraticCurveTo((71*X)/100, (73*Y)/100, (80*X)/100, (78*Y)/100);
    ctx.stroke();
     

}
function df(ctx){
   
    ctx.beginPath();
    ctx.strokeStyle  = '#a9a9a9'
    ctx.lineWidth = 0.5
   
    ctx.moveTo((57*X)/100 , (87*Y)/100);
    ctx.quadraticCurveTo((62*X)/100 , (73*Y)/100, (95*X)/100, (86*Y)/100);
    ctx.stroke();
   
    ctx.moveTo((57*X)/100 , (87*Y)/100);
    ctx.quadraticCurveTo((62*X)/100 , (76*Y)/100, (96*X)/100, (87*Y)/100);
    ctx.stroke();
     ctx.moveTo((57*X)/100 , (88*Y)/100);
    ctx.quadraticCurveTo((62*X)/100 , (79*Y)/100, (96*X)/100, (88*Y)/100);
    ctx.stroke();
   
    ctx.moveTo((56*X)/100 , (90*Y)/100);
    ctx.quadraticCurveTo((65*X)/100 , (81*Y)/100, (96*X)/100, (89*Y)/100);
    ctx.stroke();
    ctx.moveTo((60*X)/100 , (88*Y)/100);
    ctx.quadraticCurveTo((65*X)/100 , (86*Y)/100, (96*X)/100, (89*Y)/100);
    ctx.stroke();
  
}
function dc(ctx){
    
    ctx.beginPath();
    ctx.strokeStyle  = '#696969 '

    ctx.beginPath();
    ctx.moveTo((56*X)/100 , (88*Y)/100);
    ctx.quadraticCurveTo((60*X)/100, (70*Y)/100, (90*X)/100, (83*Y)/100);
    ctx.stroke();
   
    ctx.beginPath();
   
    ctx.moveTo((70*X)/100 , (70*Y)/100);
    ctx.quadraticCurveTo((80*X)/100, (65*Y)/100, (92*X)/100, (78*Y)/100);
    ctx.stroke()
   
    ctx.beginPath();
    ctx.moveTo((10*X)/100 , (80*Y)/100);
    ctx.quadraticCurveTo((30*X)/100, (65*Y)/100, (48*X)/100, (85*Y)/100);
    ctx.stroke()
   
    ctx.beginPath();
    ctx.moveTo((20*X)/100 , (82*Y)/100);
    ctx.quadraticCurveTo((37*X)/100, (77*Y)/100, (47*X)/100, (89*Y)/100);
    ctx.stroke()
   
   


}
function db(ctx){
    
    var xa = 0
    var ya = (90*Y)/100
    var ra = (10*X)/100

    ctx.strokeStyle  = 'black'
    ctx.lineWidth = 2
   
    ctx.beginPath()
    ctx.moveTo( (6*X)/100, (Y*84)/100)
    ctx.lineTo( (2*X)/100, (90*Y)/100)

    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle  = 'black'
    
    ctx.lineWidth = 3
    ctx.moveTo( (2*X)/100, (90*Y)/100)
    ctx.lineTo( (X/2) - (ra/2) , ya)
    ctx.stroke()
 
    ctx.lineWidth = 2
    ctx.lineTo( (X/2) - (ra/3) , ya +  (ra/8))
   
    ctx.stroke()
    ctx.lineTo( (X/2) + (3*ra/5) , ya +  (ra/8))
    ctx.stroke()
    ctx.lineTo( (X/2) + (3*ra)/4 , ya )
    ctx.stroke()
    ctx.lineWidth = 3
    ctx.lineTo( (X*98)/100 , ya )
    ctx.stroke()
    ctx.lineWidth = 2
     ctx.lineTo( (X*95)/100 , (Y*84)/100 )
    ctx.stroke()
    
    
}

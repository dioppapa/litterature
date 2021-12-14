entrer()

createReseau()
clickReseau()
hoverReseau()
cssReseau()



function clickReseau(){


    $('.res').mousedown(function(){
        var i = $(this).index()
        $('.res').eq(i).css({
          'box-shadow': '1px 1px 3px #555 inset',
          'background': 'blue',

          });
    
                        })
    .mouseup(function(){

        var i = $(this).index()
       
        $('.res').eq(i).css({
          'box-shadow': '',
          'background': '',

        });
                          })
    .click(function(){
       
        var i = $(this).index()
      if( i == 0){
        window.location.href = 'https://www.facebook.fr/'
   
       
      }
      if( i == 1){
        window.location.href = 'https://www.twitter.fr/'
      }
       if( i == 2){
        window.location.href = 'https://www.instagram.fr/'
      }
       if( i == 3){
        window.location.href = 'https://www.google.fr/'
      }
       

})
     
       }


       function hoverReseau() {
        $('#imgf').hover(function(){ 
          var i = $(this).index()
        
          animeReseau(i)
         },function(){
          var i = $(this).index()
        
         
         
       });



       $('#imgt').hover(function(){ 
        var i = $(this).index()
      
        animeReseau(i)
       },function(){
        var i = $(this).index()
      
       
       
     });



     $('#imgi').hover(function(){ 
      var i = $(this).index()
    
      animeReseau(i)
     },function(){
      var i = $(this).index()
    
     
     
   });

   $('#imgw').hover(function(){ 
    var i = $(this).index()
  
    animeReseau(i)
   },function(){
    var i = $(this).index()
  
   
   
 });
         
       }
        function animeReseau(i) {
          $('.res').eq(i)
          .css('width', '30px')
          .css('height','30px')
          .animate({
          width : 50,
          height : 50,
          },{
          duration : 500
          , queue : true // ici peu importe sa valeur
          , complete : function(){
           
            animeReseaub(i)
          }
          });
        
        }
        function animeReseaub(i) {
          $('.res').eq(i)
          .css('width', '50px')
          .css('height','50px')
          .animate({
          width : 30,
          height : 30,
          },{
          duration : 500
          , queue : true // ici peu importe sa valeur
          , complete : function(){
            
          }
          });
        
        }
        function cssReseau() {

            $("#reseau").css({
                  'width': '30px',
                  'position': 'fixed',
                  'top':'50%',
                  'right':'0%',
                'padding':'1%',
                
                
              
              'background':'rgba(0,0,0,0.3)',
              
              
              
                });
      
                $("#imgf").css({
                  'width': '30px',
                  'height': '30px',
                    
                 });
                 $("#imgt").css({
                  'width': '30px',
                  'height': '30px',
                    
                 });
                 $("#imgi").css({
                  'width': '30px',
                  'height': '30px',
                    
                 });
                 $("#imgw").css({
                  'width': '30px',
                  'height': '30px',
                    
                 });
              }
      
      
       function createReseau() {

        var fac = '<img id="imgf" class="res" src="public/image/acceuil/facebook.png"></img>'
        var twit = '<img id="imgt" class="res"  src="public/image/acceuil/twitter.png"></img>'
        
        var instag = '<img id="imgi" class="res"  src="public/image/acceuil/insta.png"></img>' 
      
        var watchap = '<img id="imgw" class="res"  src="public/image/acceuil/messenger.png"></img>'
               
        
                  
                 
     
           
 
 var reseau = '<div id="reseau" >'+ fac + twit + instag + watchap+' </div>'
 
      $('body').append( reseau)
      
            }
      
 

$('body').css({
  
    'background-image': 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("public/image/acceuil/fontl.jpg")',
              'background-repeat':'no-repeat',
          
              'background-position': 'center',
              'background-size': 'cover',
  
  
    
  });
  var  X = $(window).width() 
   var Y = $(window).height()
  
  $('body').width( X* (98/100))
  $('body').height(Y * (97/100))
  
  
    
   var i = 0
      var text = ''
      var tt = " Medmoiselle Aisssata Deh vous souhaite la Bienvenue"
  
      var tl  = tt.length
      animeMessage()
  
   $('#acceuilbas').width( X* (98/100))
  $('#acceuilbas').height(Y * (97/100))
  
  /** 
  $('#acceuilbas').css({
     'width': X ,
    'height': Y
   
  });
  **/
  $('#messagedacceuil').css({
  
      'position': 'absolute',
    'top': '50%',
    'left': '10%',
    'width': '300px' ,
    'height': '100px' ,
    
   
  });
  $('#messagebienvenu').css({
  
    
  
    'font-weight': 'bold',
    'font-size': '25px',
    'font-family': 'Courier New Courier, monospace',


 
});
  

  $('#porte').css({
  
  'position': 'absolute',
  'top': '40%',
  'right': '15%',
  
  
  });
  $('#lampe').css({
  
  'position': 'absolute',
  'top': '40%',
  'left': '30%',
  
  
  });
  
  
  
  $('#parchemea').css({
  'width': '100%' ,
    'height': '100%' ,
    
   
  });
  
  $('#aissatasouhait').css({
    'position': 'absolute',
  });
  
  $('#messagea').css({
    'position': 'absolute',
    'top': '52%',
    'left': '14%',
    'width': '23%' ,
    'font-size': '12px',
      'font-style': 'italic',
      'font-weight': 'bold',
      'font-family': 'Courier New Courier, monospace',
      
  
    
  });
  
  
  function animeMessage() {
         
         var mess =   setInterval( function() {
          writeMessage()
              }, 200);
            }
  
  
  function writeMessage() {
            text = text + tt.charAt(i)
         $("#messagebienvenu").text( text)
     
         if( i >= tl - 1){
           i  = 0
           text = ''
         }
           else
           i = i + 1
     
        }

        function entrer(){
            $('#porte').click(function(){
                $('#acceuil').css({
                  'display': 'none',
                       });
                       showAcceuil()
                    });
        }


        function showAcceuil(){
            $('#acceuilb').css({
                'display': 'block',
                });
        }
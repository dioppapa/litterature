// menu css


$('#menupng').css({
  
    'position': 'absolute',
    'top': '20%',
  'left': '0%',
    'width': '26%',
    'heigth': '35%',
    
    
    });


    $('#contenu').css({
   
      'border': '1px solid blue',
      
      'position': 'absolute' ,
      'top': '12%' ,
     // 'transform': 'translate(-50% , -50%)',
     'left': '25%',
     'width': '72%' ,
     'height': '67%' ,
   //  'background-image': 'url(public/image/acceuil/cahierfond.jpg)',
   //  'background-repeat':'no-repeat',
   //  'background-position': 'center',
   // 'background-size': 'cover',
  });

  $('#contenu').css({
   
    'z-index': '2' ,
      
      
    
    });

  
  function csshovermenu() {
    $('.classdivm').hover(function(){
        var i = $(this).index()
        
        $(".classdivm").eq(i).css({
              //    'background-image': 'linear-gradient(#87cefa,white)',
            }) ;

    
        },function(){
            $(".classdivm").css({
              //  'background-image': 'linear-gradient(#c6ffec,white)',
          }) ;
            
      });
    
    }

    function curenntcssitem(i) {
         
      $(".classdivm").eq(i).css({
                      
          
              
        //  'background-image': 'linear-gradient(#87cefa,white)',
          'cursor':'pointer',
          }) ;

          $(".classflech").eq(i).css({
                   'display': 'block',
              }) ;
       
              }

function cssmenu() {
  $("#menu").css({
      'float': 'left' ,                
      
      'width': '20%' , 
      
   //   'background-image': 'linear-gradient(white,#eee)',
      'cursor':'pointer',
      'margin-top': '15%' , 
      'padding-top': '5%' ,
      }) ;
     
      $("#menu").height((b*30)/100)

      $(".classdivm").css({
                      
          
          'position': 'relative' , 
          'width': '100%' ,
          'height': '9%' ,
          'margin-bottom': '2%' , 
      //    'background-image': 'linear-gradient(#c6ffec,white)',
          'cursor':'pointer',
          }) ;

         
         

       
          $(".classicone").css({
                      
               
              'position': 'absolute' ,
              'top': '50%',
              'left': '25%',
              'transform': 'translate(-50% , -50%)',
              'cursor':'pointer',
              }) ;
              $(".classicone").width((a*2)/100)
              $(".classicone").height((a*2)/100)

              $(".classflech").css({
                      
               
                  'position': 'absolute' ,
                  'top': '50%' ,
                  'transform': 'translate(-50% , -50%)',
                 'left': '90%',



                  'cursor':'pointer',
                  }) ;
                  $(".classflech").width((a*2)/100)
                  $(".classflech").height((a*2)/100)
    

              $(".classlab").css({
                      
                    
                  'position': 'left' ,
                  'margin-left': '40%' ,
                  'margin-top': '2%' ,
                  'text-align': 'left' ,
                  'font-weight': 'bold',
                  'font-style': 'italic',
                  'cursor':'pointer',

                 
                  }) ;
                  $(".classlab").height((a*2)/100)


}
  //css oeuvre

        
        
  $('#diveuvre').css({
    
   
  'border': '1px solid green' ,
    'width': '100%' ,
    'height': '230px' ,
    });

  $('#oeuvreapercu').css({
    'width': '30%' ,
    'height': '90%' ,
    'margin': '3%' ,
    'float': 'left' ,
    });
    $('.paragraphe').css({
       
      
      'color': 'orange' ,
      
      });

    $('.paragraphe').eq(1).css({
       
        'float': 'left' ,
        'color': 'orange' ,
        'margin': '2%' ,
        });

        $('#contoloeuvre ,  #contoloeuvreb').css({
       
            'border': '1px solid green' ,
            'position': 'absolute' ,
            'top': '90%',
            'left': '50%',
            'transform': 'translate(-50% , -50%)',
            'width': '25%' ,
            'height': '8%' ,
            });

           
            $('.contoloeuvre , .contoloeuvreb').css({
       
               
                'width': '45%' ,
                'height': '100%' ,
                });
                $('.contoloeuvre , .contoloeuvreb').eq(0).css({
             'float': 'left' ,

                  });

                 
                  $('.contoloeuvre , .contoloeuvreb').eq(1).css({
                    'float': 'right' ,
                         });


                         $('.contoloeuvreb').eq(0).css({
                          'float': 'left' ,
             
                               });
             
                              
                               $('.contoloeuvreb').eq(1).css({
                                 'float': 'right' ,
                                      });

                         $('#preface').css({
                          'font-style': 'bold' ,
                          'font-size': '25px' ,
                          'color': '#c6ffec' ,
                               });
                         

                               $('#fondimage').css({
                                'position': 'absolute' ,
                                'width': '100%' ,
                                'height': '100%' ,
                                     });

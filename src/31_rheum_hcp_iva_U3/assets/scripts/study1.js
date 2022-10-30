$(document).ready(function(){
   setTimeout(function() {
        $("#p1").trigger('click');
    },10);
   $(".mmt-patients li").click(function(){
      $("li").removeClass("actv-mmt-study1");
      $(this).addClass("actv-mmt-study1");
      $(".after-treat-btn").show();
      $("#counter,.endScore").hide();
	      var currentCount = $(this).attr('data-value'),
	      countTo = currentCount,
         attrval = currentCount;
         var patage = $(this).attr('pat-age'),
         attrpatage = patage;
         baseendscore();
            function baseendscore(){
                  var basescore;
                  var endscore;
                  if(attrval == 1){
                     basescore = "149";
                     endscore = "150";
                  } 
                  else if(attrval == 39){
                     basescore = "93";
                     endscore = "132";
                  }
                  else if(attrval == 23){
                    
                    if(attrval == 23 && attrpatage == 48){
                        basescore = "119";
                        endscore = "142";
                     }
                     else {
                     basescore = "116";
                     endscore = "139";
                     }
                  }
                  else if(attrval == 30){
                     basescore = "118";
                     endscore = "148";
                  }
                  else if(attrval == 4){
                     basescore = "146";
                     endscore = "150";
                  }
                  else if(attrval == 20){
                     basescore = "123";
                     endscore = "143";
                  }
                  else if(attrval == 7){
                     basescore = "106";
                     endscore = "113";
                  }
                  else if(attrval == 11){
                     basescore = "96";
                     endscore = "107";
                  }
                  else {
                     basescore = "138";
                     endscore = "150";
                  }
                  $(".baseScore span").text(basescore);
                  $(".endScore span").text(endscore);
                  //document.getElementsByClassName('baseScore').innetHTML = basescore;
                  }
         $('#counter').each(function() {
            var $this = $(this)

            $(".after-treat-btn").click(function(){
               $(this).hide();
               $("#counter,.endScore").show();
               
            $({countNum: $this.text()}).prop("countNum",0).animate({
               countNum: countTo,
               
            },
               
            {
               duration: 1000,
               easing:'linear',
               beginAt: 0,
               step: function() {
                  $this.text(Math.floor(this.countNum));
               },
               complete: function() {
                  $this.text(this.countNum);
               }

            });  
            
            });
         });
      });
});
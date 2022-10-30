$(document).ready(function(){
   setTimeout(function() {
        $("#p1").trigger('click');
    },10);
    
   $(".mmt-patients li").click(function(){
      $("li").removeClass("actv-mmt-study1");
      $(this).addClass("actv-mmt-study1");
      $("span.popover-box").removeClass("shown");
      $("#oval-section div").removeClass("actv-mmt-study2");
      $(".after-treat-btn").show();
      $(".esoval").hide();
      
      //$(".esoval").css("pointer-events","none");
         var patscore = $(this).attr('data-value'),
         attrpatscore = patscore;
      
            function bsesscore(){
                  var bsli, bsqa, esli, esqa;
                  var bslihead, bsqahead, eslihead, esqahead;
                  var bslipopover, bsqapopover, eslipopover, esqapopover;

                  if(attrpatscore == 1){
                     bsli = "3";
                     bsqa = "3";
                     esli = "4+";
                     esqa = "4+";
                     bslihead = "Iliopsoas";
                     bsqahead = "Quadriceps";
                     eslihead = bslihead;
                     esqahead = bsqahead;
                     bslipopover = "Holds test position with no added pressure";
                     bsqapopover = "Holds test position with no added pressure";
                     eslipopover = "Holds test position against moderate to strong pressure";
                     esqapopover = "Holds test position against moderate to strong pressure";
                     commonbtnstyles();
                     
                  } 
                  else if(attrpatscore == 2){
                     bsli = "3";
                     bsqa = "3-";
                     esli = "4";
                     esqa = "4+";
                     bslihead = "Iliopsoas";
                     bsqahead = "Quadriceps";
                     eslihead = bslihead;
                     esqahead = bsqahead;
                     bslipopover = "Holds test position with no added pressure";
                     bsqapopover = "Gradual release from test position";
                     eslipopover = "Holds test position against moderate pressure";
                     esqapopover = "Holds test position against moderate to strong pressure";
                     commonbtnstyles();
                  }
                  else if(attrpatscore == 3){
                     bsli = "2";
                     bsqa = "3";
                     esli = "4";
                     esqa = "4";
                     bslihead = "Deltoids";
                     bsqahead = "Triceps";
                     eslihead = bslihead;
                     esqahead = bsqahead;
                     bslipopover = "Moves through complete range of motion";
                     bsqapopover = "Holds test position with no added pressure";
                     eslipopover = "Holds test position against moderate pressure";
                     esqapopover = "Holds test position against moderate pressure";
                     thirdandfourthbtnstyles();
                  }
                  else if(attrpatscore == 4){
                     bsli = "3";
                     bsqa = "3";
                     esli = "4+";
                     esqa = "4+";
                     bslihead = "Deltoids";
                     bsqahead = "Triceps";
                     eslihead = bslihead;
                     esqahead = bsqahead;
                     bslipopover = "Holds test position with no added pressure";
                     bsqapopover = "Holds test position with no added pressure";
                     eslipopover = "Holds test position against moderate to strong pressure";
                     esqapopover = "Holds test position against moderate to strong pressure";
                     thirdandfourthbtnstyles();
                  } 
                  else if(attrpatscore == 5){
                     bsli = "4";
                     bsqa = "4";
                     esli = "4+";
                     esqa = "5";
                     bslihead = "Iliopsoas";
                     bsqahead = "Quadriceps";
                     eslihead = bslihead;
                     esqahead = bsqahead;
                     bslipopover = "Holds test position against moderate pressure";
                     bsqapopover = "Holds test position against moderate pressure";
                     eslipopover = "Holds test position against moderate to strong pressure";
                     esqapopover = "Holds test position against strong pressure";
                     commonbtnstyles();
                  }
                  
                  else {
                     bsli = "3";
                     bsqa = "3";
                     esli = "4+";
                     esqa = "4+";
                     bslihead = "Iliopsoas";
                     bsqahead = "Quadriceps";
                     eslihead = bslihead;
                     esqahead = bsqahead;
                     bslipopover = "Holds test position with no added pressure";
                     bsqapopover = "Holds test position with no added pressure";
                     eslipopover = "Holds test position against moderate to strong pressure";
                     esqapopover = "Holds test position against moderate to strong pressure";
                     commonbtnstyles();
                  }
                 
                  
                  $(".bsoval.liopsoas span").text(bsli);
                  $(".bsoval.Quadriceps span").text(bsqa);
                  $(".esoval.liopsoas span").text(esli);
                  $(".esoval.Quadriceps span").text(esqa);

                  $(".bsoval.liopsoas span.head").text(bslihead);
                  $(".bsoval.Quadriceps span.head").text(bsqahead);
                  $(".esoval.liopsoas span.head").text(eslihead);
                  $(".esoval.Quadriceps span.head").text(esqahead);

                  $(".bsoval.liopsoas span.popover-box").text(bslipopover);
                  $(".bsoval.Quadriceps span.popover-box").text(bsqapopover);
                  $(".esoval.liopsoas span.popover-box").text(eslipopover);
                  $(".esoval.Quadriceps span.popover-box").text(esqapopover);

            }
            bsesscore(); 
           
         });
         
         
         $(".after-treat-btn").click(function(){
            $(this).hide();
            $(".esoval").show();
            //$(".esoval").css("pointer-events","auto");
            
         });  
         $("#oval-section div").each(function(){
            $(this).click(function(){
            $(this).toggleClass("actv-mmt-study2");
            $(this).find("span.popover-box").toggleClass("shown");
            
            });
            
         });

      
});

function thirdandfourthbtnstyles(){
   $(".bsoval.liopsoas").css({"top":"257px","left":"554px"});
   $(".bsoval.Quadriceps").css({"top":"311px","left":"413px"});
   $(".esoval.liopsoas").css({"top":"257px","left":"731px"});
   $(".esoval.Quadriceps").css({"top":"311px","left":"580px"});
}
function commonbtnstyles(){
   $(".bsoval.liopsoas").css({"top":"360px","left":"492px"});
   $(".bsoval.Quadriceps").css({"top":"418px","left":"428px"});
   $(".esoval.liopsoas").css({"top":"360px","left":"663px"});
   $(".esoval.Quadriceps").css({"top":"418px","left":"603px"});
}

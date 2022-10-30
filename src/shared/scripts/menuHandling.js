$(document).ready(function() {
  $('.subClick1').click(function() {
      var showElementDescription = $('.sb1');
      if ($(showElementDescription).is(':visible')) {
          showElementDescription.hide();
          $('div.dm-pm.expandableCollapsibleDiv > img').attr('src', '../../shared/images/leftArrow.png');
      } else {
          showElementDescription.show();
          $('div.dm-pm.expandableCollapsibleDiv > img').attr('src', '../../shared/images/downArrow.png');
          $('.main-menu').css('overflow-y', 'scroll');
      }
  });
  $('.subClick2').click(function() {
      var showElementDescription1 = $('.sb2');
      if ($(showElementDescription1).is(':visible')) {
          showElementDescription1.hide();
          $('div.sle.expandableCollapsibleDiv > img').attr('src', '../../shared/images/leftArrow.png');
      } else {
          showElementDescription1.show();
          $('div.sle.expandableCollapsibleDiv > img').attr('src', '../../shared/images/downArrow.png');
          $('.main-menu').css('overflow-y', 'scroll');
      }
  });
  $('.subClick3').click(function() {
      var showElementDescription2 = $('.sb3');
      if ($(showElementDescription2).is(':visible')) {
          showElementDescription2.hide();
          $('div.symp-sarcoidosis.expandableCollapsibleDiv > img').attr('src', '../../shared/images/leftArrow.png');
      } else {
          showElementDescription2.show();
          $('div.symp-sarcoidosis.expandableCollapsibleDiv > img').attr('src', '../../shared/images/downArrow.png');
          $('.main-menu').css('overflow-y', 'scroll');
      }
  });
  $('.subClick4').click(function() {
      var showElementDescription3 = $('.sb4');
      if ($(showElementDescription3).is(':visible')) {
          showElementDescription3.hide();
          $('div.ra.expandableCollapsibleDiv > img').attr('src', '../../shared/images/leftArrow.png');
      } else {
          showElementDescription3.show();
          $('div.ra.expandableCollapsibleDiv > img').attr('src', '../../shared/images/downArrow.png');
          $('.main-menu').css('overflow-y', 'scroll');
      }
  });

  function myTimer() {
      if (!$('.sb1,.sb2,.sb3,.sb4').is(':visible')) {
          $('.main-menu').css('overflow-y', 'unset');
      }
  }
  setInterval(myTimer, 10);

  var total = 0;
  var a = 1;
  var b = 1;
  var c = 1;
  var d = 1;
  var e = 1;
  var f = 1;
  var g = 1;
  var h = 1;
  var i = 1;
  var j = 1;
  var k = 1;
  var l = 1;
  var m = 1;
  var n = 1;
  var o = 1;
  var p = 1;
  var q = 1;
  var r = 1;
  var s = 1;
  var t = 1;
  var u = 1;
  var v = 1;
  var w = 1;
  var x = 1;
  console.log(total);

  // Making the total empty and adding the new total value
  function emptytotalAndAddNew() {
      $('#total>span').empty();
      $("#total>span").append(total);
  }

  // Checking the total value in digits and assigning the style to adjust
  function totalPosCheck() {
      if (total >= 1 && total <= 9) {
          $("#total").css("left", "616px");
      } else if (total >= 10 && total <= 99) {
          $("#total").css("left", "597px");
      } else if (total === 0) {
          $("#total").css("left", "616px");
      } else {
          $("#total").css("left", "579px");
      }
  }
  // Hiding all elements of content-container
  function hideContainer() {
      $('.content-container>div').hide();
      $('#content100').hide();
  }


  $('.btn1').click(function() {
      if (a === 1) {
          a--;
          total += $(".btn1").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content1').show();
          $('#humanC1').show();
          $('#total').show();
      } else {
          a++;
          total -= $(".btn1").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC1').hide();
          $('#total').show();
      }
      console.log(total);
  });
  $('.btn2').click(function() {
      if (b === 1) {
          b--;
          total += $(".btn2").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content2').show();
          $('#humanC2').show();
          $('#total').show();
      } else {
          b++;
          total -= $(".btn2").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC2').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn3').click(function() {
      if (c === 1) {
          c--;
          total += $(".btn3").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content3').show();
          $('#humanC3').show();
          $('#total').show();
      } else {
          c++;
          total -= $(".btn3").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC3').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn4').click(function() {
      if (d === 1) {
          d--;
          total += $(".btn4").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content4').show();
          $('#humanC4').show();
          $('#total').show();
      } else {
          d++;
          total -= $(".btn4").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC4').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn5').click(function() {
      if (e === 1) {
          e--;
          total += $(".btn5").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content5').show();
          $('#humanC5').show();
          $('#total').show();
      } else {
          e++;
          total -= $(".btn5").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC5').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn6').click(function() {
      if (f === 1) {
          f--;
          total += $(".btn6").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content6').show();
          $('#humanC6').show();
          $('#total').show();
      } else {
          f++;
          total -= $(".btn6").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC6').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn7').click(function() {
      if (g === 1) {
          g--;
          total += $(".btn7").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content7').show();
          $('#humanC7').show();
          $('#total').show();
      } else {
          g++;
          total -= $(".btn7").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC7').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn8').click(function() {
      if (h === 1) {
          h--;
          total += $(".btn8").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content8').show();
          $('#humanC8').show();
          $('#total').show();
      } else {
          h++;
          total -= $(".btn8").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC8').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn9').click(function() {
      if (i === 1) {
          i--;
          total += $(".btn9").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content9').show();
          $('#humanC9').show();
          $('#total').show();
      } else {
          i++;
          total -= $(".btn9").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC9').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn10').click(function() {
      if (j === 1) {
          j--;
          total += $(".btn10").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content10').show();
          $('#humanC10').show();
          $('#total').show();
      } else {
          j++;
          total -= $(".btn10").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC10').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn11').click(function() {
      if (k === 1) {
          k--;
          total += $(".btn11").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content11').show();
          $('#humanC11').show();
          $('#total').show();
      } else {
          k++;
          total -= $(".btn11").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC11').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn12').click(function() {
      if (l === 1) {
          l--;
          total += $(".btn12").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content12').show();
          $('#humanC12').show();
          $('#total').show();
      } else {
          l++;
          total -= $(".btn12").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC12').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn13').click(function() {
      if (m === 1) {
          m--;
          total += $(".btn13").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content13').show();
          $('#humanC13').show();
          $('#total').show();
      } else {
          m++;
          total -= $(".btn13").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC13').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn14').click(function() {
      if (n === 1) {
          n--;
          total += $(".btn14").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content14').show();
          $('#humanC14').show();
          $('#total').show();
      } else {
          n++;
          total -= $(".btn14").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC14').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn15').click(function() {
      if (o === 1) {
          o--;
          total += $(".btn15").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content15').show();
          $('#humanC15').show();
          $('#total').show();
      } else {
          o++;
          total -= $(".btn15").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC15').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn16').click(function() {
      if (p === 1) {
          p--;
          total += $(".btn16").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content16').show();
          $('#humanC16').show();
          $('#total').show();
      } else {
          p++;
          total -= $(".btn16").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC16').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn17').click(function() {
      if (q === 1) {
          q--;
          total += $(".btn17").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content17').show();
          $('#humanC17').show();
          $('#total').show();
      } else {
          q++;
          total -= $(".btn17").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC17').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn18').click(function() {
      if (r === 1) {
          r--;
          total += $(".btn18").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content18').show();
          $('#humanC18').show();
          $('#total').show();
      } else {
          r++;
          total -= $(".btn18").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC18').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn19').click(function() {
      if (s === 1) {
          s--;
          total += $(".btn19").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content19').show();
          $('#humanC19').show();
          $('#total').show();
      } else {
          s++;
          total -= $(".btn19").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC19').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn20').click(function() {
      if (t === 1) {
          t--;
          total += $(".btn20").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content20').show();
          $('#humanC20').show();
          $('#total').show();
      } else {
          t++;
          total -= $(".btn20").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC20').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn21').click(function() {
      if (u === 1) {
          u--;
          total += $(".btn21").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content21').show();
          $('#humanC21').show();
          $('#total').show();
      } else {
          u++;
          total -= $(".btn21").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC21').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn22').click(function() {
      if (v === 1) {
          v--;
          total += $(".btn22").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content22').show();
          $('#humanC22').show();
          $('#total').show();
      } else {
          v++;
          total -= $(".btn22").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC22').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn23').click(function() {
      if (w === 1) {
          w--;
          total += $(".btn23").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content23').show();
          $('#humanC23').show();
          $('#total').show();
      } else {
          w++;
          total -= $(".btn23").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC23').hide();
          $('#total').show();
      }
      console.log(total);
  });

  $('.btn24').click(function() {
      if (x === 1) {
          x--;
          total += $(".btn24").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#4a4a4a',
              'background-color': '#f2f2f2'
          });
          totalPosCheck();
          hideContainer();
          $('#content24').show();
          $('#humanC24').show();
          $('#total').show();
      } else {
          x++;
          total -= $(".btn24").val();
          emptytotalAndAddNew();
          $(this).css({
              'color': '#ffffff',
              'background-color': 'rgba(34, 153, 137, 0.7)'
          });
          totalPosCheck();
          hideContainer();
          $('#humanC24').hide();
          $('#total').show();
      }
      console.log(total);
  });

  // reset Functionality
  $('.resetBtn').click(function() {
      total = 0;
      $('#total>span').empty();
      $("#total>span").append(total);
      a = 1;
      b = 1;
      c = 1;
      d = 1;
      e = 1;
      f = 1;
      g = 1;
      h = 1;
      i = 1;
      j = 1;
      k = 1;
      l = 1;
      m = 1;
      n = 1;
      o = 1;
      p = 1;
      q = 1;
      r = 1;
      s = 1;
      t = 1;
      u = 1;
      v = 1;
      w = 1;
      x = 1;
      $('#content100').show();
      $('#total').hide();
      $('.content-container>div').hide();
      $('.human-content-container>div').hide();
      $('.Clink').css({
          'color': '#ffffff',
          'background-color': 'rgba(34, 153, 137, 0.7)'
      });
      console.log(total);
  });

  $('.InactiveHeader_10').click(function() {
      $('.menuDropdown_10').show();
  });
  $('.activeHeader_10').click(function() {
      $('.menuDropdown_10').hide();
  });

  $('.InactiveHeader_35').click(function() {
      $('.menuDropdown_35').show();
  });
  $('.activeHeader_35').click(function() {
      $('.menuDropdown_35').hide();
  });
  $('.InactiveHeader_49').click(function() {
      $('.menuDropdown_49').show();
  });
  $('.activeHeader_49').click(function() {
      $('.menuDropdown_49').hide();
  });

  $('.InactiveHeader_61').click(function() {
      $('.menuDropdown_61').show();
  });
  $('.activeHeader_61').click(function() {
      $('.menuDropdown_61').hide();
  });

  $('.hamburguer').click(function() {
      $('.sb1,.sb2,.sb3,.sb4').hide();
      $('div.dm-pm.expandableCollapsibleDiv > img, div.sle.expandableCollapsibleDiv > img, div.symp-sarcoidosis.expandableCollapsibleDiv > img, div.ra.expandableCollapsibleDiv > img').attr('src', '../../shared/images/leftArrow.png');
      $('#malliRef').hide();
  });
    $('.malliRefLink').click(function() {
        $('#malliRef,.ref-content').show();
        $('.popups-container').removeClass('visible');
    });
    $('.ref-overlay').click(function() {
        $('.content').removeClass('show-blur');
        $('#malliRef,.ref-content').hide();

    });
});
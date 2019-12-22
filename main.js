$(function(){

  //テキストリンクをクリックしたら
 $("#id, #idd").click(function(e) {
    e.preventDefault();  // 画面遷移を無効化

    //body内の最後に<div id="modal-bg"></div>を挿入
    $("body").append('<div id="modal-bg"></div>');


    //モーダルウィンドウを表示
    $("#modal-bg, #start").fadeIn(400);

    //画面のどこかをクリックしたらモーダルを閉じる
    $("#modal-bg,#close").click(function(e) {
      e.preventDefault();  // 画面遷移を無効化

      $("#modal-bg, #start").fadeOut(400, function() {
     //挿入した<div id="modal-bg"></div>を削除
      $('#modal-bg').remove();
     });
    });
  });


  // 質問
  $(".q1").click(function(e) {
     e.preventDefault();
     $("body").append('<div id="modal-bg"></div>');
     $("#modal-bg, .a1").fadeIn(400);
     $("#modal-bg, .a1").click(function(e) {
       e.preventDefault();
       $("#modal-bg, .a1").fadeOut(400, function() {
       $('#modal-bg').remove();
      });
     });
   });
  $(".q2").click(function(e) {
     e.preventDefault();
     $("body").append('<div id="modal-bg"></div>');
     $("#modal-bg, .a2").fadeIn(400);
     $("#modal-bg, .a2").click(function(e) {
       e.preventDefault();
       $("#modal-bg, .a2").fadeOut(400, function() {
       $('#modal-bg').remove();
      });
     });
   });
  $(".q3").click(function(e) {
     e.preventDefault();
     $("body").append('<div id="modal-bg"></div>');
     $("#modal-bg, .a3").fadeIn(400);
     $("#modal-bg, .a3").click(function(e) {
       e.preventDefault();
       $("#modal-bg, .a3").fadeOut(400, function() {
       $('#modal-bg').remove();
      });
     });
   });
  $(".q4").click(function(e) {
     e.preventDefault();
     $("body").append('<div id="modal-bg"></div>');
     $("#modal-bg, .a4").fadeIn(400);
     $("#modal-bg, .a4").click(function(e) {
       e.preventDefault();
       $("#modal-bg, .a4").fadeOut(400, function() {
       $('#modal-bg').remove();
      });
     });
   });
  $(".q5").click(function(e) {
     e.preventDefault();
     $("body").append('<div id="modal-bg"></div>');
     $("#modal-bg, .a5").fadeIn(400);
     $("#modal-bg, .a5").click(function(e) {
       e.preventDefault();
       $("#modal-bg, .a5").fadeOut(400, function() {
       $('#modal-bg').remove();
      });
     });
   });
  $(".q6").click(function(e) {
     e.preventDefault();
     $("body").append('<div id="modal-bg"></div>');
     $("#modal-bg, .a6").fadeIn(400);
     $("#modal-bg, .a6").click(function(e) {
       e.preventDefault();
       $("#modal-bg, .a6").fadeOut(400, function() {
       $('#modal-bg').remove();
      });
     });
   });

   // ヘッダー
   $(".button").click(function(e) {
      e.preventDefault();

      function reset() {
        $('.fa-angle-down,#hen').css({'fill':'black', 'color':'black'});;
      }

      $("body").append('<div id="modal-bgg"></div>');
      $("#modal-bgg").slideToggle();
      reset();
    });
});

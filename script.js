$(function(){

　/*動画をフェイドインさせる*/
  $('#top-movie').fadeIn(1000);

　/*テキスト「KAKERU MIYAUCHI Blog」を１秒後にフェイドイン*/
  setTimeout(function(){
  $('#text-blogid').fadeIn(1000);
  },1000);

  /*テキスト「KAKERU MIYAUCHI Blog」を3秒後にフェイドアウト*/
    setTimeout(function(){
    $('#text-blogid').fadeOut(1000);
  },3000);

  /*動画を3秒後にフェイドアウト*/
    setTimeout(function(){
    $('#top-movie').fadeOut(1500);
  },4000);

  /*動画を3秒後にフェイドアウト*/
    setTimeout(function(){
    $('.background-black').fadeOut(2000);
  },4000);

  // 「set-time5」クラスがついている要素は全てフェードインを開始5秒遅らせる
  setTimeout(function(){
    $('.fadein').fadeIn(2000);
  },6000);


});

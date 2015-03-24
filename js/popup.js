$(document).ready(function() {
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Super%20Smash%20Bros.%20For%20Wii%20U&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        $("#4streamwiiu").append('<tr><td><a href="'+stream.channel.url+'" target=_blank alt="'+stream.channel.status+'"><div class="tdlink">'+stream.channel.display_name+'</div></a></td><td>'+stream.viewers+'</td></tr>');
    });
  });
$.getJSON('https://api.twitch.tv/kraken/streams?game=Super%20Smash%20Bros.%20for%20Nintendo%203DS&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        $("#4stream").append('<tr><td><a href="'+stream.channel.url+'" target=_blank alt="'+stream.channel.status+'"><div class="tdlink">'+stream.channel.display_name+'</div></a></td><td>'+stream.viewers+'</td></tr>');
    });
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Super%20Smash%20Bros.&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        $("#64Stream").append('<tr><td><a href="'+stream.channel.url+'" target=_blank alt="'+stream.channel.status+'"><div class="tdlink">'+stream.channel.display_name+'</div></a></td><td>'+stream.viewers+'</td></tr>');
    });
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Super%20Smash%20Bros.%20Melee&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        $("#meleeStream").append('<tr><td><a href="'+stream.channel.url+'" target=_blank alt="'+stream.channel.status+'"><div class="tdlink">'+stream.channel.display_name+'</div></a></td><td>'+stream.viewers+'</td></tr>');
    });
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Super%20Smash%20Bros.%20Brawl&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        $("#brawlStream").append('<tr><td><a href="'+stream.channel.url+'" target=_blank alt="'+stream.channel.status+'"><div class="tdlink">'+stream.channel.display_name+'</div></a></td><td>'+stream.viewers+'</td></tr>');
    });
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Project%20M&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        $("#pmStream").append('<tr><td><a href="'+stream.channel.url+'" target=_blank alt="'+stream.channel.status+'"><div class="tdlink">'+stream.channel.display_name+'</div></a></td><td>'+stream.viewers+'</td></tr>');
    });
  });

  $('.smash4').click(function(){
    $('#smash4').show();
    $('#smash4wiiu').show();
    $('th').css({"background-color":"#f5f5f5"});
    $(this).css({"background-color":"#ffe"});
	  $('#ssb64').hide();
    $('#Melee').hide();
    $('#Brawl').hide();
    $('#ProjectM').hide();
  });
  
  $('.64').click(function(){
    $('#ssb64').show();
    $('th').css({"background-color":"#f5f5f5"});
    $(this).css({"background-color":"#ffe"});
    $('#Melee').hide();
    $('#Brawl').hide();
    $('#ProjectM').hide();
    $('#smash4').hide();
    $('#smash4wiiu').hide();
  });

  $('.melee').click(function(){
    $('th').css({"background-color":"#f5f5f5"});
    $(this).css({"background-color":"#ffe"});
    $('#ssb64').hide();
    $('#Melee').show();
    $('#Brawl').hide();
    $('#ProjectM').hide();
    $('#smash4').hide();
    $('#smash4wiiu').hide();
  });

  $('.brawl').click(function(){
    $('th').css({"background-color":"#f5f5f5"});
    $(this).css({"background-color":"#ffe"});
    $('#ssb64').hide();
    $('#Melee').hide();
    $('#Brawl').show();
    $('#ProjectM').hide();
    $('#smash4').hide();
    $('#smash4wiiu').hide();
  });

  $('.pm').click(function(){
    $('th').css({"background-color":"#f5f5f5"});
    $(this).css({"background-color":"#ffe"});
    $('#ssb64').hide();
    $('#Melee').hide();
    $('#Brawl').hide();
    $('#ProjectM').show();
    $('#smash4').hide();
    $('#smash4wiiu').hide();
  });

  $('th').hover(function(){
    $(this).css({"opacity":"0.6"});
  },function(){
    $(this).css({"opacity":"1"});
  });
});
(function($){
  'use strict';

  // var $clickedLink = $(this);


  $('.files-head').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
  });

  $('.mail-head').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
  });

  $('.cloud-head').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
  });

  $('.files-head').click(function() {
    $('.my-files ul li .num').animate({
      'font-size': '0px'});
    $('.my-files ul li').animate({
      'height': '0px',
      'line-height': '0px',
      'font-size': '0px',
      'border': '0px'});
    $('.my-files ul li .count').animate({
      'height': '0px',
      'border': '0px',
      'line-height': '0px',
      'margin': '0px'})
    .end();
      $('.files-head').click(function() {
        $('.my-files ul li .num').animate({
          'font-size': '14px'});
        $('.my-files ul li').animate({
          'height': '40px',
          'line-height': '40px',
          'font-size': '16px',
          'border': '1px solid gray'});
        $('.my-files ul li .count').animate({
          'height': '40px',
          'border': '1px solid gray',
          'line-height': '22px',
          'margin-right': '16px',
          'margin-top': '8px',
          'float': 'right'})
        .end();
      });
  });

  $('.mail-head').click(function() {
    $('.mail ul li .num').animate({
      'font-size': '14px'});
    $('.mail ul li').animate({
      'height': '40px',
      'line-height': '40px',
      'font-size': '16px',
      'border': '1px solid gray'});
    $('.mail ul li .count').animate({
      'border': '1px solid gray',
      'line-height': '22px',
      'margin-right': '16px',
      'margin-top': '8px',
      'float': 'right'})
    // .end();
    //   $('.mail-head').click(function() {
    //     $('.mail ul li .num').animate({
    //       'font-size': '0px'});
    //     $('.mail ul li').animate({
    //       'height': '0px',
    //       'line-height': '0px',
    //       'font-size': '0px',
    //       'border': '0px'});
    //     $('.mail ul li .count').animate({
    //       'height': '0px',
    //       'border': '0px',
    //       'line-height': '0px',
    //       'margin': '0px'})
    //     .end();
  });

  $('.cloud-head').click(function() {
    $('.cloud ul li .num').animate({
      'font-size': '14px'});
    $('.cloud ul li').animate({
      'height': '40px',
      'line-height': '40px',
      'font-size': '16px',
      'border': '1px solid gray'});
    $('.cloud ul li .count').animate({
      'height': '40px',
      'border': '1px solid gray',
      'line-height': '22px',
      'margin-right': '16px',
      'margin-top': '8px'})
    .end();
  });





}(jQuery));

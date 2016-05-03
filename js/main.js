$(document).ready(function(){
  var firstNum
  var operatorFn
  var equation

  $('span').not('.operator').click(function(){
    $('#screen').text($('#screen').text() + $(this).text())
  })
  $('#cancel').click(function(){
    $('#screen').empty()
  })

  $('.operator').not('#calc').click(function(){
    firstNum = $('#screen').text()
    $('#screen').empty()
    console.log(firstNum)
    operatorFn = $(this).text().replace('x','*').replace('\u00F7', '/')
    console.log(operatorFn)
  })

  $('#calc').click(function(){
    equation = (firstNum + operatorFn + $('#screen').text())
    console.log(equation)
    console.log(eval(equation));
    $('#screen').text(eval(equation))
  })

})
//

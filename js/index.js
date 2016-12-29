$("document").ready(function() {
  $("input").on("keydown keypress keyup", false);

});

togglekey = false;

function test(x) {
  if (togglekey) {
    clearout();
  }
  var value = $("input").val();
  if (value.length >= 15) {
    $("input").val(value.substr(0, 15));
  } else {
    value += x;
    $("input").val(value);
  }

  togglekey = false;
}

function percent() {
  value = $("input").val();
  $("input").val(eval(value) / 100);
}

function clearout() {
  $("input").val('');
}

function result() {
  var value = $("input").val();
  
  if(value[0] == '0' && !isNaN(value[1])){
    value = value.slice(1);
  }
  try
    { value = eval(value);}
  catch(e){value = e;}
  
  
  $("input").val(value);
  
  
  togglekey = true;

}

function plusOrMinus() {
  var value = $("input").val();
  if (value[0] == '-') {

    $("input").val(value.slice(1));
  } else $("input").val('-' + value);
}

function clearitem() {
  var value = $("input").val();
  $("input").val(value.slice(0, value.length - 1));
}
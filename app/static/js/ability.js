function str_ability(){
  var ancestry = parseInt(document.getElementById('str_ances_mod').textContent);
  var background = parseInt(document.getElementById('str_background_mod').textContent);
  var base = parseInt(document.getElementById('strength').value);
  var result = base + ancestry + background;
  var free = 0;
  if (document.getElementById('str_free').checked){
     free = 2;
     if(result >= 18){
        free = 1;
     }
  }
  result += free;
  $('#str_mod').text(Math.floor((parseInt(result) - 10) / 2));
  $('#str_result').text(result);
};

function dex_ability() {
  var ancestry = parseInt(document.getElementById('dex_ances_mod').textContent);
  var background = parseInt(document.getElementById('dex_background_mod').textContent);
  var base = parseInt(document.getElementById('dexterity').value);
  var result = base + ancestry + background;
  var free = 0;
  if (document.getElementById('dex_free').checked){
     free = 2;
     if(result >= 18){
        free = 1;
     }
  }
  result += free;
  $('#dex_mod').text(Math.floor((parseInt(result) - 10) / 2));
  $('#dex_result').text(result);
};

function con_ability(){
  var ancestry = parseInt(document.getElementById('con_ances_mod').textContent);
  var background = parseInt(document.getElementById('con_background_mod').textContent);
  var base = parseInt(document.getElementById('constitution').value);
  var result = base + ancestry + background;
  var free = 0;
  if (document.getElementById('con_free').checked){
     free = 2;
     if(result >= 18){
        free = 1;
     }
  }
  result += free;
  $('#con_mod').text(Math.floor((parseInt(result) - 10) / 2));
  $('#con_result').text(result);
};

function int_ability(){
  var ancestry = parseInt(document.getElementById('int_ances_mod').textContent);
  var background = parseInt(document.getElementById('int_background_mod').textContent);
  var base = parseInt(document.getElementById('intelligence').value);
  var result = base + ancestry + background;
  var free = 0;
  if (document.getElementById('int_free').checked){
     free = 2;
     if(result >= 18){
        free = 1;
     }
  }
  result += free;
  $('#int_mod').text(Math.floor((parseInt(result) - 10) / 2));
  $('#int_result').text(result);
};

function wis_ability(){
  var ancestry = parseInt(document.getElementById('wis_ances_mod').textContent);
  var background = parseInt(document.getElementById('wis_background_mod').textContent);
  var base = parseInt(document.getElementById('wisdom').value);
  var result = base + ancestry + background;
  var free = 0;
  if (document.getElementById('wis_free').checked){
     free = 2;
     if(result >= 18){
        free = 1;
     }
  }
  result += free;
  $('#wis_mod').text(Math.floor((parseInt(result) - 10) / 2));
  $('#wis_result').text(result);
};

function cha_ability(){
  var ancestry = parseInt(document.getElementById('cha_ances_mod').textContent);
  var background = parseInt(document.getElementById('cha_background_mod').textContent);
  var base = parseInt(document.getElementById('charisma').value);
  var result = base + ancestry + background;
  var free = 0;
  if (document.getElementById('cha_free').checked){
     free = 2;
     if(result >= 18){
        free = 1;
     }
  }
  result += free;
  $('#cha_mod').text(Math.floor((parseInt(result) - 10) / 2));
  $('#cha_result').text(result);
};

function update_ability_table(){
str_ability();
dex_ability();
con_ability();
int_ability();
wis_ability();
cha_ability();
$('input[id=strength], input[id=str_ances_mod], input[id=str_background_mod], input[id=str_free]').change(str_ability);
$('input[id=dexterity], input[id=dex_ances_mod], input[id=dex_background_mod], input[id=dex_free]').change(dex_ability);
$('input[id=constitution], input[id=con_ances_mod], input[id=con_background_mod], input[id=con_free]').change(con_ability);
$('input[id=intelligence], input[id=int_ances_mod], input[id=int_background_mod] input[id=int_free]').change(int_ability);
$('input[id=wisdom], input[id=wis_ances_mod], input[id=wis_background_mod], input[id=wis_free]').change(wis_ability)
$('input[id=charisma], input[id=cha_ances_mod], input[id=cha_background_mod], input[id=cha_free]').change(cha_ability);
}

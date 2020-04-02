function update_ability(ability, index){
  var ancestry = parseInt(document.getElementById(ability.concat('_ances_mod')).textContent);
  var background = parseInt(document.getElementById(ability.concat('_background_mod')).textContent);
  var base = parseInt(document.getElementById(ability_full[index].toLowerCase()).value);
  var result = base + ancestry + background;
  var free = 0;
  if (document.getElementById(ability.concat('_free')).checked){
     free = 2;
     if(result >= 18){
        free = 1;
     }
  }
  result += free;
  var str_mod = '#'.concat(ability).concat('_mod');
  var str_result = '#'.concat(ability).concat('_result');
  $(str_mod).text(Math.floor((parseInt(result) - 10) / 2));
  $(str_result).text(result);
};


function update_ability_hooks(event){
  var ability = event.data.ability;
  var ancestry = parseInt(document.getElementById(ability.concat('_ances_mod')).textContent);
  var background = parseInt(document.getElementById(ability.concat('_background_mod')).textContent);
  var base = parseInt(document.getElementById(ability_full[event.data.index].toLowerCase()).value);
  var result = base + ancestry + background;
  var free = 0;
  if (document.getElementById(ability.concat('_free')).checked){
     free = 2;
     if(result >= 18){
        free = 1;
     }
  }
  result += free;
  var str_mod = '#'.concat(ability).concat('_mod');
  var str_result = '#'.concat(ability).concat('_result');
  $(str_mod).text(Math.floor((parseInt(result) - 10) / 2));
  $(str_result).text(result);
};

function update_ability_table(){
// Initial update for the table
ability_short.forEach(update_ability);

// Hooks for update
$('input[id=strength], input[id=str_ances_mod], input[id=str_background_mod], input[id=str_free]').change({ability: ability_short[0], index: 0} ,update_ability_hooks);
$('input[id=dexterity], input[id=dex_ances_mod], input[id=dex_background_mod], input[id=dex_free]').change({ability: ability_short[1], index: 1} ,update_ability_hooks);
$('input[id=constitution], input[id=con_ances_mod], input[id=con_background_mod], input[id=con_free]').change({ability: ability_short[2], index: 2} ,update_ability_hooks);
$('input[id=intelligence], input[id=int_ances_mod], input[id=int_background_mod] input[id=int_free]').change({ability: ability_short[3], index: 3} ,update_ability_hooks);
$('input[id=wisdom], input[id=wis_ances_mod], input[id=wis_background_mod], input[id=wis_free]').change({ability: ability_short[4], index: 4} ,update_ability_hooks)
$('input[id=charisma], input[id=cha_ances_mod], input[id=cha_background_mod], input[id=cha_free]').change({ability: ability_short[5], index: 5} ,update_ability_hooks);
}

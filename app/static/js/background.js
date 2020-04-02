const ability_full = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
const ability_short = ['str', 'dex', 'con', 'int', 'wis','cha'];


function changeBackgroundTable(obj, index) {
    document.getElementById("background_table_desc").innerHTML = obj[index].backgroundText;
    document.getElementById("background_table_ab_boosts").insertAdjacentHTML("afterBegin", obj[index].ability[0]);
    document.getElementById("background_table_ab_boosts1").insertAdjacentHTML("afterBegin", obj[index].ability[1]);
    document.getElementById("background_table_source").innerHTML = obj[index].source;
    for (i = 0; i < 6; i++) {
        if(obj[index].ability[0].includes(ability_full[i])){
            document.getElementById('background_boost_select').
            insertAdjacentHTML("beforeEnd", '<option class="dropdown-item">'.concat(ability_full[i].concat('</option>')));
        }
    }
};

function resetBackgroundRowAbilityScores() {
    document.getElementById("str_background_mod").innerHTML = 0;
    document.getElementById("dex_background_mod").innerHTML = 0;
    document.getElementById("con_background_mod").innerHTML = 0;
    document.getElementById("int_background_mod").innerHTML = 0;
    document.getElementById("wis_background_mod").innerHTML = 0;
    document.getElementById("cha_background_mod").innerHTML = 0;
};


function background_boost(array){
    resetAncestryRowAbilityScores();
    for (i = 0; i < 2; i++) {
        document.getElementById(array[i].concat('_ances_mod')).innerHTML =+ 2;
    }
    for (i = 2; i < 3; i++) {
        document.getElementById(array[i].concat('_ances_mod')).innerHTML = -2;
    }
};

function resetBackgroundPage(){
    document.getElementById("background_table_desc").innerHTML = "";
    document.getElementById("background_table_ab_boosts").innerHTML = '<select class="form-control" id="background_boost_select" style="margin-top: 2.5%" onchange="changeBackgroundBoostSelect()"> <option class="dropdown-item">Select a boost</option> </select> <div id="background_table_ab_boosts1" style="margin-top:5%"></div> <select class="form-control" id="background_boost_select_free" style="margin-top: 2.5%" onchange="changeBackgroundBoostSelectFree()"> <option class="dropdown-item">Select a free boost</option> <option class="dropdown-item" id="str_background_boost_free">Strength</option> <option class="dropdown-item" id="dex_background_boost_free">Dexterity</option> <option class="dropdown-item" id="con_background_boost_free">Constitution</option> <option class="dropdown-item" id="int_background_boost_free">Intelligence</option> <option class="dropdown-item" id="wis_background_boost_free">Wisdom</option> <option class="dropdown-item" id="cha_background_boost_free">Charisma</option> </select>'
    document.getElementById("background_table_source").innerHTML = "";
};


function switchBackground(sel_background, obj, index){
    if (sel_background == 'Select a background') {
         resetBackgroundPage();
    } else {
        resetBackgroundPage();
        changeBackgroundTable(obj, index);
    }
};

function changeBackgroundBoostSelectFree(element){
   var boost_select = document.getElementById('background_boost_select_free').value.toLowerCase();
   var ability_score = boost_select.substring(0, 3);
   var value = parseInt(document.getElementById(ability_score.concat('_background_mod')).innerHTML);
   document.getElementById(ability_score.concat("_background_mod")).innerHTML = value + 2;
   previous_select_reset('background_boost_select_free', ability_score);
};

function changeBackgroundBoostSelect(element){
   var boost_select = document.getElementById('background_boost_select').value.toLowerCase();
   var ability_score = boost_select.substring(0, 3);
   var value = parseInt(document.getElementById(ability_score.concat('_background_mod')).innerHTML);
   document.getElementById(ability_score.concat("_background_mod")).innerHTML = value + 2;
   previous_select_reset('background_boost_select', ability_score);
};


function previous_select_reset (select_id) {
    var previous;

    $("select[id=\"".concat(select_id).concat("\"]")).focus(function () {
        // Store the current value on focus, before it changes
        previous = this.value.toLowerCase().substring(0, 3).concat("_background_mod");
    }).change(function() {
        // Do soomething with the previous value after the change
        var curr_value = parseInt(document.getElementById(previous).innerHTML);
        document.getElementById(previous).innerHTML = curr_value - 2;
        previous = this.value;
    });
};

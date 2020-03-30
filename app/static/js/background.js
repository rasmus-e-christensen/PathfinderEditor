const ability_full = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
const ability_short = ['str', 'dex', 'con', 'int', 'wis','cha'];



function changeBackgroundTable(obj, index) {
    document.getElementById("background_table_desc").innerHTML = obj[index].backgroundText;
    document.getElementById("background_table_ab_boosts").insertAdjacentHTML("afterBegin", obj[index].ability[0]);
    document.getElementById("background_table_ab_boosts1").insertAdjacentHTML("afterBegin", obj[index].ability[1]);
    document.getElementById("background_table_source").innerHTML = obj[index].source;
    for (i = 0; i < 6; i++) {
        if(obj[index].ability[0].includes(ability_full[i])){
            document.getElementById('background_boost_select').insertAdjacentHTML("beforeEnd", '<option class="dropdown-item">'.concat(ability_full[i].concat('</option>')));
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
        document.getElementById(array[i].concat('_ances_mod')).innerHTML = 2;
    }
    for (i = 2; i < 3; i++) {
        document.getElementById(array[i].concat('_ances_mod')).innerHTML = -2;
    }
};



function switchBackground(sel_background, obj, index){
    switch (sel_background) {
      case "Acolyte":
        changeBackgroundTable(obj, index);
        break;
      case "Select a background":
        document.getElementById("background_table_desc").innerHTML = "";
        document.getElementById("background_table_ab_boosts").innerHTML = "";
        document.getElementById("background_table_source").innerHTML = "";
        break;

    }
}
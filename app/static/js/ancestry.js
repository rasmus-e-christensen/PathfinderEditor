function changeAncestryTable(obj, index) {
    document.getElementById("stat_table_hp").innerHTML = obj[index].hp;
    document.getElementById("stat_table_size").innerHTML = obj[index].size;
    document.getElementById("stat_table_speed").innerHTML = obj[index].speed;
    document.getElementById("stat_table_ab").insertAdjacentHTML("afterBegin", obj[index].abilityBoosts);
    console.log(obj[index].abilityFlaws);
    if (obj[index].abilityFlaws == undefined){
        document.getElementById("stat_table_af").innerHTML = "";
    }
    else{
        document.getElementById("stat_table_af").innerHTML = obj[index].abilityFlaws;
    }
};

function resetAncestryRowAbilityScores() {
    document.getElementById("str_ances_mod").innerHTML = 0;
    document.getElementById("dex_ances_mod").innerHTML = 0;
    document.getElementById("con_ances_mod").innerHTML = 0;
    document.getElementById("int_ances_mod").innerHTML = 0;
    document.getElementById("wis_ances_mod").innerHTML = 0;
    document.getElementById("cha_ances_mod").innerHTML = 0;
};


function resetAncestryPage(){
    document.getElementById("stat_table_hp").innerHTML = "";
    document.getElementById("stat_table_size").innerHTML = "";
    document.getElementById("stat_table_speed").innerHTML = "";
    document.getElementById("stat_table_ab").innerHTML = '<select class="form-control" id="ancestry_boost_select" style="margin-top: 2.5%" onchange="changeAncestryBoostSelect()"> <option class="dropdown-item">Select a boost</option> <option class="dropdown-item" id="str_ancestry_boost">Strength</option> <option class="dropdown-item" id="dex_ancestry_boost">Dexterity</option> <option class="dropdown-item" id="con_ancestry_boost">Constitution</option> <option class="dropdown-item" id="int_ancestry_boost">Intelligence</option> <option class="dropdown-item" id="wis_ancestry_boost">Wisdom</option> <option class="dropdown-item" id="cha_ancestry_boost">Charisma</option> </select> <select class="form-control" id="ancestry_boost_select_1" style="margin-top: 2.5%" onchange="changeAncestryBoostSelect()"> <option class="dropdown-item">Select a boost</option> <option class="dropdown-item" id="str_ancestry_boost_1">Strength</option> <option class="dropdown-item" id="dex_ancestry_boost_1">Dexterity</option> <option class="dropdown-item" id="con_ancestry_boost_1">Constitution</option> <option class="dropdown-item" id="int_ancestry_boost_1">Intelligence</option> <option class="dropdown-item" id="wis_ancestry_boost_1">Wisdom</option><option class="dropdown-item" id="cha_ancestry_boost_1">Charisma</option></select>';
    document.getElementById("stat_table_af").innerHTML = "";
}

function ability_flaw_boost(array){
    resetAncestryRowAbilityScores();
    for (i = 0; i < 2; i++) {
        var value = parseInt(document.getElementById(array[i].concat('_ances_mod')).innerHTML);
        document.getElementById(array[i].concat('_ances_mod')).innerHTML = value + 2;
    }
    for (i = 2; i < 3; i++) {
        var value = parseInt(document.getElementById(array[i].concat('_ances_mod')).innerHTML);
        document.getElementById(array[i].concat('_ances_mod')).innerHTML = value - 2;
    }
};



function switchAncestry(sel_ancestry, obj , index){
    resetAncestryPage();
    switch (sel_ancestry) {
    case "Dwarf":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['con', 'wis', 'cha']);
        $('#ancestry_boost_select').prop('disabled', 'disabled');
        break;
    case "Elf":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['dex', 'int', 'con']);
        $('#ancestry_boost_select').prop('disabled', 'disabled');
        break;
    case "Gnome":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['con', 'cha', 'str']);
        $('#ancestry_boost_select').prop('disabled', 'disabled');
        break;
    case "Goblin":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['dex', 'cha', 'wis']);
        $('#ancestry_boost_select').prop('disabled', 'disabled');
        break;
    case "Halfling":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['dex', 'wis', 'str']);
        $('#ancestry_boost_select').prop('disabled', 'disabled');
        break;
    case "Half-Elf":
        changeAncestryTable(obj, index);
        break;
    case "Half-Orc":
        changeAncestryTable(obj, index);
        break;
    case "Human":
        changeAncestryTable(obj, index);
        break;
    case "Hobgoblin":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['con', 'int', 'wis']);
        $('#ancestry_boost_select').prop('disabled', 'disabled');
        break;
    case "Leshy":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['con', 'wis', 'int']);
        $('#ancestry_boost_select').prop('disabled', 'disabled');
        break;
    case "Lizardfolk":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['str', 'wis', 'int']);
        $('#ancestry_boost_select').prop('disabled', 'disabled');
        break;
    case "Select an ancestry":
        document.getElementById("stat_table_hp").innerHTML = "";
        document.getElementById("stat_table_size").innerHTML = "";
        document.getElementById("stat_table_speed").innerHTML = "";
        document.getElementById("stat_table_ab").innerHTML = '<select class="form-control" id="ancestry_boost_select" style="margin-top: 2.5%" onchange="changeAncestryBoostSelect()"> <option class="dropdown-item">Select a boost</option> <option class="dropdown-item" id="str_ancestry_boost">Strength</option> <option class="dropdown-item" id="dex_ancestry_boost">Dexterity</option> <option class="dropdown-item" id="con_ancestry_boost">Constitution</option> <option class="dropdown-item" id="int_ancestry_boost">Intelligence</option> <option class="dropdown-item" id="wis_ancestry_boost">Wisdom</option> <option class="dropdown-item" id="cha_ancestry_boost">Charisma</option> </select><select class="form-control" id="ancestry_boost_select_1" style="margin-top: 2.5%" onchange="changeAncestryBoostSelect()"> <option class="dropdown-item">Select a boost</option> <option class="dropdown-item" id="str_ancestry_boost_1">Strength</option> <option class="dropdown-item" id="dex_ancestry_boost_1">Dexterity</option> <option class="dropdown-item" id="con_ancestry_boost_1">Constitution</option> <option class="dropdown-item" id="int_ancestry_boost_1">Intelligence</option> <option class="dropdown-item" id="wis_ancestry_boost_1">Wisdom</option><option class="dropdown-item" id="cha_ancestry_boost_1">Charisma</option></select>'
        document.getElementById("stat_table_af").innerHTML = "";
        resetAncestryRowAbilityScores();
        resetAncestryPage();
        break;
    }
};
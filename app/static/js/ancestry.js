function changeAncestryTable(obj, index) {
    document.getElementById("stat_table_hp").innerHTML = obj[index].hp;
    document.getElementById("stat_table_size").innerHTML = obj[index].size;
    document.getElementById("stat_table_speed").innerHTML = obj[index].speed;
    document.getElementById("stat_table_ab").innerHTML = obj[index].abilityBoosts;
    document.getElementById("stat_table_af").innerHTML = obj[index].abilityFlaws;
};

function resetAncestryRowAbilityScores() {
    document.getElementById("str_ances_mod").innerHTML = 0;
    document.getElementById("dex_ances_mod").innerHTML = 0;
    document.getElementById("con_ances_mod").innerHTML = 0;
    document.getElementById("int_ances_mod").innerHTML = 0;
    document.getElementById("wis_ances_mod").innerHTML = 0;
    document.getElementById("cha_ances_mod").innerHTML = 0;
};


function ability_flaw_boost(array){
    resetAncestryRowAbilityScores();
    for (i = 0; i < 2; i++) {
        document.getElementById(array[i].concat('_ances_mod')).innerHTML = 2;
    }
    for (i = 2; i < 3; i++) {
        document.getElementById(array[i].concat('_ances_mod')).innerHTML = -2;
    }
};



function switchAncestry(sel_ancestry, obj , index){
    switch (sel_ancestry) {
    case "Dwarf":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['con', 'wis', 'cha']);
        break;
    case "Elf":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['dex', 'int', 'con']);
        break;
    case "Gnome":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['con', 'cha', 'str']);
        break;
    case "Goblin":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['dex', 'cha', 'wis']);
        break;
    case "Halfling":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['dex', 'wis', 'str']);
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
        break;
    case "Leshy":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['con', 'wis', 'int']);
        break;
    case "Lizardfolk":
        changeAncestryTable(obj, index);
        ability_flaw_boost(['str', 'wis', 'int']);
        break;
    case "Select a class":
        document.getElementById("stat_table_hp").innerHTML = "";
        document.getElementById("stat_table_size").innerHTML = "";
        document.getElementById("stat_table_speed").innerHTML = "";
        document.getElementById("stat_table_ab").innerHTML = "";
        document.getElementById("stat_table_af").innerHTML = "";
        break;
    }
};
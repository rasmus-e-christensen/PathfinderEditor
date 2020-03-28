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



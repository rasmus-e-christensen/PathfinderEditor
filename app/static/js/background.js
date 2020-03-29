function changeBackgroundTable(obj, index) {
    document.getElementById("background_table_desc").innerHTML = obj[index].backgroundText;
    document.getElementById("background_table_ab_boosts").innerHTML = obj[index].ability;
};

function resetBackgroundRowAbilityScores() {
    document.getElementById("str_background_mod").innerHTML = 0;
    document.getElementById("dex_background_mod").innerHTML = 0;
    document.getElementById("con_background_mod").innerHTML = 0;
    document.getElementById("int_background_mod").innerHTML = 0;
    document.getElementById("wis_background_mod").innerHTML = 0;
    document.getElementById("cha_background_mod").innerHTML = 0;
};
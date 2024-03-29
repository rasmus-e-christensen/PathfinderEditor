const ability_full = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
const ability_short = ['str', 'dex', 'con', 'int', 'wis', 'cha'];


function changeBackgroundTable(obj, index) {
    document.getElementById("background_table_desc").innerHTML = obj[index].backgroundText;
    document.getElementById("background_table_ab_boosts").insertAdjacentHTML("afterBegin", obj[index].ability[0]);
    document.getElementById("background_table_ab_boosts1").insertAdjacentHTML("afterBegin", obj[index].ability[1]);
    document.getElementById("background_table_source").innerHTML = obj[index].source;
    for (let jindex = 0; jindex < 6; jindex++) {
        if (obj[index].ability[0].includes(ability_full[jindex])) {
            document.getElementById('background_boost_select').insertAdjacentHTML("beforeEnd", '<option class="dropdown-item">'.concat(ability_full[jindex].concat('</option>')));
        }
    }
}

function resetBackgroundRowAbilityScores() {
    document.getElementById("str_background_mod").innerHTML = 0;
    document.getElementById("dex_background_mod").innerHTML = 0;
    document.getElementById("con_background_mod").innerHTML = 0;
    document.getElementById("int_background_mod").innerHTML = 0;
    document.getElementById("wis_background_mod").innerHTML = 0;
    document.getElementById("cha_background_mod").innerHTML = 0;
}


function resetBackgroundPage() {
    document.getElementById("background_table_desc").innerHTML = "";
    document.getElementById("background_table_ab_boosts").innerHTML = '<select class="form-control" id="background_boost_select" style="margin-top: 2.5%" onchange="changeBackgroundBoostSelect()"> <option class="dropdown-item">Select a boost</option> </select> <div id="background_table_ab_boosts1" style="margin-top:5%"></div> <select class="form-control" id="background_boost_select_free" style="margin-top: 2.5%" onchange="changeBackgroundBoostSelectFree()"> <option class="dropdown-item">Select a free boost</option> <option class="dropdown-item" id="str_background_boost_free">Strength</option> <option class="dropdown-item" id="dex_background_boost_free">Dexterity</option> <option class="dropdown-item" id="con_background_boost_free">Constitution</option> <option class="dropdown-item" id="int_background_boost_free">Intelligence</option> <option class="dropdown-item" id="wis_background_boost_free">Wisdom</option> <option class="dropdown-item" id="cha_background_boost_free">Charisma</option> </select>';
    document.getElementById("background_table_source").innerHTML = "";
}


function switchBackground(sel_background, obj, index) {
    if (sel_background === 'Select a background') {
        resetBackgroundPage();
    } else {
        resetBackgroundPage();
        changeBackgroundTable(obj, index);
    }
}

function changeBackgroundBoostSelectFree() {
    let boost_select = document.getElementById('background_boost_select_free').value.toLowerCase();
    let ability_score = boost_select.substring(0, 3);
    if (ability_score !== 'sel') {
        let value = parseInt(document.getElementById(ability_score.concat('_background_mod')).innerHTML);
        document.getElementById(ability_score.concat("_background_mod")).innerHTML = value + 2;
    }
    previous_select_reset('background_boost_select_free', ability_score);
}

function changeBackgroundBoostSelect() {
    let boost_select = document.getElementById('background_boost_select').value.toLowerCase();
    let free_boost_select = document.getElementById('background_boost_select_free');
    let ability_score = boost_select.substring(0, 3);
    if (ability_score === 'sel') {
        makeAllItemsAvailable(free_boost_select);
        return
    }
    else if(ability_score !== 'sel') {
        let value = parseInt(document.getElementById(ability_score.concat('_background_mod')).innerHTML);
        document.getElementById(ability_score.concat("_background_mod")).innerHTML = value + 2;
    }
    previous_select_reset('background_boost_select', ability_score);
    makeAllItemsAvailable(free_boost_select);
    for (let index = 1; index <= 6; index++) {
        if (free_boost_select[index].textContent.toLowerCase().includes(boost_select)) {
            free_boost_select[index].disabled = true;
        }
    }
}


function makeAllItemsAvailable(dropdown) {
    let options = dropdown.options;
    for (let index = 0; index < options.length; index++) {
        if (options[index].disabled === true) {
            options[index].disabled = false;
        }
    }
}


function previous_select_reset(select_id) {
    let previous;
    $("select[id=\"".concat(select_id).concat("\"]")).focus(function () {
        // Store the current value on focus, before it change
        previous = this.value.toLowerCase().substring(0, 3).concat("_background_mod");
        console.log("before change " + this.value)
    }).change(function () {
        console.log("after change " + previous);
        // Do soomething with the previous value after the change
        if (previous !== undefined) {
            if(previous === 'sel_background_mod' || previous === 'Select a boost'){
            }
            else {
                const curr_value = parseInt(document.getElementById(previous).innerHTML);
                document.getElementById(previous).innerHTML = curr_value - 2;
                previous = this.value;
            }

        }
    });
}

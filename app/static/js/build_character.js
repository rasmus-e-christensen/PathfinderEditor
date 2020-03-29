function build_character(){
    update_all_scores();
    var abilityTableData = get_all_values_from_table('table');
    var ability_scores = abilityTableData.slice(36);
    var result_ab_scores = ability_scores.map(function (x) {
        return parseInt(x, 10);
    });
    $.ajax({
          type: "POST",
          url: '/build_character',
          data: {result_ab_scores: result_ab_scores}
    });
};

function update_all_scores() {
    update_ability_table();
};

function get_all_values_from_table(table_id){
    var myTab = document.getElementById(table_id);
    var tableData = [];
    // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
    for (i = 1; i < myTab.rows.length; i++) {

        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCells = myTab.rows.item(i).cells;

        // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
        for (var j = 0; j < objCells.length; j++) {
            tableData.push(objCells.item(j).innerHTML);
            }
    }
    return tableData;
}
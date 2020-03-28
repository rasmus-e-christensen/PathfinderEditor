function changeAncestry(){
   var sel_ancestry = document.getElementById('ancestry_select').value;
   var ancestry = document.getElementById("chosen_ancestry");
   var obj = {{ data | tojson | safe }};
   switch (sel_ancestry) {
  case "Dwarf":
    ancestry.innerHTML = "You choose " + obj[0].name;
    break;
  case "Elf":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + sel_ancestry;
    break;
  case "Gnome":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + sel_ancestry;
    break;
  case "Goblin":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + sel_ancestry;
    break;
  case "Halfling":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + sel_ancestry;
    break;
  case "Human":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + sel_ancestry;
    break;
  case "Hobgoblin":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + sel_ancestry;
    break;
  case "Leshy":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + sel_ancestry;
    break;
  case "Lizardfolk":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + sel_ancestry;
    break;
}};
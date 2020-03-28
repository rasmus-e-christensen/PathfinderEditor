$('#ancestry_select').change(function(){
   var ancestry = document.getElementById("chosen_ancestry");
   var json = $.getJSON("/ancestry_data");
   switch (this.value) {
  case "Dwarf":
    ancestry.html(json);
    break;
  case "Elf":
    ancestry.html(json)
    break;
  case "Gnome":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + this.value;
    break;
  case "Goblin":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + this.value;
    break;
  case "Halfling":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + this.value;
    break;
  case "Human":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + this.value;
    break;
  case "Hobgoblin":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + this.value;
    break;
  case "Leshy":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + this.value;
    break;
  case "Lizardfolk":
    document.getElementById("chosen_ancestry").innerHTML = "You choose " + this.value;
    break;
}});
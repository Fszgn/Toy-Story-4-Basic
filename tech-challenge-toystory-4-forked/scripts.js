console.log("To infinity and beyond.");

var inputText = document.getElementById("txt"),
  items = document.querySelectorAll("#commentlist li"),
  tab = [],
  index;

function addLI() {
  var listNode = document.getElementById("commentlist"),
    textNode = document.createTextNode(inputText.value),
    liNode = document.createElement("LI");

  liNode.appendChild(textNode);
  listNode.appendChild(liNode);

  refreshArray();
}

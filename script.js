let adjective1 = prompt("Enter an adjective");
let adjective2 = prompt("Enter another adjective");
let name1 = prompt("Enter a name");
let noun1 = prompt("Enter a noun");
let verb1 = prompt("Enter a verb with an -ing ending");
let verb2 = prompt("Enter another verb  an -ing ending");
let verb3 = prompt("Enter another verb  an -ing ending")
let name2 = prompt("Enter another name  an -ing ending");

let story = `One <span style="color: orange">${adjective1}</span> and <span style="color: orange">${adjective2}</span> night, <span style="color: orange">${name1}</span> and I went into <span style="color: orange">${noun1}</span> town, and we ended up <span style="color: orange">${verb1}</span> and <span style="color: orange">${verb2}</span>. After that we went to <span style="color: orange">${verb3}</span> some people and then ended up meeting <span style="color: orange">${name2}</span> to go trick or treating.`;

let output = story;

document.getElementById('output').innerHTML = output;
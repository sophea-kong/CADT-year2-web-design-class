let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
// Move the item 3 to the second container
const item3 = document.getElementById("item3");
container2.appendChild(document.getElementById("item3"));

//  2- Remove item 4
// YOUR CODE !!
const item4 = document.getElementById("item4");
item4.remove();
   
// 3- Create a new item 10 and add it to container 3
// YOUR CODE !!
for (let i = 0; i < 10; i++) {
    const newItem = document.createElement("div");
    newItem.id = "item" + i;
    newItem.textContent = i;
    newItem.className = "item";
    container3.appendChild(newItem);
}

//  4- Set all items located in a blue container to red
// YOUR CODE !!
const blueItems = document.getElementsByClassName("containerBlue");
for (let item of blueItems) {
    item.style.color = "red";
}
let bagItems = [];
onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHome();
displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
  alert('item is added to bag')
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector (".bag-item-count");
  if (bagItems.length) {
    bagItemCountElement.style.visibility = 'visible';
  bagItemCountElement.innerText = bagItems.length;
  }else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}
function displayItemsOnHome(){
let itemContainerElement =  document.querySelector(".items-container");

if (!itemContainerElement){
  return;
}
let innerHTML = '';
items.forEach(item => {
  innerHTML +=
  `<div class="Item-cotainer">
   <img class="item-image" src="${item.image}" 
    alt="item-image">
    <div class="rating">
       ${item.rating.stars}⭐ | ${item.rating.count}
   </div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price">
  <span class="current-price">Rs ${item.current_price}</span>
  <span class="original-price">Rs ${item.original_price}</span>
  <span class="discount">${item.discount_percentage}% OFF</span>
  </div>
<button class="add-bag" onclick = "addToBag( ${item.id})">Add to bag</button>
</div>`
});

itemContainerElement.innerHTML = innerHTML;
}

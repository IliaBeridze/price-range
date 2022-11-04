let container = document.querySelector(".container");
let meniu = document.querySelector(".meniu");
let buttons = document.querySelector(".buttons");
let imputs = document.querySelector(".imputs");
let products = document.querySelector(".products");
let btnLH = document.querySelector(".btnLH");
let btnHL = document.querySelector(".btnHL");
let btnAZ = document.querySelector(".btnAZ");
let btnZA = document.querySelector(".btnZA");
let btnFilter = document.querySelector(".btnFilter");
let maxinput = document.querySelector(".maxinput");
let minInput = document.querySelector(".minInput");

let productsArray = [
  ["Apple", 2.4],
  ["Banana", 1.8],
  ["Cherry", 3],
  ["Peach", 1.2],
  ["Watermelon", 0.7],
  ["Melon", 1],
  ["Plum", 3.2],
];

for (let i = 0; i < productsArray.length; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  products.appendChild(box);
  let name = document.createElement("p");
  let price = document.createElement("p");
  box.append(name, price);
  name.innerHTML = `Product Name: ${productsArray[i][0]}`;
  price.innerHTML = `Product Price: ${productsArray[i][1]}`;
  // console.log(box)
}

btnHL.addEventListener("click", function () {
  products.innerHTML = "";

  let sortedArray = productsArray.sort((a, b) => b[1] - a[1]);
  console.log(sortedArray);
  for (let i = 0; i < sortedArray.length; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    products.appendChild(box);
    let name = document.createElement("p");
    let price = document.createElement("p");
    box.append(name, price);
    name.innerHTML = `Product Name: ${sortedArray[i][0]}`;
    price.innerHTML = `Product Price: ${sortedArray[i][1]}`;
  }
});

btnLH.addEventListener("click", function () {
  products.innerHTML = "";
  let sortedArray = productsArray.sort((b, a) => b[1] - a[1]);
  for (let i = 0; i < sortedArray.length; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    products.appendChild(box);
    let name = document.createElement("p");
    let price = document.createElement("p");
    box.append(name, price);
    name.innerHTML = `Product Name: ${sortedArray[i][0]}`;
    price.innerHTML = `Product Price: ${sortedArray[i][1]}`;
  }
  console.log(sortedArray);
});

btnAZ.addEventListener("click", function () {
  products.innerHTML = "";
  let sortedArray = productsArray.sort(function (a, b) {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < sortedArray.length; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    products.appendChild(box);
    let name = document.createElement("p");
    let price = document.createElement("p");
    box.append(name, price);
    name.innerHTML = `Prodact Name: ${productsArray[i][0]}`;
    price.innerHTML = `Prodact Price: ${productsArray[i][1]}`;
  }
});

btnZA.addEventListener("click", function () {
  products.innerHTML = "";
  let sortedArray = productsArray.sort(function (a, b) {
    if (a[0] < b[0]) {
      return 1;
    } else if (a[0] > b[0]) {
      return -1;
    }
    return 0;
  });

  for (let i = 0; i < sortedArray.length; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    products.appendChild(box);
    let name = document.createElement("p");
    let price = document.createElement("p");
    box.append(name, price);
    name.innerHTML = `Prodact Name: ${productsArray[i][0]}`;
    price.innerHTML = `Prodact Price: ${productsArray[i][1]}`;
  }
});

btnFilter.addEventListener("click", function () {
  console.log(minInput.value);
  console.log(maxinput.value);

  products.innerHTML = "";

  // for (let i = 0; i < productsArray.length; i++) {
  //   let box = document.createElement("div");
  //   box.classList.add("box");
  //   products.appendChild(box);
  //   let name = document.createElement("p");
  //   let price = document.createElement("p");
  //   box.append(name, price);

  let result = productsArray.filter((item) => {
    if (item[1] > minInput.value && item[1] < maxinput.value) {
      console.log(item);
      let box = document.createElement("div");
      box.classList.add("box");
      products.appendChild(box);
      let name = document.createElement("p");
      let price = document.createElement("p");
      box.append(name, price);
      name.innerHTML = `Prodact Name: ${item[0]}`;
      price.innerHTML = `Prodact Price: ${item[1]}`;
    }
  });
  console.log(result);
  // name.innerHTML = `Prodact Name: ${productsArray[i][0]}`;
  //     price.innerHTML = `Prodact Price: ${productsArray[i][1]}`;

  // }
});

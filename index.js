var kittens = ["Milo", "Otis", "Garfield"];//define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  let newArray = [...kittens];
  newArray.push(name);
  return newArray;
}

function prependKitten(name) {
  let newArray = [...kittens];
  newArray.unshift(name);
  return newArray;
}

function removeLastKitten() {
  let newArray = kittens.slice(kittens.length - 1);
  return newArray;
}
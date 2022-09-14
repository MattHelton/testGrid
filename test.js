let testArray = [
  "2-0-1",
  "3-1-1",
  "3-1-2",
  "3-1-3",
  "3-1-4",
  "3-2-1",
  "3-2-2",
  "3-2-3",
  "3-2-4",
  "4-1-1",
  "4-1-2",
  "4-1-3",
  "4-1-4",
  "4-2-1",
  "4-2-2",
  "4-3-1",
  "5-1-1",
  "5-1-2",
  "5-2-2",
  "5-2-3",
  "5-2-4",
  "6-0-2",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank",
  "Blank"
]

let secondArray = [
  "2-0-1",
  "3-1-1",
  "3-1-2",
  "3-1-3",
  "3-1-4",
  "3-2-1",
  "3-2-2",
  "3-2-3",
  "3-2-4",
  "4-1-1",
  "4-1-2",
  "4-1-3",
  "4-1-4",
  "4-2-1",
  "4-2-2",
  "4-3-1",
  "5-1-1",
  "5-1-2",
  "5-2-2",
  "5-2-3",
  "5-2-4",
  "6-0-2"
]
let els = document.getElementsByClassName("testing")
let lastNumber;
let quickly;
function randomItem(arr) {
  ranNum = Math.floor(Math.random() * (arr.length))
  if (ranNum === lastNumber ){
    randomItem(arr)
  } else{
    lastNumber = ranNum
    return arr[ranNum]
  }
}

function generateRanItemInHtml(el, arr) {
  let fileName = randomItem(arr)
  if (fileName === undefined) {
    generateRanItemInHtml(el, arr)
  } else {
    el.src = `./icons/${fileName}.svg`
  }
}




// timer

timerId = setInterval(clockTick, 500);
function clockTick() {
  let newIndex = Math.floor(Math.random() * (els.length))
  generateRanItemInHtml(els[newIndex], testArray)
}

function populateGrid(elList, arr) {
    for (let index in elList) {
      generateRanItemInHtml(elList[index], arr) 
    }
  }
   populateGrid(els, testArray)

  //  function quickRandom() {
  //   if(ranIndex < 3){

  //     generateRanItemInHtml(els[newIndex], secondArray)
  //   }
  //  }
let testArray = ["add", "water","wallet", "accessibility", "print", "power", "pricetag", "radio", "rainy", "play", "woman", "warning", "walk", "wifi", "watch", "train",
"wine",
"videocam","unlink", "tv", "trophy","umbrella","triangle", "trending-up", "trending-down", "trash", "transgender", "trail-sign", "toggle", "today", "timer", "ticket", "thunderstorm", "thumbs-up", "time", "thumbs-down","thermometer", "text", "terminal", "man", "telescope", "tennisball", "sync", "sunny", "subway", "storefront", "stop", "stopwatch",
"person", "alarm", "airplane", "albums", "alert",
"american-football",
"analytics",
"aperture",
"apps",
"archive",
"arrow-back",
"arrow-down",
"arrow-up",
"arrow-forward",
"arrow-redo",
"arrow-undo",
"at",
"attach",
"backspace",
"bag-add",
"bag-check",
"bag-handle",
"bag",
"balloon",
"ban",
"bandage",
"bar-chart",
"barbell",
"barcode",
"baseball",
"basketball",
"basket",
"battery-charging",
"battery-full",
"battery-half",
"beaker",
"bed",
"beer"
]
let els = document.getElementsByClassName("testing")
let lastNumber;
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
    el.src = `./svg/${fileName}.svg`
  }
}




// timer

timerId = setInterval(clockTick, 500);
function clockTick() {
  let newIndex = Math.floor(Math.random() * (els.length))
  generateRanItemInHtml(els[newIndex], testArray)
}

// function populateGrid(elList, arr) {
  //   for (let index in elList) {
  //     generateRanItemInHtml(elList[index], arr) 
  //   }

    // document.getElementById("generate").addEventListener("click", function  (){
    
    // })
  // }
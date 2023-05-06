let minerals = 0
let totalResources = 0
let perClick = 0
let perAutoMine = 0

let clickUpgrades = [{
  name: 'Laser Drill',
  price: 5,
  quantity: 1,
  multiplier: 1,
},
{
  name: 'Airblast Drill',
  price: 10,
  quantity: 0,
  multiplier: 5
}
]


let automaticUpgrades = [{
  name: 'Mineral Extractor',
  price: 50,
  quantity: 0,
  multiplier: 10
},
{
  name: 'Thorium Reactor',
  price: 200,
  quantity: 0,
  multiplier: 100
}
]

function totalResourceCount() {
  if (minerals > totalResources) {
    totalResources = minerals
    console.log('total resource count', totalResources)
  } else if (minerals < totalResources) {
    totalResources += perClick
  }
}

function totalResourceAutoCount() {
  if (minerals < totalResources) {
    totalResources += perAutoMine
  }
}

// SECTION DRAWING

function drawEverything() {
  drawMinerals()
  drawClickUpgrades()
  drawAutoUpgrades()
  drawMineralsPerClick()
  drawMineralsPerAuto()
  drawCosts()
  drawTotalResources()
}

function drawTotalResources() {
  document.getElementById('totalResources').innerText = totalResources
}

function drawCosts() {
  // @ts-ignore
  document.getElementById('laserDrillCost').innerText = clickUpgrades[0].price
  // @ts-ignore
  document.getElementById('airblastDrillCost').innerText = clickUpgrades[1].price
  // @ts-ignore
  document.getElementById('mineralExtractorCost').innerText = automaticUpgrades[0].price
  // @ts-ignore
  document.getElementById('thoriumReactorCost').innerText = automaticUpgrades[1].price


}

function drawMineralsPerClick() {
  let mineralsPerClick = 0
  clickUpgrades.forEach(cUpgrade =>
    mineralsPerClick = mineralsPerClick + cUpgrade.quantity * cUpgrade.multiplier)
  // @ts-ignore
  document.getElementById('clickCollect').innerText = mineralsPerClick
  console.log('minerals per click', mineralsPerClick)
  perClick = mineralsPerClick
}

function drawMineralsPerAuto() {
  let mineralsPerAuto = 0
  automaticUpgrades.forEach(aUpgrade =>
    mineralsPerAuto = mineralsPerAuto + aUpgrade.quantity * aUpgrade.multiplier)
  // @ts-ignore
  document.getElementById('autoCollect').innerText = mineralsPerAuto
  console.log('minerals per auto', mineralsPerAuto)
  perAutoMine = mineralsPerAuto
}

function drawMinerals() {
  // @ts-ignore
  document.getElementById('mineralCount').innerText = minerals
}

function drawClickUpgrades() {
  // @ts-ignore
  document.getElementById('laserDrillQty').innerText = clickUpgrades[0].quantity
  // @ts-ignore
  document.getElementById('airblastDrillQty').innerText = clickUpgrades[1].quantity
}

function drawAutoUpgrades() {
  // @ts-ignore
  document.getElementById('mineralExtractorQty').innerText = automaticUpgrades[0].quantity
  // @ts-ignore
  document.getElementById('thoriumReactorQty').innerText = automaticUpgrades[1].quantity

}

// SECTION MINING

function minePlanet() {
  let mineralsPerClick = 0
  clickUpgrades.forEach(cUpgrade =>
    mineralsPerClick = mineralsPerClick + cUpgrade.quantity * cUpgrade.multiplier)
  minerals += mineralsPerClick
  console.log('mineralsPerClick', mineralsPerClick)
  totalResourceCount()
  drawEverything()
}

function autoMine() {
  let minedPerAuto = 0
  automaticUpgrades.forEach(aUpgrade =>
    minedPerAuto = minedPerAuto + aUpgrade.quantity * aUpgrade.multiplier)
  console.log('automining', minedPerAuto)
  minerals += minedPerAuto
  totalResourceAutoCount()
  drawEverything()
  console.log('perAutoMine', perAutoMine)
}

// SECTION BUYING UPGRADES

function buyLaserDrill() {
  if (minerals >= clickUpgrades[0].price) {
    minerals -= clickUpgrades[0].price;
    clickUpgrades[0].quantity++;
    console.log('buying laser drill')
    clickUpgrades[0].price = clickUpgrades[0].price * 2
    console.log('laser drill cost', clickUpgrades[0].price)
    drawEverything()
  }
}

function buyAirblastDrill() {
  if (minerals >= clickUpgrades[1].price) {
    minerals -= clickUpgrades[1].price;
    clickUpgrades[1].quantity++;
    console.log('buying airblast drill')
    clickUpgrades[1].price = clickUpgrades[1].price * 2
    drawEverything()
  }
}


function buyMineralExtractor() {
  if (minerals >= automaticUpgrades[0].price) {
    minerals -= automaticUpgrades[0].price;
    automaticUpgrades[0].quantity++;
    console.log('buying mineral extractor')
    automaticUpgrades[0].price = automaticUpgrades[0].price * 2
    drawEverything()
  }
}

function buyThoriumReactor() {
  if (minerals >= automaticUpgrades[1].price) {
    minerals -= automaticUpgrades[1].price;
    automaticUpgrades[1].quantity++;
    console.log('buying thorium reactor')
    automaticUpgrades[1].price = automaticUpgrades[1].price * 2
    drawEverything()
  }
}



setInterval(autoMine, 3000)
// const DMX = require('dmx')

// const dmx = new DMX();
// //const universe = dmx.addUniverse('demo', 'artnet', '2.0.0.1');
// const artnet = dmx.registerDriver('demo', 'artnet');
// const universe1 = dmx.addUniverse('demo', artnet, 1);
// const universe2 = dmx.addUniverse('demo', artnet, 2);

const WebSocket = require('ws');
const LiveOSC = require('liveosc');
const DMX = require('dmx');

const dmx = new DMX();
const A = dmx.animation;
//const wss = new WebSocket.Server({ port: 8080 })
// var universe = dmx.addUniverse('demo', 'enttec-usb-dmx-pro', '/dev/cu.usbserial-6AVNHXS8')
// var universe = dmx.addUniverse('demo', 'enttec-open-usb-dmx', '/dev/cu.usbserial-6AVNHXS8')
//const universe = dmx.addUniverse('demoArt', 'artnet', '2.0.0.2', {universe: 0})
const base = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0,
  21: 0,
  22: 0,
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  27: 0,
  28: 0,
  29: 0,
  30: 0,
  31: 0,
  32: 0,
  33: 0,
  34: 0,
  35: 0,
  36: 0,
  37: 0,
  38: 0,
  39: 0,
  40: 0,
  41: 0,
  42: 0,
  43: 0,
  44: 0,
  45: 0,
  46: 0,
  47: 0,
  48: 0,
  49: 0,
  50: 0,
  51: 0,
  52: 0,
  53: 0,
  54: 0,
  55: 0,
  56: 0,
  57: 0,
  58: 0,
  59: 0,
  60: 0,
  61: 0,
  62: 0,
  63: 0,
  64: 0,
  65: 0,
  66: 0,
  67: 0,
  68: 0,
  69: 0,
  70: 0,
  71: 0,
  72: 0,
  73: 0,
  74: 0,
  75: 0,
  76: 0,
  77: 0,
  78: 0,
  79: 0,
  80: 0,
  81: 0,
  82: 0,
  83: 0,
  84: 0,
  85: 0,
  86: 0,
  87: 0,
  88: 0,
  89: 0,
  90: 0,
  91: 0,
  92: 0,
  93: 0,
  94: 0,
  95: 0,
  96: 0,
  97: 0,
  98: 0,
  99: 0,
  100: 0,
  101: 0,
  102: 0,
  103: 0,
  104: 0,
  105: 0,
  106: 0,
  107: 0,
  108: 0,
  109: 0,
  110: 0,
  111: 0,
  112: 0,
  113: 0,
  114: 0,
  115: 0,
  116: 0,
  117: 0,
  118: 0,
  119: 0,
  120: 0,
}

const fullYellow = {
  1: 255,
  2: 255,
  3: 0,
  4: 255,
  5: 255,
  6: 0,
  7: 255,
  8: 255,
  9: 0,
  10: 255,
  11: 255,
  12: 0,
  13: 255,
  14: 255,
  15: 0,
  16: 255,
  17: 255,
  18: 0,
  19: 255,
  20: 255,
  21: 0,
  22: 255,
  23: 255,
  24: 0,
  25: 255,
  26: 255,
  27: 0,
  28: 255,
  29: 255,
  30: 0,
  31: 255,
  32: 255,
  33: 0,
  34: 255,
  35: 255,
  36: 0,
  37: 255,
  38: 255,
  39: 0,
  40: 255,
  41: 255,
  42: 0,
  43: 255,
  44: 255,
  45: 0,
  46: 255,
  47: 255,
  48: 0,
  49: 255,
  50: 255,
  51: 0,
  52: 255,
  53: 255,
  54: 0,
  55: 255,
  56: 255,
  57: 0,
  58: 255,
  59: 255,
  60: 0,
  61: 255,
  62: 255,
  63: 0,
  64: 255,
  65: 255,
  66: 0,
  67: 255,
  68: 255,
  69: 0,
  70: 255,
  71: 255,
  72: 0,
  73: 255,
  74: 255,
  75: 0,
  76: 255,
  77: 255,
  78: 0,
  79: 255,
  80: 255,
  81: 0,
  82: 255,
  83: 255,
  84: 0,
  85: 255,
  86: 255,
  87: 0,
  88: 255,
  89: 255,
  90: 0,
  91: 255,
  92: 255,
  93: 0,
  94: 255,
  95: 255,
  96: 0,
  97: 255,
  98: 255,
  99: 0,
  100: 255,
  101: 255,
  102: 0,
  103: 255,
  104: 255,
  105: 0,
  106: 255,
  107: 255,
  108: 0,
  109: 255,
  110: 255,
  111: 0,
  112: 255,
  113: 255,
  114: 0,
  115: 255,
  116: 255,
  117: 0,
  118: 255,
  119: 255,
  120: 0,
}

const getBase = () => {
  return JSON.parse(JSON.stringify(base))
}

const getLedBase = (index) => {
  const copied = Object.assign({}, base);
  Object.keys(copied).forEach((ele) => {

  })
}

//const universe = dmx.addUniverse('demo', 'null');
//const universe2 = dmx.addUniverse('demo', 'null');
const universe = dmx.addUniverse('aaa', 'artnet', '2.0.0.1', { universe: 0 })
const universe1 = dmx.addUniverse('aaa', 'artnet', '2.0.0.1', { universe: 1 })
// universe.update({ 1: 255, 4: 255, 7: 255, 10: 255, 13: 255, 16: 255, 19: 255, 22: 255, 25: 255, 28: 255, 31: 255, 34: 255, 37: 255, 40: 255, 43: 255, 46: 255, 49: 255, 52: 255, 55: 255, 58: 255 });
// universe.update({ 61: 255, 62: 255, 63: 255 });

// universe.update({ 16: 1, 17: 255 });
// universe.update({ 1: 255, 3: 120, 4: 230, 5: 30, 6: 110, 7: 255, 8: 10, 9: 255, 10: 255, 11: 0 });
let i = 1;

const rain = () => {
  const baseCopy = getBase();
  const index = i;
  const index2 = i + 1 <= 60 ? i + 1 : 1;
  const index3 = i + 2 <= 60 ? i + 2 : 2;
  baseCopy[index] = 255;
  baseCopy[index2] = 255;
  baseCopy[index3] = 255;
  universe.update(baseCopy)
  console.log(index, index2, index3)
  if (i < 58) {
    i = i + 3;
  } else {
    i = 1;
  }

}

const fadeToColor = () => {
  const a = 0;
  const b = 255;
  const duration = 2000;
  new A().add(a, duration).add(b, duration).run(universe, function () {
    warp(universe, channel, min, max, duration);
  });
}

// setInterval(() => {
//   rain()
// }, 100)


const animation = new DMX.Animation().add(base, 1000).delay(1000).add(fullYellow, 1000).runLoop(universe)
const animation2 = new DMX.Animation().add(base, 1200).delay(1000).add(fullYellow, 1200).runLoop(universe1)

// function greenWater(universe, channels, duration) {
//   const colors = [
//     [160, 230, 20],
//     [255, 255, 0],
//     [110, 255, 10],
//   ];

//   for (const c in channels) {
//     const r = Math.floor((Math.random() * colors.length));
//     const u = {};

//     for (let i = 0; i < 3; i++) {
//       u[channels[c] + i] = colors[r][i];
//     }
//     console.log(channels)
//     new A().add(u, duration).run(universe);
//   }
//   setTimeout(function () { greenWater(universe, channels, duration); }, duration * 2);
// }

// function warp(universe, channel, min, max, duration) {
//   const a = {}, b = {};

//   a[channel] = min;
//   b[channel] = max;
//   new A().add(a, duration).add(b, duration).run(universe, function () {
//     warp(universe, channel, min, max, duration);
//   });
// }

// warp(universe, 1, 200, 220, 360);
// warp(universe, 1 + 15, 200, 255, 240);
// warp(universe, 1 + 15, 200, 255, 240);
//greenWater(universe, [3, 6, 9], 4000);
//greenWater(universe, [3 + 15, 6 + 15, 9 + 15], 4000);

// const liveosc = new LiveOSC({ debug: true, liveHost: '192.168.0.10', host: '192.168.0.11' });

// //console.log(liveosc)
// liveosc.song.on('ready', function () {
//   console.log(liveosc.song)
//   // start the song playing
//   liveosc.song.play();
// });

//activateLed()




// Create new dmxnet instance
// var dmxnet = new dmxlib.dmxnet({
//   verbose: 1,
// });
// // Create new Sender instance
// var sender = dmxnet.newSender({
//   ip: '255.255.255.255',
//   subnet: 0,
//   universe: 5,
//   net: 0,
// });
// // Set Channels
// sender.setChannel(511, 255);
// sender.setChannel(255, 128);
// // Fill Channels
// sender.fillChannels(1, 20, 250);
// // Prepare Channel 26+27 after 10 s and send next secondly
// setTimeout(function () {
//   sender.prepChannel(25, 255);
//   sender.prepChannel(26, 255);
//   sender.transmit();
// }, 10000);
// // Stop sender after 5 seconds
// setTimeout(function () {
//   sender.stop();
// }, 50000);
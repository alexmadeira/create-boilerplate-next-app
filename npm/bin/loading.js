const _progress = require('cli-progress');
const _colors = require('ansi-colors');


async function loading (name, updateRate,callback=()=>{}) {
  const b1 = new _progress.Bar({
    format: `${name} | ${_colors.blue('{bar}')} | {percentage}% `,
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
  });

  b1.start(100, 0);

  let value = 0;
  const speedData = [];

  const timer = setInterval(function(){
      value++;
      speedData.push(Math.random()*2+5);
      const currentSpeedData = speedData.splice(-10);
      b1.update(value);
      if (value >= b1.getTotal()){
          clearInterval(timer);
          b1.stop();
          callback()
      }
  }, updateRate);

}
module.exports = loading;

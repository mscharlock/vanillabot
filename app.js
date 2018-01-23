'use strict';
//requiring in commander, which will make it easier to slice/dice args
const program = require('commander');

//coming up with a test array for drones to see if I can get information to return
const categories = ['drones', 'gaming', 'phones', 'computers', 'home', 'wearable'];
const dronesArr = ['droneA', 'droneB', 'droneC'];
const dronePrices = [14, 99, 200];

console.log('Please enter what you are interested in. Options include drones (-d), gaming (-g), & wearables (-w)');
//Options for our program
program
  .version('0.1.0')
  .option('-d, --drones', 'Explore what drones we have available')
  .option('-g, --gaming', 'Explore what gaming systems we have available')
  .option('-w, --wearable', 'Explore which wearables we have available')
  .option('-o, --one', 'Ok, you have chosen ' + dronesArr[0])
  .option('-t, --two', 'Ok, you have chosen ' + dronesArr[1])
  .option('-th, --three', 'Ok, you have chosen ' + dronesArr[2])
  .parse(process.argv);

if (program.drones) console.log('Ok, getting info on drones. We have ' +dronesArr[0] +' or ' +dronesArr[1] + ' or ' + dronesArr[2] + '. To choose one, use one(-o), two(-t), or three(-th) for your choice');
if (program.gaming) console.log('Ok, getting info on gaming');
if (program.wearable) console.log('Ok, getting info on wearables');

if (program.one) console.log('Ok, you have chosen ' + dronesArr[0] + '. It costs ' +dronePrices[0] + ' per month');
if (program.two) console.log('Ok, you have chosen ' + dronesArr[1]);
if (program.three) console.log('Ok, you have chosen ' + dronesArr[2]);


//Possible solution for nested commands
// program.on('--help', function(){
//   console.log('  Examples:');
//   console.log('');
//   console.log('    $ custom-help --help');
//   console.log('    $ custom-help -h');
//   console.log('');
// });
//
// program.parse(process.argv);



//using the demo from commander: https://github.com/tj/commander.js
// vanillaBot
//   .version('0.1.0')
//   .option('-d, --drones', 'Explore which drones we have available')
//   .option('-g, --gaming', 'Explore which gaming and VR systems are available')
//   .option('-w, --wearable', 'Explore our wearable options!')
//   .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//   .parse(process.argv);
//
// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);


//from: https://medium.com/@thatisuday/developing-node-js-cli-app-module-package-with-command-line-flags-and-sub-commands-using-commander-de0af87be7c1
// #!/usr/bin/env node
// const program = require('commander');
// program
// .option('-p, --pepper', 'adds pepper to the pizza')
// .option('-c, --cheese', 'adds pepper to the pizza')
// .option('-h, --hot-level <hot>', 'select hotness level of pizza', 'not that')
// .parse(process.argv);
//
// if(program.pepper)   console.log('Your pizza contains pepper');
// if(program.cheese)   console.log('Your pizza contains cheese');
// if(program.hotLevel) console.log('You pizza is ' + program.hotLevel + ' hot');


// an idea about using readline in node
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//
//   rl.close();
// });

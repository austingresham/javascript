/* const color = 'blue';
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';  //Change the value of stars (global)
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());  //stars is Sirius
console.log(stars);  //stars is still Sirius

const colorOfSky = () => {
  return color; //blue
};

console.log(colorOfSky()); //blue  */


// 
//  Another Example
//
const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    console.log(lightWaves);
  };
  visibleLightWaves();
  //console.log(lightWaves);  //Error

//
//  asdfsdf
//
  const colorOfSky = () => {
      const dusk = true;
      let color = 'blue';
      if (dusk) {
          let color = 'pink';
          console.log(color);  //pink
      }
      console.log(color); //blue
      };

      colorOfSky();
      //console.log(color);  //undefined\

const cloudCount = () => {
    let i = 2;
    console.log(i);
    for (let i = 0; i < 20; i++) {
        console.log(i);
    }
};
cloudCount();
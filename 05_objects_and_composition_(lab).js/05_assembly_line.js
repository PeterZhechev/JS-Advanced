function createAssemblyLine() {

    const result = {

        hasClima(car) {

            car.adjustTemp = function adjust() {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }

                return car.temp;
            }

            car.temp = 21;
            car.tempSettings = 21;
        },

        hasAudio(car) {
            car.currentTrack = {
                name: null,
                artist: null,
            };

            car.nowPlaying = () => {
                console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
            }

        },

        hasParktronic(car) {

            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!");
                }
            }
        }
    }

    return result;
}




const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

// assemblyLine.hasClima(myCar);
// console.log(myCar.temp);
// myCar.tempSettings = 18;
// myCar.adjustTemp();
// console.log(myCar.temp);

// assemblyLine.hasAudio(myCar);
// myCar.currentTrack = {
//     name: 'Never Gonna Give You Up',
//     artist: 'Rick Astley'
// };
// myCar.nowPlaying();


assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

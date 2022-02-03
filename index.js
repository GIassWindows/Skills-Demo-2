var north = ["Armagn", "Newry", "Belfast"]
var south = ["Cork", "Galway", "Kerry", "Donegal", "Waterford", "Naas", "Dublin"]
class hotel{
    constructor(direction){
        this.direction = direction
    }
    northSouth(){
        if (this.direction == "North"||this.direction == "north"){
            var i, len, text
            for(i = 0, len = north.length, text = "";i<len; i++){
                text += "We have hotels in " + north[i] + "." + "\n";
            }
            return text;
        }else if (this.direction == "South"||this.direction == "south"){
            var i, len, text
            for(i = 0, len = south.length, text = "";i<len; i++){
                text += "We have hotels in " + south[i] + "." + "\n";
            }
            return text;
        }else {
            return this.direction + " is not a valid direction."
        }

    }
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Where do you want to go? ', name => {
    var hotels = new hotel(name)
    console.log(hotels.northSouth())
    readline.close();
  });

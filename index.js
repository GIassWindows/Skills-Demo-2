var readline = require('readline-sync');
var north = ["Armagn", "Newry", "Belfast"] // counties in the north
var south = ["Cork", "Galway", "Kerry", "Donegal", "Waterford", "Naas", "Dublin"] // counties in the south
class hotel{
    constructor(direction){
        this.direction = direction // variable for north or south
    }
    northSouth(){
        if (this.direction == "North"||this.direction == "north"){ // if this.direction is North or north
            var i, len, text // variables for the loop
            for(i = 0, len = north.length, text = "";i<len; i++){
                text += "We have hotels in " + north[i] + "." + "\n";
            } // for every time len is greater than i(0), loop the text until len is no longer greater than i
            return text; // prints the text after looping
        }else if (this.direction == "South"||this.direction == "south"){ // if this.direction is South or south
            var i, len, text
            for(i = 0, len = south.length, text = "";i<len; i++){
                text += "We have hotels in " + south[i] + "." + "\n";
            } // for every time len is greater than i(0), loop the text until len is no longer greater than i
            return text; // prints the text after looping
        }else {
            return this.direction + " is not a valid direction." /* if this.direction is neither North, north, South, or south,  
            prints that it's not a valid location */
        }

    }
}



var direction = readline.question('Where do you want to go? ')
var hotels = new hotel(direction)
console.log(hotels.northSouth())


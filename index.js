var readline = require('readline-sync'); // requires the module readline-sync
var north = ["Armagn", "Newry", "Belfast"] // counties in the north
var south = ["Cork", "Galway", "Kerry", "Donegal", "Waterford", "Naas", "Dublin"] // counties in the south
class hotel{
    constructor(direction){
        this.direction = direction // variable for north or south
    }
    static allHotels(){
        var northAndSouth = north.concat(south); // combines the north and south lists
        var i, len, text // variables for the loop
        for(i = 0, len = north.length + south.length, text = "";i<len; i++){
            text += "We have hotels in " + northAndSouth[i] + "." + "\n"; 
        } // for every time len is greater than i(0), loop the text until len is no longer greater than i
        return text; // prints the text after looping
    } 

    static northSouth(direction){
        if (direction == "North"||direction == "north"){ // if direction is North or north
            var i, len, text // variables for the loop
            for(i = 0, len = north.length, text = "";i<len; i++){
                text += "We have a hotel in " + north[i] + "." + "\n";
            } // for every time len is greater than i(0), loop the text until len is no longer greater than i
            return text; // prints the text after looping
        }else if (direction == "South"||direction == "south"){ // if direction is South or south
            var i, len, text
            for(i = 0, len = south.length, text = "";i<len; i++){
                text += "We have a hotel in " + south[i] + "." + "\n";
            } // for every time len is greater than i(0), loop until len is no longer greater than i
            return text; // prints the text after looping
        }else {
            return direction + " is not a valid direction." /* if this.direction is neither North, north, South, or south,  
            prints that it's not a valid location */
        }
    }
}

var direction = readline.question('Where do you want to go? ') // using the module, readline asks the question in the terminal
console.log(hotel.allHotels()) // outputs the allHotels function
console.log(hotel.northSouth(direction)) // outputs the northSouth function

//  I know arrow functions but I want to follow this NODEJS class soo....

const square = x => x*x;

console.log(square(3));


// arrow functions dont bind this 
const event = {
    name: 'partytime',
    guestlist: ['reid', 'bob', 'taco'],
    printGuestList() { 
        console.log("guest list for " + this.name);
        this.guestlist.forEach(e => {
            console.log(e, ' is attending ' + this.name);
        });
    }
}

event.printGuestList();
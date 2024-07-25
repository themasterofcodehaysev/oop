class Door{
    doorType : string;
    doorColor : string;
    constructor(doorType : string,doorColor : string){
        this.doorType = doorType;
        this.doorColor = doorColor;
    }
}

class Room{
    roomName : string;
    doors: Door[] = [];
    constructor(roomName : string){
        this.roomName = roomName;
    }
    setDoor(door:Door){
        this.doors.push(door)
    }
}

class House{
    owner:string;
    doors: Door[] = [];
    rooms: Room[] = [];
    constructor(owner:string){
       
        this.owner = owner;
        
    }
    setDoor(door:Door){
        this.doors.push(door)
    };
    setRoom(room:Room){
        this.rooms.push(room);
    }

}

let door1 = new Door('frontDoor','white');
let door2 = new Door('BackDoor','white');
let room1 = new Room('guestRoom');
let room2 = new Room('bedRoom');
let houses = new House('nana')
houses.setDoor(door1);
houses.setRoom(room1);
houses.setRoom(room2);
room1.setDoor(door1);
console.log(houses);
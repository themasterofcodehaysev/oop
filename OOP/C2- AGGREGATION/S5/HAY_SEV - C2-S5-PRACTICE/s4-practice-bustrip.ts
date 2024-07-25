class Trip{
    busName: string;
    departure: Address;
    departureDateTime:DateTime;
    arrival: Address;
    arrivalDateTime: DateTime;
    customers:Customer[] = [];
    constructor(busName: string,departure: Address,departureDateTime:DateTime,arrival: Address,arrivalDateTime: DateTime,customers:Customer[] = []){
        this.busName = busName;
        this.departure = departure;
        this.departureDateTime = departureDateTime;
        this.arrival = arrival;
        this.arrivalDateTime = arrivalDateTime;
        this.customers = customers; 
    }

}


class Address{
    city:string;
    country:string;
    constructor(city:string,country:string){
        this.city = city;
        this.country = country;
    }

}

class Customer{
    firstName: string;
    lastName: string;
    address: Address | null;
    constructor(firstName: string,lastName: string,address: Address | null = null){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
}

class DateTime{
    date:string;
    time:string;
    constructor(date:string,time:string){
        this.date = date;
        this.time = time;
    }
}

//Customers
let RonanAddress = new Address('Paris','French');
let Ronan = new Customer('Ronan','Ogor',RonanAddress);

let Him = new Customer('Him','Hey')

let SovandaAdress = new Address('Phnom Penh','Cambodia')
let Sovanda = new Customer('Sovanda','Chib',SovandaAdress);

//Departures
let KompotTripDeparture = new Address('Phnom Penh','Cambodia');
let KompotTripDepartureDate = new DateTime('11-4-2024','7:00 AM');

let SiemreapTripDeparture = new Address('Phnom Penh','Cambodia');
let SiemreapTripDepartureDate = new DateTime('11-4-2024','7:00 AM');

//Arrivals
let KompotTripArrival = new Address('Kompot','Cambodia');
let KompotTripArrivalDate = new DateTime('11-4-2024','11:00 AM');

let SiemreapTripArrival = new Address('Siem Reap','Cambodia');
let SiemreapTripArrivalDate = new DateTime('11-4-2024','4:00 PM');

//Trip
let KompotTrip = new Trip('Kaka bus',KompotTripDeparture,KompotTripDepartureDate,KompotTripArrival,KompotTripArrivalDate,[Him,Sovanda]);
let SiemreapTrip = new Trip('LYHOR Express',SiemreapTripDeparture,SiemreapTripDepartureDate,SiemreapTripArrival,SiemreapTripArrivalDate,[Him,Sovanda,Ronan]);
console.log(KompotTrip);
console.log(SiemreapTrip);

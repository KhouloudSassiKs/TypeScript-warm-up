let droneVelocity: number = 48000; // Speed of a drone in km/h
let linkToBaseActive: boolean = false; // If communication with base is active
let droneIdentifier: string = "SkyRunner-X"; // Name of the drone
let pendingSignal: undefined; // Undefined signal

console.log(typeof droneVelocity);
console.log(typeof linkToBaseActive);
console.log(typeof droneIdentifier);
console.log(typeof pendingSignal);

let habitatReady: boolean = false; // Boolean type

// Verify the type
console.log(typeof habitatReady); // Should print: boolean

let pilotAlias: string = "Nova"; // A string for the pilot's moniker
let hasEquipment: boolean = false; // A correctly typed boolean
let surveyedSectors: number = 42; // A correctly typed number

console.log(typeof pilotAlias); // "string"
console.log(typeof hasEquipment); // "boolean"
console.log(typeof surveyedSectors); // "number"

const ancientNameOfJupiter: string = "Zeus"; // Jupiter is also known as "Zeus"
let totalBelts: number = 4; // Number of main belts
let jupiterHasSurface: boolean = false; // Jupiter does not have a solid surface

// Type checks
console.log(typeof ancientNameOfJupiter);  // string
console.log(typeof totalBelts);            // number
console.log(typeof jupiterHasSurface);     // boolean

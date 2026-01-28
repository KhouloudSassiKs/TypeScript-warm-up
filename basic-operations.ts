// Distances between countries (in kilometers)
const distanceGermanyToFrance: number = 450;
const distanceGermanyToSpain: number = 1800;

// Determine whether Spain is farther from Germany than France
let isSpainFarther: boolean = distanceGermanyToSpain > distanceGermanyToFrance;

console.log('Is Spain farther from Germany than France?', isSpainFarther);

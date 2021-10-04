const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
]

console.log('All superhero names:', superheroes.map(x => x.name))
console.log('Light superheroes (< 190 pounds):', superheroes.filter(x => x.weight < 190))
console.log('Two-hundred pound superheroes:', 
    superheroes
        .filter(x => x.weight == 200)
        .map(x => x.name))
console.log('First appearances:', superheroes.map(x => x.first_appearance))

const DCHeroes = superheroes.filter(x => x.publisher === "DC Comics")
const MarvelHeroes = superheroes.filter(x => x.publisher === "Marvel Comics")

console.log('Combined weight of DC Comics heroes:', DCHeroes.map(x => parseInt(x.weight)).reduce((acc, weight) => {return acc + weight}, 0))
console.log('Combined weight of Marvel Comics heroes:', 
    MarvelHeroes
        .map(x => x.weight !== 'unknown' ? parseInt(x.weight) : 0)
        .reduce((acc, weight) => acc + weight, 0))


// console.log('Heaviest superhero:', Math.max(superheroes.map(x => { if (Number.isInteger(parseInt(x.weight))) {return parseInt(x.weight); } else {return 0} })))


let allWeights = superheroes.map(x => { if (Number.isInteger(parseInt(x.weight))) {return parseInt(x.weight); } else {return 0} })
// const findHeaviest = function(array) {
//     var heaviest = 0;
//     for (weight of array) {
//         if (weight > heaviest) {
//             heaviest = weight
//         }
//     }
//     return heaviest;
// }
// console.log(findHeaviest(allWeights))

console.log('The heaviest superhero of all weighs:', allWeights.reduce((heaviest, current) => {
        if (current > heaviest) {
            return current
        } else {
            return heaviest
        }
}))
console.log('His/her name is:', superheroes.filter(x => parseInt(x.weight) === allWeights.reduce((heaviest, current) => {
    if (current > heaviest) {
        return current
    } else {
        return heaviest
    }
})))
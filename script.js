// Create Array of all drivers and constructors
const constructors = [
    {
        id: 1,
        name: 'Mercedes',
        value: 34.5
    },
    {
        id: 2,
        name: 'Red Bull',
        value: 32.5
    },
    {
        id: 3,
        name: 'Ferrari',
        value: 25.0
    },
    {
        id: 4,
        name: 'McLaren',
        value: 18.5
    },
    {
        id: 5,
        name: 'Alpine',
        value: 14.0
    },
    {
        id: 6,
        name: 'Aston Martin',
        value: 11.5
    },
    {
        id: 7,
        name: 'AlphaTauri',
        value: 10.5
    },
    {
        id: 8,
        name: 'Alfa Romeo',
        value: 8.0
    },
    {
        id: 9,
        name: 'Williams',
        value: 7.0
    },
    {
        id: 10,
        name: 'Haas',
        value: 6.0
    },
];

const drivers = [
    {
        id: 1,
        name: "Lewis Hamilton",
        value: 31.0
    },
    {
        id: 2,
        name: "Max Verstappen",
        value: 30.5
    },
    {
        id: 3,
        name: "George Russell",
        value: 24.0
    },
    {
        id: 4,
        name: "Charles Leclerc",
        value: 18.0
    },
    {
        id: 5,
        name: "Sergio Perez",
        value: 17.5
    },
    {
        id: 6,
        name: "Carlos Sainz",
        value: 17.0
    },
    {
        id: 7,
        name: "Lando Norris",
        value: 16.0
    },
    {
        id: 8,
        name: "Daniel Ricciardo",
        value: 14.5
    },
    {
        id: 9,
        name: "Pierre Gasly",
        value: 13.5
    },
    {
        id: 10,
        name: "Fernando Alonso",
        value: 12.5
    },
    {
        id: 11,
        name: "Esteban Ocon",
        value: 12.0
    },
    {
        id: 12,
        name: "Sebastian Vettel",
        value: 11.5
    },
    {
        id: 13,
        name: "Lance Stroll",
        value: 9.5
    },
    {
        id: 14,
        name: "Valtteri Bottas",
        value: 9.0
    },
    {
        id: 15,
        name: "Yuki Tsunoda",
        value: 8.5
    },
    {
        id: 16,
        name: "Zhou Guanyu",
        value: 8.0
    },
    {
        id: 17,
        name: "Alex Albon",
        value: 7.5
    },
    {
        id: 18,
        name: "Nicholas Latifi",
        value: 7.0
    },
    {
        id: 19,
        name: "Mick Schumacher",
        value: 6.5
    },
    {
        id: 20,
        name: "Kevin Magnussen",
        value: 5.5
    }
];

function createTeams() {
    //loop through all possible team combinations
    for (let i = 0; i < 1; i++) {
        //initialize globalTeams
        let globalTeams = [];

        //loops through each constructor
        for (let cCounter = 0; cCounter < constructors.length; cCounter++) {
            //initialize team array
            let team = [constructors[cCounter]];
            //initialize team sum to the value of the current constructor
            let teamSum = constructors[cCounter].value;

            //loop through each driver
            for (let dCounter = 0; dCounter < drivers.length; dCounter++) {
                if (teamSum + drivers[dCounter].value < 100 && team.length < 5) {
                    teamSum = teamSum + drivers[dCounter].value;
                    team.push(drivers[dCounter])
                } else if (team.length >= 5) {
                    globalTeams.push(team)
                }
            }
        } console.log(globalTeams);
    }
}

const button = document.querySelector('#button');

button.addEventListener('click', createTeams())

//For each constructor, loop through the drivers, and add their value to the total team sum.
//Add them to an array if the value is <= $100M.
//Once the array hits 5 drivers, exit the loop and repeat the process. 
//Have validation checks to make sure the same combination of drivers/constructor can't be made






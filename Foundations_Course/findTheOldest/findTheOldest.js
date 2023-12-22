const findTheOldest = function (persons) {
    let greatestAge = persons.reduce((greatest, person) => {

        if (greatest.yearOfDeath === undefined) {
            greatest.yearOfDeath = new Date().getFullYear();
        };

        greatest = greatest.yearOfDeath - greatest.yearOfBirth < person.yearOfDeath - person.yearOfBirth ? person : greatest

        return greatest

    });

    return greatestAge;
};

// Do not edit below this line
module.exports = findTheOldest;

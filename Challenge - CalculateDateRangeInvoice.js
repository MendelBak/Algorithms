const month = '2019-01';
const activeSubscription = {
    id: 1,
    customerId: 1,
    monthlyPriceInDollars: 4, // price per active user per month
};

const users = [
    {
        id: 1,
        name: 'Employee #1',
        customerId: 1,

        // when this user started
        activatedOn: new Date('2018-11-04'),

        // last day to bill for user
        // should bill up to and including this date
        // since user had some access on this date
        deactivatedOn: new Date('2019-01-10'),
    },
    // {
    //     id: 2,
    //     name: 'Employee #2',
    //     customerId: 1,

    //     // when this user started
    //     activatedOn: new Date('2018-12-04'),

    //     // hasn't been deactivated yet
    //     deactivatedOn: null,
    // },
];

/*******************
 * Helper functions *
 *******************/

/**
     Takes a Date instance and returns a Date which is the first day
    of that month. For example:

    firstDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 1)

    Input type: Date
    Output type: Date
    **/
function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
     Takes a Date object and returns a Date which is the last day
    of that month. For example:

    lastDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 28)

    Input type: Date
    Output type: Date
    **/
function lastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
     Takes a Date object and returns a Date which is the next day.
    For example:

    nextDay(new Date(2019, 2, 7))  // => new Date(2019, 2, 8)
    nextDay(new Date(2019, 2, 28)) // => new Date(2019, 3, 1)

    Input type: Date
    Output type: Date
    **/
function nextDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}

function calculateMonthlyCost(
    numOfDaysInMonth,
    activeDaysInMonth,
    monthlyRate,
) {
    console.log(
        `calculateMonthlyCost ~ numOfDaysInMonth, activeDaysInMonth, monthlyRate`,
        numOfDaysInMonth,
        activeDaysInMonth,
        monthlyRate,
    );
    console.log(
        'monthly charge',
        (monthlyRate / numOfDaysInMonth) * activeDaysInMonth,
    );
    return (monthlyRate / numOfDaysInMonth) * activeDaysInMonth;
}

function billFor(month, activeSubscription, users) {
    if (!activeSubscription || !users[0]) return 0;

    let totalRate = 0;

    users.forEach((user) => {
        let trackedDate = user.activatedOn;
        let lastDayWorkedInMonth = user.activatedOn.getDate();
        let nextDateToSet = null;

        while (
            trackedDate < user.deactivatedOn ||
            (user.deactivatedOn === null && trackedDate <= new Date())
        ) {
            if (
                user.deactivatedOn.getFullYear() ===
                    trackedDate.getFullYear() &&
                user.deactivatedOn.getMonth() === trackedDate.getMonth() &&
                lastDayOfMonth(trackedDate).getDate() >=
                    user.deactivatedOn.getDate()
            ) {
                lastDayWorkedInMonth = user.deactivatedOn.getDate();
                nextDateToSet = user.deactivatedOn;
            } else {
                lastDayWorkedInMonth = lastDayOfMonth(trackedDate).getDate();
                nextDateToSet = nextDay(lastDayOfMonth(trackedDate)); // Sets trackedDate to 1st of the next month
            }

            totalRate += calculateMonthlyCost(
                lastDayOfMonth(trackedDate).getDate(),
                lastDayWorkedInMonth - (trackedDate.getDate() - 1),
                activeSubscription.monthlyPriceInDollars,
            );
            console.log('--------------');

            trackedDate = nextDateToSet;
            console.log(`trackedDate`, trackedDate);
        }
    });

    console.log('total rate', totalRate);
}
// function billFor(month, activeSubscription, users) {
//     if (!activeSubscription || !users[0]) return 0;

//     let totalRate = 0;
//     let currentMonthActiveDays = 0;

//     users.forEach((user) => {
//         let currentMonth = user.activatedOn.getMonth(); // months are base 0 (0 === Jan)
//         let counterDate = user.activatedOn;
//         let lastTrackedMonth = user.activatedOn.getMonth();
//         let lastTrackedDay = user.activatedOn.getDate();
//         let currentMonthActiveDays = 0;

//         while (
//             counterDate <= user.deactivatedOn ||
//             (user.deactivatedOn === null && counterDate <= new Date())
//         ) {
//             console.log(currentMonth, counterDate);
//             currentMonthActiveDays++;

//             if (counterDate.getMonth() > lastTrackedMonth) {
//                 const test = new Date(counterDate.getTime());

//                 totalRate += calculateMonthlyCost(
//                     lastTrackedDay,
//                     currentMonthActiveDays,
//                     activeSubscription.monthlyPriceInDollars,
//                 );
//                 lastTrackedMonth = counterDate.getMonth();
//                 currentMonthActiveDays = 0;
//             }

//             lastTrackedDay = counterDate.getDate();
//             counterDate.setDate(counterDate.getDate() + 1);
//         }
//     });
// }

billFor(month, activeSubscription, users);

// CurrentMonthActiveDays = 0
// ForLoop ending on holderVar === nextDay month/day (|| new Date() - should handle for deactivatedOn nulls)
// Each loop, if that day matches the current month, add +1 to CurrentMonthActiveDays.
// Separate function that calculates monthly rate
// End of monthly loop - calculate numOfDaysInMonth / monthlyRate (or 30 for simplicity) * CurrentMonthActiveDays and store it in function-level holder variable.
// Continue on with next month.

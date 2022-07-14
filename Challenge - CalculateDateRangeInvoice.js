const month = '2019-01';
const activeSubscription = {
    id: 1,
    customerId: 1,
    monthlyPriceInDollars: 4, // price per active user per month
};

// I first tried building this function using a while loop that would traverse each day of the month, iterating a counter variable, and checking to see when the next month had been reached in order to run the calculateMonthlyCost() function at that point. This was a less ideal implementation due to its unnecessary traversal of each day.
// My current solution, vastly improves performance since it only checks the first and last days of each month, essentially ignoring the days in between.

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
    {
        id: 2,
        name: 'Employee #2',
        customerId: 1,

        // when this user started
        activatedOn: new Date('2022-06-17'),

        // hasn't been deactivated yet
        deactivatedOn: null,
    },
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
        `Days In Month: ${numOfDaysInMonth}. Active Days: ${activeDaysInMonth}. Monthly Rate: ${monthlyRate}. Daily Rate: ${
            monthlyRate / numOfDaysInMonth
        }`,
    );
    console.log(
        'Bill for Month: ',
        (monthlyRate / numOfDaysInMonth) * activeDaysInMonth,
    );
    return (monthlyRate / numOfDaysInMonth) * activeDaysInMonth;
}

function billFor(month, activeSubscription, users) {
    if (!activeSubscription || !users[0]) return 0;

    let totalRate = 0;

    users.forEach((user) => {
        if (!user.activatedOn) {
            return;
        }
        let trackedDate = user.activatedOn;
        let lastDayWorkedInMonth = user.activatedOn.getDate();
        let nextDateToSet = null;
        const todayDate = new Date();

        while (
            user.deactivatedOn === null
                ? trackedDate < todayDate
                : trackedDate < user.deactivatedOn
        ) {
            if (user.deactivatedOn === null) {
                if (!nextDateToSet) {
                    nextDateToSet = nextDay(lastDayOfMonth(user.activatedOn)); // Need to set a value so later on it doesn't hit the null
                } else {
                    nextDateToSet = nextDay(lastDayOfMonth(trackedDate)); // Sets trackedDate to 1st of the next month
                }

                lastDayWorkedInMonth = lastDayOfMonth(trackedDate).getDate();

                if (
                    trackedDate.getFullYear() === todayDate.getFullYear() &&
                    trackedDate.getMonth() === todayDate.getMonth()
                ) {
                    lastDayWorkedInMonth = todayDate.getDate();
                    nextDateToSet = nextDay(lastDayOfMonth(todayDate));
                }
            } else if (
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
                nextDateToSet = nextDay(lastDayOfMonth(trackedDate));
            }

            totalRate += calculateMonthlyCost(
                lastDayOfMonth(trackedDate).getDate(),
                lastDayWorkedInMonth - (trackedDate.getDate() - 1),
                activeSubscription.monthlyPriceInDollars,
            );

            trackedDate = nextDateToSet;
            console.log('--------------');
        }
        console.log('############');
        console.log('User total rate: ', user.name, totalRate);
        console.log('############');
    });
    return Math.round(totalRate * 100) / 100;
}

billFor(month, activeSubscription, users);

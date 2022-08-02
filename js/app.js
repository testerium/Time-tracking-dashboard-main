// DANE Z PLIKU JSON //
let data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
];

const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

// Przypisanie funkcji dla daily
daily.addEventListener('click', function (e) {
    changeToDaily();
});


// FUNKCJA OBSŁUGUJĄCA DAILY
function changeToDaily() {
    data.forEach(element => {
        let name = element.title.toLowerCase().replace(/\s/g, '');

        let currentTime = element.timeframes.daily.current;
        let previousTime = element.timeframes.daily.previous;

        let box = document.getElementById(name)
        let currentTimeContainer = box.querySelector('.time h3')
        let previousTimeContainer = box.querySelector('.time span')

        currentTimeContainer.textContent = currentTime + 'hrs';
        previousTimeContainer.textContent = 'Yesterday - ' + previousTime + 'hrs';

    })
};

// Przypisanie funkcji dla daily
weekly.addEventListener('click', function (e) {
    changeToWeekly();
});


// FUNKCJA OBSŁUGUJĄCA WEEKLY
function changeToWeekly() {
    data.forEach(element => {
        let name = element.title.toLowerCase().replace(/\s/g, '');

        let currentTime = element.timeframes.weekly.current;
        let previousTime = element.timeframes.weekly.previous;

        let box = document.getElementById(name)
        let currentTimeContainer = box.querySelector('.time h3')
        let previousTimeContainer = box.querySelector('.time span')

        currentTimeContainer.textContent = currentTime + 'hrs';
        previousTimeContainer.textContent = 'Last week - ' + previousTime + 'hrs';


    })
};

// Przypisanie funkcji dla daily
monthly.addEventListener('click', function (e) {
    changeToMonthly();
});

// FUNKCJA OBSŁUGUJĄCA MONTHLY
function changeToMonthly() {
    data.forEach(element => {
        let name = element.title.toLowerCase().replace(/\s/g, '');

        let currentTime = element.timeframes.monthly.current;
        let previousTime = element.timeframes.monthly.previous;

        let box = document.getElementById(name)
        let currentTimeContainer = box.querySelector('.time h3')
        let previousTimeContainer = box.querySelector('.time span')

        currentTimeContainer.textContent = currentTime + 'hrs';
        previousTimeContainer.textContent = 'Last month - ' + previousTime + 'hrs';
    })
};

// Ustawienie startowe
changeToWeekly()


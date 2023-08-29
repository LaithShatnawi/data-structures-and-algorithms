const movies = [
    {
        title: "A Breaking Bad",
        year: 2008,
        genre: ['action', 'comedy', 'drama']
    },
    {
        title: "The Avengers",
        year: 2014,
        genre: ['action', 'comedy', 'drama']
    },
    {
        title: "Rush Hour",
        year: 1997,
        genre: ['action', 'comedy', 'drama']
    }
]
function sorted(movies) {
    return movies.sort((a, b) => {
        return a.year - b.year
    })
}
// console.log(sorted(movies))

function sortAlpha(movies) {
    return movies.sort((a, b) => {
        const regEx = /^(The+\s|A+\s|An+\s)/g;
        const str1 = regEx.test(a.title);
        const str2 = regEx.test(b.title);
        let str1Arr = [];
        let str2Arr = [];
        if (str1) {
            str1Arr = a.title.split(" ");
        }
        if (str2) {
            str2Arr = b.title.split(" ");
        }
        if (str1Arr[1] > str2Arr[1] || str1Arr[1] > b.title || a.title > str2Arr[1]) {
            return 1
        } else {
            return -1
        }
    })
}
console.log(sortAlpha(movies))

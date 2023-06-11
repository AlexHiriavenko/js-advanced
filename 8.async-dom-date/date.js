1; // Check if a value is a valid date string (e.g. 2022-09-01, September 1, 2022, 9/1/2022):

const str1 = "2022-09-01",
    str2 = "September 1",
    str3 = "2022",
    str4 = "9/1/2022";

const isValidDate = (...str) => str.map((el) => !isNaN(Date.parse(el)));

console.log(isValidDate(str1, str2, str3, str4));

// Date from timestamp

const timeStamp = Date.parse(str4);

const toDate = (timeStamp) => new Date(timeStamp);

console.log(toDate(timeStamp));

// date in eu format from valid string

const newStr4 = toDate(timeStamp);

function toEuDateStr(dateStr) {
    if (isValidDate(dateStr)[0]) {
        const dateObj = new Date(dateStr);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const day = String(dateObj.getDate()).padStart(2, "0");
        return `${day}-${month}-${year}`; // 01-09-2022
    } else {
        return "date is not valid";
    }
}

console.log(toEuDateStr(newStr4));

//Get the difference between two dates

const dateDiff = (date1, date2) => Math.abs(new Date(date1) - new Date(date2));

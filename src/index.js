module.exports = function toReadable (number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    if (number === 0) return "zero";
    if (number < 20) return ones[number];

    if (number < 100)
        return (
            tens[parseInt(number / 10)] +
            (number % 10 !== 0 ? " " : "") +
            ones[number % 10]
        );

    const numString = number.toString();

    if (numString[1] === "0" && numString[2] === "0")
        return ones[numString[0]] + " hundred";
    else
        return (
            ones[numString[0]] +
            " hundred " +
            toReadable(parseInt(numString[1] + numString[2]))
        );
}

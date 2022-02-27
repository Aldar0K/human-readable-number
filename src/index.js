module.exports = function toReadable (number) {

    const ones = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ]

    const tens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ]

    const hundreds = [
        '',
        'one hundred',
        'two hundred',
        'three hundred',
        'four hundred',
        'five hundred',
        'six hundred',
        'seven hundred',
        'eight hundred',
        'nine hundred',
    ]

    if (number === 0) {
        return 'zero'
    }

    if (number.toString().length === 1) {
        return ones[number]
    }

    if (number.toString().length === 2) {
        if (number >= 1 && number <= 19) {
            return ones[number]
        }

        else {
            let one = (number.toString()).slice(0, 1);
            let ten = (number.toString()).slice(1, 2);

            if (ten === '0') {
                return tens[one]
            }
            else {
                return `${tens[one]} ${ones[ten]}`
            }
        } 
    }

    if (number.toString().length === 3) {
        let one = (number.toString()).slice(0, 1);
        let ten = (number.toString()).slice(1, 2);
        let hundred = (number.toString()).slice(2, 3);

        if (hundred === '0' && ten === '0') {
            return hundreds[one]
        }
        if (hundred === '0') {
            if (ten === '1') {
                return `${hundreds[one]} ten`
            }

            return `${hundreds[one]} ${tens[ten]}`
        }
        if (ten === '0') {
            return `${hundreds[one]} ${ones[hundred]}`
        }
        if (Number(ten + hundred) <= 19) {
            return `${hundreds[one]} ${ones[Number(ten + hundred)]}`
        }
        else {
            return `${hundreds[one]} ${tens[ten]} ${ones[hundred]}`
        }
    }
}

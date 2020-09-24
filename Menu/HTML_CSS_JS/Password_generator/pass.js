const charecterAmountRange = document.getElementById('charecterAmountRange')
const charecterAmountNumber = document.getElementById('charecterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPER_CHAR_CODES = arrayFromLowToHigh(65,90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57)
const LOWER_CHAR_CODES = arrayFromLowToHigh(97,122)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)
    ).concat(
         arrayFromLowToHigh(91,96)
    ).concat(
        arrayFromLowToHigh(123,126)
    )

charecterAmountNumber.addEventListener('input',syncCharecterAmount)
charecterAmountRange.addEventListener('input',syncCharecterAmount)

form.addEventListener('submit' , e => {
    e.preventDefault()
    const charecterAmount = charecterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(charecterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(charecterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWER_CHAR_CODES
    if(includeUppercase) charCodes = charCodes.concat(UPPER_CHAR_CODES)
    if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    const passwordCharecters = []
    for(let i = 0; i < charecterAmount; i++) {
        const charecterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharecters.push(String.fromCharCode(charecterCode))
    }
    return passwordCharecters.join('')
}

function arrayFromLowToHigh(low, high){
    const array = []
    for (let i=low; i<=high; i++){
        array.push(i);
    }
    return array
}

function syncCharecterAmount(e) {
    const value = e.target.value
    charecterAmountNumber.value = value
    charecterAmountRange.value = value
}
const
    PasswordOutput = document.getElementById('PasswordOutput'),
    newPassBtn = document.getElementById('newPassBtn'),
    passwordLength = document.getElementById('passwordLength'),
    showPasswordLength = document.getElementById('showPasswordLength'),
    uppercase = document.getElementById('uppercase'),
    lowercase = document.getElementById('lowercase'),
    number = document.getElementById('number'),
    symbol = document.getElementById('symbol')

document.addEventListener("DOMContentLoaded", function () {
    function updateProgress() {
        const progressPercent = ((passwordLength.value - passwordLength.min) / (passwordLength.max - passwordLength.min)) * 100 + "%"

        passwordLength.style.setProperty("--progress-percent", progressPercent)
        showPasswordLength.innerText = passwordLength.value
    }

    passwordLength.oninput = () => updateProgress()
    updateProgress()
})

let chararr = []
const
    upp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    low = 'abcdefghijklmnopqrstuvwxyz',
    num = '1234567890',
    sym = '!@#$%^&*()'

uppercase.checked ? addtoArr(upp) : removefromArr(upp)
lowercase.checked ? addtoArr(low) : removefromArr(low)
number.checked ? addtoArr(num) : removefromArr(num)
symbol.checked ? addtoArr(sym) : removefromArr(sym)

uppercase.oninput = () => uppercase.checked ? addtoArr(upp) : removefromArr(upp)
lowercase.oninput = () => lowercase.checked ? addtoArr(low) : removefromArr(low)
number.oninput = () => number.checked ? addtoArr(num) : removefromArr(num)
symbol.oninput = () => symbol.checked ? addtoArr(sym) : removefromArr(sym)

newPassBtn.onclick = randomPassword
randomPassword()

function addtoArr(char) {
    char.split('').map(item => chararr.push(item))
}

function removefromArr(char) {
    chararr = chararr.filter(item => !char.includes(item))
}

function randomPassword() {
    let password = ''
    for (let i = 0; i < passwordLength.value; i++) {
        const rn = Math.floor(Math.random() * chararr.length)
        password += chararr[rn]
    }
    PasswordOutput.value = password
}

PasswordOutput.onclick = () => {
    PasswordOutput.select()
    PasswordOutput.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(PasswordOutput.value)
}
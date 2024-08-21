const maleOption = document.getElementById('male')
const femaleOption = document.getElementById('female')
const genderInput = document.getElementById('gender')
const heightInput = document.getElementById('height')
const weightInput = document.getElementById('weight')
const submitBtn = document.getElementById('submit')
const result = document.getElementById('result')

function genderChange(gender){
    genderInput.value = gender
    if (gender === 'male'){
        maleOption.classList.add('active')
        femaleOption.classList.remove('active')
    } else {
        maleOption.classList.remove('active')
        femaleOption.classList.add('active')
    }
    console.log(genderInput.value)
}

maleOption.addEventListener('click', () => {
    genderChange('male')
})
femaleOption.addEventListener('click', () => {
    genderChange('female')
})

function calculateBMI(){
    const bmi = Math.round(10000 * weightInput.value / (heightInput.value * heightInput.value))

    const gender = genderInput.value
    if(gender === 'female'){
        if(bmi < 20){
            result.innerHTML = `BMI Kamu ${bmi}, Berat Badan kamu kurang!`
        }else if(bmi > 20 && bmi <= 25.9){
            result.innerHTML = `BMI Kamu ${bmi}, berat badan kamu ideal`
        }else{
            result.innerHTML = `BMI Kamu ${bmi}, Berat badan kamu berlebih`
        }
    }else{
        if(bmi < 18.5){
            result.innerHTML = `BMI Kamu ${bmi}, Berat Badan kamu kurang!`
        }else if(bmi > 18.5 && bmi <= 24.9){
            result.innerHTML = `BMI Kamu ${bmi}, berat badan kamu ideal`
        }else{
            result.innerHTML = `BMI Kamu ${bmi}, Berat badan kamu berlebih`
        }
    }
}


submitBtn.addEventListener('click', (event) => {
    event.preventDefault()

    if (!genderInput.value || !heightInput.value || !weightInput.value ){
        alert('Isi semua data terlebih dahulu!')

        return  
    }

    calculateBMI()
})
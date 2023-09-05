function checkAge(){
    const ageField =document.getElementById('age')
    const ageText =ageField.value;
    const errorTag =document.getElementById('error')
    try{
        const age =parseInt(ageText)
        if(isNaN(age)){
            // console.log('age not found', age , ageText)
            throw "please enter a number"
        }else if(age<18){
            throw "baccha kaccha not allowed"
        }else if(age>30){
            throw "murubbu not allowed"
        }
        errorTag.innerHTML= '';
    }
    catch(err){
        console.log('error:', err)
        errorTag.innerHTML='something wrong'
    }
    finally{
        console.log('all done inside try catch')
    }
    console.log(111)
}
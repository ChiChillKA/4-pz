console.log("Задание 1")
let pass = prompt("Введите пароль:" )
if ( pass.length > 4 && ( pass.includes('_') || pass.includes('-') ) )
{
    alert("Сильный пароль")
    }
    else{alert("Слабый пароль")}
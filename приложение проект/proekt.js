let time = document.querySelector('.time')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let msec = document.querySelector('.msec')

let user_prompt = prompt("введите секунды или миллесекнуды")



if (user_prompt == "секунды"){ setInterval(()=> {        //вызывает функцию регулярно с заданным интервалом, чтоб остановить нужен clearInterval()
    let data = new Date(); // new Date это текущая дата и время
    time.textContent = data.getHours()
    min.textContent = data.getMinutes()  //textContent предназначено для работы с текстовым контентом элемента
    sec.textContent = data.getSeconds()
    msec.textContent = data.getMilliseconds()
},1000) 
    
}
else {
    setInterval(()=> {        //вызывает функцию регулярно с заданным интервалом, чтоб остановить нужен clearInterval()
        let data = new Date(); // new Date это текущая дата и время
        time.textContent = data.getHours()
        min.textContent = data.getMinutes()  //textContent предназначено для работы с текстовым контентом элемента
        sec.textContent = data.getSeconds()
        msec.textContent = data.getMilliseconds()
    },1) 
}


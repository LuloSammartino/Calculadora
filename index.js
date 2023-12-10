const display = document.getElementById("display")
const botones = document.querySelectorAll(".boton")

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent

        if(botonApretado === "C"){
            display.textContent = 0
            return;
        }

        if(botonApretado === "←"){
            if(display.textContent.length === 1 || display.textContent === "¡Error!") {
                display.textContent = "0"
                return;
            }else {
                display.textContent = display.textContent.slice(0, -1)
              return;
            }
        }

        
        if(botonApretado === "="){
            try{
                display.textContent = eval(display.textContent)
                
            } catch{
                display.textContent = "¡Error!"
                
            }
            return;
        }
        
        if(display.textContent === "0" || display.textContent === "¡Error!"){
            display.textContent = botonApretado
        } else {
            display.textContent += botonApretado 

        }

    })
})
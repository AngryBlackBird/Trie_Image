console.log("ok")



let espace = document.querySelectorAll(".espace")
let terre = document.querySelectorAll(".terre")
let mer = document.querySelectorAll(".mer")


function controleTextTerre(){
    console.log("ok terre")
   
    for( let i=0; i<espace.length ; i++){
        terre[i].style.display = "block"
    }

    for( let i=0; i<espace.length ; i++){
        espace[i].style.display = "none"
    }
    for( let i=0; i<mer.length ; i++){
        mer[i].style.display = "none"
    }
}

function controleTextMer(){
    console.log("ok mer")
    
    for( let i=0; i<espace.length ; i++){
        terre[i].style.display = "none"
    }

    for( let i=0; i<espace.length ; i++){
        espace[i].style.display = "none"
    }
    for( let i=0; i<mer.length ; i++){
        mer[i].style.display = "block"
    }
}

function controleTextEspace(){
    console.log("ok ciel")
    for( let i=0; i<espace.length ; i++){
        terre[i].style.display = "none"
    }

    for( let i=0; i<espace.length ; i++){
        espace[i].style.display = "block"
    }
    for( let i=0; i<mer.length ; i++){
        mer[i].style.display = "none"
    }
}

function controleTextAll(){
    console.log("ok all")
    for( let i=0; i<espace.length ; i++){
        terre[i].style.display = "block"
    }

    for( let i=0; i<espace.length ; i++){
        espace[i].style.display = "block"
    }
    for( let i=0; i<mer.length ; i++){
        mer[i].style.display = "block"
    }
}
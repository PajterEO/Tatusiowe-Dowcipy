const dowcipy = [
    "Tato, jestem głodny.</br> Cześć głodny, jestem tata",
    "Dlaczego kobiety żyją dłużej niż meżczyzni? Bo nie mają żon",
    "Dlaczego żonaci mężczyźni umierają przed żonami? Bo chcą!",
    "Jaka jest różnica między rumem a rumakiem? Taka sama jak miedzy koniem a koniakiem",
    "Dzień ojca jest wtedy kiedy mamy nie ma w domu",
]

const zart = document.getElementById("dowcip")

function wygeneruj(){
    const nowyDowcip = Math.floor(Math.random()*dowcipy.length)

    console.log(nowyDowcip)
    zart.innerHTML = dowcipy[nowyDowcip]
}
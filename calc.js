let obecne_dzialanie = ''
const polewyniku = document.getElementById("wynik")

const znaki = ["/", "*", "+", "-"]

function wyczyscpole()
{
    obecne_dzialanie = ''
    polewyniku.value = obecne_dzialanie
}

function policzwynik()
{
    try
    {
        const wynik = eval(obecne_dzialanie)
        obecne_dzialanie = wynik
        polewyniku.value = obecne_dzialanie
        
        return
    }
    catch(error)
    {
        polewyniku.value=`error`
        obecne_dzialanie=''
    }
}


function gdyklikniecie(event)
{
if (event.target.tagName === "BUTTON")
    {   
        const tekst_przycisku = event.target.textContent
        

        if(tekst_przycisku === "C")
        {
            wyczyscpole()
            return
        }
        if(tekst_przycisku === "=")
        {   
            policzwynik()
            return
        }

       
        else
        {
            obecne_dzialanie += tekst_przycisku
            polewyniku.value = obecne_dzialanie
        }
        
        
    }

}

document.getElementById("przyciski").addEventListener("click",gdyklikniecie)
const celciusfield= document.querySelector(".celcius");
const degree= document.querySelector(".degree");
const button= document.querySelector(".btn");
const temptype= document.querySelector(".temptype");


button.addEventListener("click",(e)=>{
     converttocelcius();
})

function converttocelcius(){
    let inputvalue=degree.value;

    if(temptype.value==="faranite")
    {
        const faranitetocelcius=(inputvalue-32)*(5/9);
        celciusfield.innerHTML=`${faranitetocelcius.toFixed(3)} &deg C`;
    }
    else if(temptype.value==="kelvin")
    {
        const kelvintocelcius=(inputvalue-273.15);
        celciusfield.innerHTML=`${kelvintocelcius.toFixed(3)} &deg C`;

    }
}
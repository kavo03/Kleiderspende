

function Zeige(){
    const AbgabeFormular = document.getElementById("AbgabeAuswahl");
    const AbholungFormular = document.getElementById("AbholungAuswahl");
    const LabelAbgabe = document.getElementById("LabelAbgabe");
    const LabelAbholung = document.getElementById("LabelAbholung");
    const checkBoxAbgabe = document.getElementById("Abgabe");
    const checkBoxAbholung = document.getElementById("Abholung");
    const Info1 = document.getElementById("Info1");
    const Info2 = document.getElementById("Info2");

    if(checkBoxAbgabe.checked==true){
        AbgabeFormular.style.display = "block";
        AbholungFormular.style.display = "none";
        LabelAbholung.style.opacity = 0.3;
        LabelAbgabe.style.opacity = 1;
        Info1.style.display = "block";
        Info2.style.display = "none";
       
    } else if (checkBoxAbholung.checked==true ){
        AbholungFormular.style.display = "block";
        AbgabeFormular.style.display = "none";
        LabelAbgabe.style.opacity = 0.3;
        LabelAbholung.style.opacity = 1;
        Info1.style.display = "none";
        Info2.style.display = "block";

    }
}


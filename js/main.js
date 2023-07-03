
const btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click", function () {
        
        const passengerName = document.getElementById("name").value;
        console.log("Generazione nome del passeggero:", passengerName);

        const km = document.getElementById("km").value;
        console.log("Generazione dei km da percorrere:", km);

        const age = document.getElementById("age").value;
        console.log("Generazione dell'età:", age);

        const ticketPrice = (km * 0.21);
        let discount;
        let discountType;
        console.log("Prezzo del biglietto pieno:", ticketPrice);

        // calcolo sconto per età
        if (age == "minorenne") {
            discount = ticketPrice * 0.2; 
            discountType = "Biglietto minorenni";
        } else if (age =="over65") {
            discount = ticketPrice * 0.4;
            discountType = "Biglietto over 65";
        } else {
            discount = 0;
            discountType = "Biglietto standard";
        }

        // calcolo del prezzo finale
        const finalPrice = ticketPrice - discount;
        console.log("Prezzo dello sconto:", discount);
        console.log("Prezzo del biglietto finale:", finalPrice);
        console.log("Tipo di sconto:", discountType);

        // creazione dati biglietto 
        document.getElementById("passenger").innerHTML = passengerName;
        document.getElementById("discount").innerHTML = discountType;
        document.getElementById("ticket-price").innerHTML = finalPrice.toFixed (2) + "€";

        const wagonNumber = Math.floor(Math.random() * 9) + 1;
        console.log("Creazione numero di carrozza:", wagonNumber);
        document.getElementById("wagon").innerHTML = wagonNumber;

        const cpCode = Math.floor(Math.random() * 10000) + 90000;
        console.log("Creazione codice CP:", cpCode);
        document.getElementById("cp-code").innerHTML = cpCode;
        
        // apparizione biglietto
        document.getElementById("ticket-container").style.visibility="visible";
    })

// evento al click del pulsante Annulla

const btnCancel = document.getElementById("cancel");
btnCancel.addEventListener("click", function () {
        // sparizione parametri ticket
        document.getElementById("name").value = "";
        document.getElementById("km").value = "";
        document.getElementById("age").value = "";

        document.getElementById("passenger").innerHTML = "";
        document.getElementById("discount").innerHTML = "";
        document.getElementById("ticket-price").innerHTML = "";
        document.getElementById("wagon").innerHTML = "";
        document.getElementById("cp-code").innerHTML = "";

        // sparizione biglietto
        document.getElementById("ticket-container").style.visibility="hidden";
    })








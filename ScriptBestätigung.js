
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const vollDiv = document.getElementById("Zusammenfassung");
    const Überschrift = document.getElementById("Überschrift");

    const art1 = urlParams.get("ArtDerKleidung1");
    const gebiet1 = urlParams.get("Krisengebiet1");

    const art2 = urlParams.get("ArtDerKleidung2");
    const gebiet2 = urlParams.get("Krisengebiet2");
    
    const Name = urlParams.get("Name");
    const Vorname = urlParams.get("Vorname");
    const Email = urlParams.get("EMail");
    const Strasse = urlParams.get("Strasse");
    const Hausnummer = urlParams.get("Hausnummer");
    const Plz = urlParams.get("Postleitzahl");

    const Jetzt = new Date();
    const Datum = Jetzt.toLocaleDateString();
    const Zeit = Jetzt.toLocaleTimeString();

    if (art1 && gebiet1) {
        Überschrift.innerHTML=`<h2><strong>Vielen Dank für Ihre Spende!</strong></h2>`;
        vollDiv.innerHTML = `
            <p><strong>Art der Kleidung:</strong> ${art1}</p>
            <p><strong>Krisengebiet:</strong> ${gebiet1}</p>
            <p><strong>Datum:</strong> ${Datum} <strong>Uhrzeit:</strong> ${Zeit}</p>
        `;  
    } else if (art2 && gebiet2) {
         Überschrift.innerHTML=`<h2><strong>Vielen Dank für Ihre Spende!</strong></h2>`;
        vollDiv.innerHTML = `
            <p><strong>Art der Kleidung:</strong> ${art2}</p>
            <p><strong>Krisengebiet:</strong> ${gebiet2}</p>
            <p><strong>Name:</strong> ${Vorname} ${Name}</p>
            <p><strong>Adresse:</strong> ${Strasse} ${Hausnummer}, ${Plz}</p>
            <p><strong>E-Mail:</strong> ${Email}</p>
            <p><strong>Datum:</strong> ${Datum} <strong>Uhrzeit:</strong> ${Zeit}</p>
        `;
    } else {
        vollDiv.innerHTML = `<p>Es wurden keine Daten übermittelt.</p>`;
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`)
                    .then(response => response.json())
                    .then(data => {
                        const Stadt = data.address.city || data.address.town || data.address.village || "Unbekannte Stadt";
                        vollDiv.innerHTML += `<p><strong>Standort (Stadt):</strong> ${Stadt} </p>`;
                        
                    })
                    .catch(error => {
                        vollDiv.innerHTML += "<p><strong>Standort:</strong> Konnte nicht bestimmt werden.</p>";
                    });
            },
            function (error) {
                vollDiv.innerHTML += "<p><strong>Standort:</strong> Zugriff wurde verweigert oder ist nicht verfügbar.</p>";
            }
        );
    } else {
        vollDiv.innerHTML += "<strong>Standort:</strong> Wird von diesem Browser nicht unterstützt.</p>";
    }    
}

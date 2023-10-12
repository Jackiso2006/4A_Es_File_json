var _btnCarica, _txtFile;

window.onload = function () {
    _btnCarica = document.querySelector("button");
    _txtFile = document.querySelector("input[type=file");

    _btnCarica.addEventListener("click", leggiFile.bind(_txtFile, "Prova")); // mettessi le parentesi diventerebbe una chiamata sincrona e la eseguirebbe subito
    // .bind() ci serve per passare dei parametri
    // il primo parametro ci permette di settare il contesto: 
    // il contesto è chi manda in esecuzione il codice in cui mi trovo, in generale è window ma se sono in un evento è chi ha generato (es è il bottone se sono su un onclick)
    // i successivi parametri sono quelli attuali che verranno inviati alla funzione
};

function leggiFile(testo) {
    // senza bind this è uguale al bottone, con .bind(this) viene inviato il contesto 
    console.log(testo);
    console.log(this); // visualizzo il contesto

    console.log(this.value); // mi stampa il valore del contesto selezionato
    // nel nostro caso il contesto è l'input file quindi ci stampa il contenuto del file selezionato


    let reader = new FileReader();
    reader.onload = fineLettura;
    reader.readAsDataURL(this.files[0]);
    /**
     * FileReader ha funzioni asincrone perchè sono esecuzioni lunghe
     * nel nostro caso viene eseguito readAsDataURL e quando finirà partirà l'onload che richiama fineLettura
     * fineLettura è il nostro callback, verrà richiamata a fine lettura
     */

    function fineLettura(e) {
        let datiFile = e.target.result;
        let stringa = datiFile.split(",")[1];
        alert(atob(stringa));
    }
}
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

function leggiFile() {
    // senza bind this è uguale al bottone, con .bind(this) viene inviato il contesto 
    console.log(this); // visualizzo il contesto
    console.log(this.value); // mi stampa il valore del contesto selezionato
    // nel nostro caso il contesto è l'input file quindi ci stampa il contenuto del file selezionato


    let reader = new FileReader();
    reader.onload = fineLettura;
    reader.readAsDataURL(this.files[0]); // chiamata sincrona che contiene una chiamata asincrona al suo interno
    /**
     * FileReader ha funzioni asincrone perchè sono esecuzioni lunghe
     * nel nostro caso viene eseguito readAsDataURL e quando finirà partirà l'onload che richiama fineLettura
     * fineLettura è il nostro callback, verrà richiamata a fine lettura dal flusso secondario
     * callback: parametro inviato ad una funzione asincrona che mi permette di risincronizzare i flussi quando è terminata la funzione
     * 
     */

}

function fineLettura(e) {
    // entro qua quando è stato richiamato il callback

    /**
     * il parametro e contiene:
     * srcElement => ci dice chi ha scatenato l'evento
     * target/result => ha il contenuto del contesto
     */
    let datiFile = e.target.result; // prendo i dati
    let stringa = datiFile.split(",")[1]; // separo dati e intestazione
    alert(atob(stringa));
    // atob() decodifica da base64, formato in cui sono salvati i dati dell'intestazione
}
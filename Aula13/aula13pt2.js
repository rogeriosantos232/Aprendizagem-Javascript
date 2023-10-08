let energia=60
let clima="sol"


if(energia < 50 && clima=="sol") {
    console.log("Não vou a praia pois está nublado")
}
    else if(energia < 90 && clima=="sol"){
    console.log("Vou a praia")
}
    else if(energia > 90 && clima=="sol"){
        console.log("Não vou a praia pois o sol está muito forte")
}
    else if(energia > 0 || clima=="chuva") {
    console.log("Não vou a praia pois está chovendo")
}
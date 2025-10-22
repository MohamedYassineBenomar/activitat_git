// Final fixed version
function convertirCF() {
  const CF = prompt("A què vols convertir C/F?");
  const temp = parseFloat(prompt("Temperatura:"));
  if (Number.isNaN(temp)) {
    console.log("Entrada no vàlida.");
    return;
  }
  if (CF && CF.toUpperCase() === "C") {
    const cent = (temp - 32) * (5 / 9);
    console.log(`${temp}F -> ${cent}C`);
  } else if (CF && CF.toUpperCase() === "F") {
    const fh = (9 / 5) * temp + 32;
    console.log(`${temp}C -> ${fh}F`);
  } else {
    console.log("Només es pot C o F");
  }
}


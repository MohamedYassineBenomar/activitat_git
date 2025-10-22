// Version from your "teammate"
function convertirCF() {
  let CF = prompt("A què vols convertir C/F?");
  let temp = parseFloat(prompt("Temperatura:"));
  if (CF.toUpperCase() == "C") {
    let cent = (temp - 32) / (5 / 9);
    console.log(`${temp}F -> ${cent}C`);
  } else if (CF.toUpperCase() == "F") {
    let fh = (5 / 9) * temp + 32;
    console.log(`${temp}C -> ${fh}F`);
  } else {
    console.log("Només es pot C o F");
  }
}

Then open GitHub → click Compare & pull request → take Screenshot 10.

function log(message) {
  console.log(message);
  const logElement = document.getElementById('console-log');
  logElement.innerHTML += "<p>${message}</p>";
}

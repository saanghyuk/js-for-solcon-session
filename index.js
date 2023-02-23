async function fetchAndPrint() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.text();
    console.log(result);
  } catch (e) {
    alert("Sorry");
  } finally {
    alert("No Sorry");
  }
}

fetchAndPrint();

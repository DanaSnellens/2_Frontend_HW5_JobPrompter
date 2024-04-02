import {departments} from "./database.mjs";
//OPDRACHT 1A//
console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers.");

//OPDRACHT 1B
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description);

//OPDRACHT 1C
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers.");

//OPDRACHT 1D
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + departments.sales.jobs[1].description);



//OPDRACHT 2A
/*
const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");
console.log(userInput)
//OPDRACHT 2B & 2C
switch (userInput) {
    case "marketing":
        console.log("Je koos " + userInput + ". " + departments.marketing.description);
        break;
    case "sales":
        console.log("Je koos " + userInput + ". " + departments.sales.description);
        break;
    case "customer-service":
        console.log("Je koos " + userInput + ". " + departments["customer-service"].description);
        break;
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen")
}
*/


//OPDRACHT 3A
const userInput = prompt("Je koos voor marketing. Over welke functie wil je meer weten? Voer een getal" +
    " tussen de 0 en 4 in. \r 0: " + departments.marketing.jobs[0].title + "\r 1: " + departments.marketing.jobs[1].title
     +  "\r 2: " + departments.marketing.jobs[2].title + " \r 3: "+ departments.marketing.jobs[3].title +
    " \r 4: "+ departments.marketing.jobs[4].title);


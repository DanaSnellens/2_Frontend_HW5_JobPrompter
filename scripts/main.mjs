import {departments} from "./database.mjs";
/*//OPDRACHT 1A//
console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers.");

//OPDRACHT 1B
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description);

//OPDRACHT 1C
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers.");

//OPDRACHT 1D
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + departments.sales.jobs[1].description);*/



//OPDRACHT 2A
/*const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");
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
}*/


/*
//OPDRACHT 3A
const userInput = prompt("Je koos voor marketing. Over welke functie wil je meer weten? Voer een getal" +
    " tussen de 0 en 4 in. \r 0: " + departments.marketing.jobs[0].title + "\r 1: " + departments.marketing.jobs[1].title
     +  "\r 2: " + departments.marketing.jobs[2].title + " \r 3: "+ departments.marketing.jobs[3].title +
    " \r 4: "+ departments.marketing.jobs[4].title);

//OPDRACHT 3B & 3C
switch (userInput) {
    case "0":
        console.log("Je koos " + departments.marketing.jobs[0].title + ". Een uitdagende rol! " + departments.marketing.jobs[0].description);
        break;
    case "1":
        console.log("Je koos " + departments.marketing.jobs[1].title + ". Een uitdagende rol! " + departments.marketing.jobs[1].description);
        break;
    case "2":
        console.log("Je koos " + departments.marketing.jobs[2].title + ". Een uitdagende rol! " + departments.marketing.jobs[2].description);
        break;
    case "3":
        console.log("Je koos " + departments.marketing.jobs[3].title + ". Een uitdagende rol! " + departments.marketing.jobs[3].description);
        break;
    case "4":
        console.log("Je koos " + departments.marketing.jobs[4].title + ". Een uitdagende rol! " + departments.marketing.jobs[4].description);
        break;
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen");
}*/

//OPDRACHT 4
// const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");

// TODO: Ik krijg de else niet werkend. Bij verkeerde invoer --> Foutmelding: Uncaught TypeError: Cannot read properties of undefined (reading 'numberOfEmployees) at main.mjs:68:118
/*if (userInput === "marketing" || "sales" || "customer-service"){
    console.log(userInput + " is een leuke afdeling om te werken. Er werken op dit moment " + departments[userInput].numberOfEmployees + " mensen.");
} else {
    console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen")
}*/

// TODO: nummer 4 geeft een foutmelding, omdat er alleen bij martketing 5 functies zijn en bij de andere afdelingen maar 4. Oplossen met een if-statement?
/*console.log("Je koos " + userInput +". Over welke functie wil je meer weten? \r 0: " + departments[userInput].jobs[0].title + "\r 1: " + departments[userInput].jobs[1].title
+  "\r 2: " + departments[userInput].jobs[2].title + " \r 3: "+ departments[userInput].jobs[3].title + " \r 4: "+ departments[userInput].jobs[4].title);*/

//OPDRACHT 5
/*
document.getElementById('role-title').textContent = 'Dana!';
document.getElementById('department-description').textContent = 'Patat!';*/

let userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");

userInput = (userInput[0].toUpperCase() + userInput.slice(1));

document.getElementById('role-title').textContent = userInput ;

let userInputTwo = prompt("Je koos " + userInput +". Over welke functie wil je meer weten? \r 0: " + departments[userInput].jobs[0].title + "\r 1: " + departments[userInput].jobs[1].title
+  "\r 2: " + departments[userInput].jobs[2].title + " \r 3: "+ departments[userInput].jobs[3].title /*+ " \r 4: "+ departments[userInput].jobs[4].title*/);
document.getElementById('department-description').textContent = departments[userInput].jobs[userInputTwo].description;


var goButton = document.getElementById("goButton");
var textField = document.getElementById("textField");
var textString = document.getElementById("words");

var globalString = "";

function printHello()
{
    var nameString = "Hello World Title";
    var priceInt = 191;
    console.log(nameString + "\t" + priceInt);
    return "Bam!";
}


function Book()
{
    var name;
    var author;
    var date;

}

function buttonRename()
{
    globalString = textString.textContent;
    textString.textContent = globalString + globalString + "\n";
    //goButton.onclick = otherFunction();

    goButton.addEventListener("click", otherFunction());
    console.log("Button Rename..." + textString.textContent);
    goButton.innerText = "Please!";
}

function otherFunction()
{
    console.log("Event fired!");
    textString.textContent = "Here instead!";
}

function main()
{
    var book1 = new Book();
    book1.name = "Andrew";
    book1.author = "Maguire";
    book1.year = 2002;

    textField.innerHTML = book1.name;
    
    //console.log(goButton.onclick);
}

main();
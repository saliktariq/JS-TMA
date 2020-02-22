/**
 **  A small application that gets an ISBN number and manipulates that ISBN using string methods
 **  @author Salik Tariq
 **/

/**
 ** Function to iterate through a string and gets rid of any dashes,
 ** takes as an argument a variable isbn containing string variable.
 ** @return string  containing only integer digits of type string.
 **/

function cleanString(isbn) {
    let cleanStr = '';
    for (let i = 0; i < isbn.length; i++) {
        if (Number.isInteger(parseInt(isbn.charAt(i)))) {
            cleanStr += isbn.charAt(i);
        }
    }
    return cleanStr;

}

/**
 ** Function to get the length of the ISBN without hyphens.
 ** takes as an argument a variable isbn that contains the ISBN number
 ** @return number - length of ISBN.
 **/

function isbnLength(isbn) {
    return cleanString(isbn).length;
}

/**
 ** Function to get the ISBN check digit (The last character in the ISBN)
 ** takes as an argument a variable isbn that contains the ISBN number
 ** @return an digit containing the last character of ISBN.
 **/

function isbnCheck(isbn) {

    return (cleanString(isbn).charAt(cleanString(isbn).length - 1));
}

/**
 ** Function to get the registration group prefix of the ISBN (The first three characters)
 ** takes as an argument a variable isbn that contains the ISBN number
 ** @return the first three characters of ISBN.
 **/

function regPrefix(isbn) {
    let regGroup = "";
    for (let i = 0; i < 3; i++) {
        regGroup += cleanString(isbn).charAt(i);
    }
    return regGroup;
}

//** Code for the output of the application to the console **//

function task1() {

    /**
     ** @param string ISBN to contain the ISBN number
     **/
    let ISBN = "978-0-545-01022-1";

    console.log("The ISBN is " + ISBN);
    console.log("This is a " + isbnLength(ISBN) + " digit ISBN");
    console.log("The ISBN check digit is " + isbnCheck(ISBN));
    console.log("The ISBN registration group prefix is " + regPrefix(ISBN));
}

task1();
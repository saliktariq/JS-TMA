/**
 **  An application that calculates the ranking of a senior chess
 **  player based on his/her ranking points
 **  @author Salik Tariq
 **/

/**
 ** Function to determine the ranking of a player based on points.
 ** takes as an argument rankingPoints of type Number.
 ** @return a string containing ranking of the player.
 **/

function calculateRank(rankingPoints) {

    switch (true) {
        case (rankingPoints >= 1600 && rankingPoints <= 1799):
            return "Class B";
            break;

        case (rankingPoints >= 1800 && rankingPoints <= 1999):
            return "Class A";
            break;

        case (rankingPoints >= 2000 && rankingPoints <= 2199):
            return "Expert";
            break;

        case (rankingPoints >= 2200 && rankingPoints <= 2399):
            return "National master";
            break;

        case (rankingPoints >= 2400):
            return "Senior master";
            break;

    }

}

/**
 ** Function to display the ranking of a player based on points.
 ** takes as an argument rankingPoints of type Number.
 ** @return a string containing ranking of the player output to console.
 **/

function displayRanking(rankingPoints) {
    console.log(calculateRank(rankingPoints));
}

//** Function call for the example output **//

displayRanking(2400);
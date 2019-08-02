var start = true; // for the choice character from enemy section
var first; // first choise
var second; // enemy coice
var user; // character name
var userCount = 0; // for user health points
var userAttackPower = 0; // for user attack power
var userName; // for user full name
var enemyScore = 0; // for enemy health points
var enemyAttackPower = 0; // for enemy attack power
var enemyName; // for enemy full name
var count = 0; // if character win
var userUpper; // upper case of character full name
var winnerImage; // image of character if win
var enemyImage; // image of enemy
var userCounter = 0; // for increase Attack Power

var sound = new Audio("assets/sound/star.mp3"); // sound

// object with characters
var leia = {
    name: 'leia',
    image: '<img src="assets/images/leya.jpg" alt="Leia">',
    fullName: 'Princess Leia',
    healthPoints: 120,
    attackPower: 20,
    counterAttackPower: 20,
}

var chubaka = {
    name: 'chubaka',
    image: '<img src="assets/images/chubaka.jpg" alt="Chewbacca">',
    fullName: 'Chewbacca',
    healthPoints: 140,
    attackPower: 9,
    counterAttackPower: 9,
}

var rey = {
    name: 'rey',
    image: '<img src="assets/images/rey.png" alt="Rey">',
    fullName: 'Rey',
    healthPoints: 160,
    attackPower: 6,
    counterAttackPower: 6,
}

var dart = {
    name: 'dart',
    image: '<img src="assets/images/dart.jpg" alt="Dart">',
    fullName: 'Darth Vader',
    healthPoints: 180,
    attackPower: 3,
    counterAttackPower: 3,
}

// to show charachters when upload
$("#left").data("value", leia);
$('#nameLl').html(leia.fullName);
$('#imgL').html(leia.image);
$('#pL').text(leia.healthPoints);

$("#leftMiddle").data("value", chubaka);
$('#nameLm').text(chubaka.fullName);
$('#imgLm').html(chubaka.image);
$('#pLm').text(chubaka.healthPoints);

$("#rightMiddle").data("value", rey);
$('#nameRm').text(rey.fullName);
$('#imgRm').html(rey.image);
$('#pRm').text(rey.healthPoints);

$("#right").data("value", dart);
$('#nameRr').text(dart.fullName);
$('#imgR').html(dart.image);
$('#pR').text(dart.healthPoints);

$(document).ready(function() {

    // erase all characters from characters list
    function erase() {
        $('#left').animate({
                opacity: '0.1'
            },
            "slow", 'swing',
            function() {
                $('#left').hide();
            });
        $('#leftMiddle').animate({
                opacity: '0.1'
            },
            "slow", 'swing',
            function() {
                $('#leftMiddle').hide();
            });
        $('#rightMiddle').animate({
                opacity: '0.1'
            },
            "slow", 'swing',
            function() {
                $('#rightMiddle').hide();
            });
        $('#right').animate({
                opacity: '0.1'
            },
            "slow", 'swing',
            function() {
                $('#right').hide();
            });
    };

    // for choosing character
    $('.push').click(function() {

        erase();

        $('#enemy').animate({
                opacity: '1'
            }, "slow", 'swing',
            function() {
                $('#enemy').html("<h2>Enemies available to attack</h2>");
            });


        // choosing character for fight
        first = $(this).data('value');
        userCount = first.healthPoints;
        userAttackPower = first.attackPower;
        userName = first.fullName;
        user = first.name
        userCounter = first.counterAttackPower;
        winnerImage = first.image;

        $('.bottomLeft').animate({
                opacity: '1'
            },
            "slow", 'swing',
            function() {
                $('#nameL').html(userName);
                $('#newL').html(winnerImage);
                $('#scoreL').text(userCount);
            });


        // change enemies place

        if (user === "leia") {
            $('.top2').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $("#topLeft").data("value", chubaka);
                    $('#nameSecondL').html(chubaka.fullName);
                    $('#newSecondL').html(chubaka.image);
                    $('#scoreSecondL').text(chubaka.healthPoints);

                    $("#topMiddle").data("value", rey);
                    $('#nameSecondM').html(rey.fullName);
                    $('#newSecondM').html(rey.image);
                    $('#scoreSecondM').text(rey.healthPoints);

                    $("#topRight").data("value", dart);
                    $('#nameSecondR').html(dart.fullName);
                    $('#newSecondR').html(dart.image);
                    $('#scoreSecondR').text(dart.healthPoints);
                });

        } else if (user === "chubaka") {
            $('.top2').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $("#topLeft").data("value", leia);
                    $('#nameSecondL').html(leia.fullName);
                    $('#newSecondL').html(leia.image);
                    $('#scoreSecondL').text(leia.healthPoints);

                    $("#topMiddle").data("value", rey);
                    $('#nameSecondM').html(rey.fullName);
                    $('#newSecondM').html(rey.image);
                    $('#scoreSecondM').text(rey.healthPoints);

                    $("#topRight").data("value", dart);
                    $('#nameSecondR').html(dart.fullName);
                    $('#newSecondR').html(dart.image);
                    $('#scoreSecondR').text(dart.healthPoints);
                });

        } else if (user === "rey") {
            $('.top2').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $("#topLeft").data("value", leia);
                    $('#nameSecondL').html(leia.fullName);
                    $('#newSecondL').html(leia.image);
                    $('#scoreSecondL').text(leia.healthPoints);

                    $("#topMiddle").data("value", chubaka);
                    $('#nameSecondM').html(chubaka.fullName);
                    $('#newSecondM').html(chubaka.image);
                    $('#scoreSecondM').text(chubaka.healthPoints);

                    $("#topRight").data("value", dart);
                    $('#nameSecondR').html(dart.fullName);
                    $('#newSecondR').html(dart.image);
                    $('#scoreSecondR').text(dart.healthPoints);
                });

        } else if (user === "dart") {
            $('.top2').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $("#topLeft").data("value", leia);
                    $('#nameSecondL').html(leia.fullName);
                    $('#newSecondL').html(leia.image);
                    $('#scoreSecondL').text(leia.healthPoints);

                    $("#topMiddle").data("value", chubaka);
                    $('#nameSecondM').html(chubaka.fullName);
                    $('#newSecondM').html(chubaka.image);
                    $('#scoreSecondM').text(chubaka.healthPoints);

                    $("#topRight").data("value", rey);
                    $('#nameSecondR').html(rey.fullName);
                    $('#newSecondR').html(rey.image);
                    $('#scoreSecondR').text(rey.healthPoints);
                });
        }
    });


    // choosing enemy for fight
    $('.pushSecond').click(function() {
        $('#comment').animate({
                opacity: '1'
            },
            "slow", "swing",
            function() {
                $('#comment').text("");
            });


        if (start) {
            $('#vs').animate({
                    opacity: '1'
                },
                "slow", "swing",
                function() {
                    $('#vs').html('<img src="assets/images/vs1.png" alt="VS">');
                });

            second = $(this).data('value');
            enemyScore = second.healthPoints;
            enemyAttackPower = second.counterAttackPower;
            enemyName = second.fullName;
            enemyImage = second.image;

            $('.bottomRight').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameR').html(enemyName);
                    $('#newR').html(enemyImage);
                    $('#scoreR').text(enemyScore);

                });

            if ($(this).attr("id") === "topLeft") {
                $('#topLeft').animate({
                        opacity: '1'
                    },
                    "slow", "swing",
                    function() {
                        $('#topLeft').hide();
                    });
            } else if ($(this).attr("id") === "topMiddle") {
                $('#topMiddle').animate({
                        opacity: '1'
                    },
                    "slow", "swing",
                    function() {
                        $('#topMiddle').hide();
                    });
            } else if ($(this).attr("id") === "topRight") {
                $('#topRight').animate({
                        opacity: '1'
                    },
                    "slow", "swing",
                    function() {
                        $('#topRight').hide();
                    });
            }

        }

        // create button attack
        $('.buttonGameStart').animate({
                opacity: '1'
            },
            "slow", 'swing',
            function() {
                $('.buttonGameStart').html('<button type="submit" value="Attack">Attack</button>');
            });
        start = false;
    });

    // start game
    $('.buttonGameStart').click(function() {
        sound.play(); // play sound

        $('#userCount').text("You attacked " + enemyName + " for " + userAttackPower + " damaged");
        $('#enemyCount').text(enemyName + " attacked you back for " + enemyAttackPower + " damaged");

        userCount -= enemyAttackPower;
        enemyScore -= userAttackPower;

        $('#scoreL').text(userCount);
        $('#scoreR').text(enemyScore);

        // change enemy character
        if (enemyScore <= 0) {
            $('.buttonGameStart').html("");

            $('#scoreL').text(userCount);
            count++;

            if (count === 2) {
                $('#enemy').text(userName + " has the last enemy");
            }
            $('.bottomRight').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameR').html("");
                    $('#newR').html("");
                    $('#scoreR').text("");
                });

            $('#comment').text("You have defeated " + enemyName + " you can choose to fight another enemy from right");
            $('#userCount').text("");
            $('#enemyCount').text("");
            userAttackPower += userCounter;

            start = true;
        }

        // lose
        if (userCount <= 0) {
            sound.pause();

            $('.buttonGameStart').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('.buttonGameStart').html("");
                    $('#comment').text("You've been defeated press 'Play Again' button for play again");
                    $('#userCount').text("");
                    $('#gameOver').text("GAME OVER");
                    $('#enemyCount').hide();
                    $('.bottomLeft').hide();
                    $('.bottomMiddle').hide();
                    $('.bottomRight').hide();
                    $('.top2').hide();
                });

            $('.buttonGameOver').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('.buttonGameOver').html('<button type="submit" value="Attack">Play Again</button>');
                });

            $('.buttonGameOver').click(function() {
                window.location = "index.html"
            });

        }

        // win
        if (count === 3) {
            userUpper = userName.toUpperCase();
            sound.pause();




            $('.buttonGameStart').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('.buttonGameStart').html("");
                    $('#comment').text('Press "Play Again" button for play again');
                    $('#userCount').text("");
                    $('#gameOver').text(userUpper + " HAS WON!");
                    $('#winner').html(winnerImage);

                    $('#enemyCount').hide();
                    $('.bottomLeft').hide();
                    $('.bottomMiddle').hide();
                    $('.bottomRight').hide();
                    $('.top2').hide();
                });

            $('.buttonGameOver').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('.buttonGameOver').html('<button type="submit" value="Attack">Play Again</button>');
                });
            $('.buttonGameOver').click(function() {
                window.location = "index.html"
            });
        }
    });
});
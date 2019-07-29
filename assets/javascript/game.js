var start = true; // for the choice character from enemy section
var leiaFirst = false; // if user choice is Leia
var leiaSecond = false; // if user choice enemy is Leia
var chewbaccaFirst = false; // if user choice is Chewbacca
var chewbaccaSecond = false; // if user choice enemy is Chewbacca
var reyFirst = false; // if user choice is Rey
var reySecond = false; // if user choice enemy is Rey
var darthFirst = false; // if user choice is Darth
var darthSecond = false; // if user choice enemy is Rey
var userCount = 0; // for user health points
var userAttackPower = 0; // for user attack power
var userName; // for user full name
var enemyScore = 0; // for enemy health points
var enemyAttackPower = 0; // for enemy attack power
var enemyName; // for enemy full name
var count = 0; // if character win
var userUpper; // upper case of character full name
var winnerImage; // image of character if win

var sound = document.getElementById("star"); // sound

// object with characters
var leia = {
    name: 'leia',
    image: '<img src="assets/images/leya.jpg" alt="Leia">',
    fullName: 'Princess Leia',
    healthPoints: 120,
    attackPower: 25,
    counterAttackPower: 25
}

var chubaka = {
    name: 'chubaka',
    image: '<img src="assets/images/chubaka.jpg" alt="Chewbacca">',
    fullName: 'Chewbacca',
    healthPoints: 140,
    attackPower: 20,
    counterAttackPower: 20
}

var rey = {
    name: 'rey',
    image: '<img src="assets/images/rey.png" alt="Rey">',
    fullName: 'Rey',
    healthPoints: 160,
    attackPower: 15,
    counterAttackPower: 15
}

var dart = {
    name: 'dart',
    image: '<img src="assets/images/dart.jpg" alt="Dart">',
    fullName: 'Darth Vader',
    healthPoints: 180,
    attackPower: 10,
    counterAttackPower: 10
}

$(document).ready(function() {


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

        erase(); // erase all characters from characters list

        $('#enemy').animate({
                opacity: '1'
            }, "slow", 'swing',
            function() {
                $('#enemy').html("<h2>Enemies available to attack</h2>");
            });
        // choosing character for fight
        if ($(this).attr("id") === "left") {
            leiaFirst = true;
            leiaSecond = true;
            userCount = leia.healthPoints;
            userAttackPower = leia.attackPower;
            userName = leia.fullName;
            winnerImage = leia.image;

            $('.bottomLeft').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameL').html(leia.fullName);
                    $('#newL').html(leia.image);
                    $('#scoreL').text(userCount);
                });
        } else if ($(this).attr("id") === "leftMiddle") {
            chewbaccaFirst = true;
            chewbaccaSecond = true;
            userCount = chubaka.healthPoints;
            userAttackPower = chubaka.attackPower;
            userName = chubaka.fullName;
            winnerImage = chubaka.image;

            $('.bottomLeft').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameL').html(chubaka.fullName);
                    $('#newL').html(chubaka.image);
                    $('#scoreL').text(userCount);
                });
        } else if ($(this).attr("id") === "rightMiddle") {
            reyFirst = true;
            reySecond = true;
            userCount = rey.healthPoints;
            userAttackPower = rey.attackPower;
            userName = rey.fullName;
            winnerImage = rey.image;

            $('.bottomLeft').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameL').html(rey.fullName);
                    $('#newL').html(rey.image);
                    $('#scoreL').text(userCount);
                });
        } else {
            darthFirst = true;
            darthSecond = true;
            userCount = dart.healthPoints;
            userAttackPower = dart.attackPower;
            userName = dart.fullName;
            winnerImage = dart.image;

            $('.bottomLeft').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameL').html(dart.fullName);
                    $('#newL').html(dart.image);
                    $('#scoreL').text(userCount);
                });
        }

        // change enemies place

        if (leiaFirst) {
            $('.top2').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameSecondL').html(chubaka.fullName);
                    $('#newSecondL').html(chubaka.image);
                    $('#scoreSecondL').text(chubaka.healthPoints);

                    $('#nameSecondM').html(rey.fullName);
                    $('#newSecondM').html(rey.image);
                    $('#scoreSecondM').text(rey.healthPoints);

                    $('#nameSecondR').html(dart.fullName);
                    $('#newSecondR').html(dart.image);
                    $('#scoreSecondR').text(dart.healthPoints);
                });
            leiaFirst = false;

        } else if (chewbaccaFirst) {
            $('.top2').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameSecondL').html(leia.fullName);
                    $('#newSecondL').html(leia.image);
                    $('#scoreSecondL').text(leia.healthPoints);

                    $('#nameSecondM').html(rey.fullName);
                    $('#newSecondM').html(rey.image);
                    $('#scoreSecondM').text(rey.healthPoints);

                    $('#nameSecondR').html(dart.fullName);
                    $('#newSecondR').html(dart.image);
                    $('#scoreSecondR').text(dart.healthPoints);
                });
            chewbaccaFirst = false;

        } else if (reyFirst) {
            $('.top2').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameSecondL').html(leia.fullName);
                    $('#newSecondL').html(leia.image);
                    $('#scoreSecondL').text(leia.healthPoints);

                    $('#nameSecondM').html(chubaka.fullName);
                    $('#newSecondM').html(chubaka.image);
                    $('#scoreSecondM').text(chubaka.healthPoints);

                    $('#nameSecondR').html(dart.fullName);
                    $('#newSecondR').html(dart.image);
                    $('#scoreSecondR').text(dart.healthPoints);
                });
            reyFirst = false;

        } else if (darthFirst) {
            $('.top2').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameSecondL').html(leia.fullName);
                    $('#newSecondL').html(leia.image);
                    $('#scoreSecondL').text(leia.healthPoints);

                    $('#nameSecondM').html(chubaka.fullName);
                    $('#newSecondM').html(chubaka.image);
                    $('#scoreSecondM').text(chubaka.healthPoints);

                    $('#nameSecondR').html(rey.fullName);
                    $('#newSecondR').html(rey.image);
                    $('#scoreSecondR').text(rey.healthPoints);
                });
            darthFirst = false;
        }
    });


    // choosing character for fight
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

            if ($(this).attr("id") === "topLeft") {
                $('#topLeft').animate({
                        opacity: '0.1'
                    },
                    "slow", 'swing',
                    function() {
                        $('#topLeft').hide();
                    });

                if (leiaSecond) {
                    enemyScore = chubaka.healthPoints;
                    enemyAttackPower = chubaka.counterAttackPower;
                    enemyName = chubaka.fullName;

                    $('.bottomRight').animate({
                            opacity: '1'
                        },
                        "slow", 'swing',
                        function() {
                            $('#nameR').html(chubaka.fullName);
                            $('#newR').html(chubaka.image);
                            $('#scoreR').text(enemyScore);
                        });
                } else {
                    enemyScore = leia.healthPoints;
                    enemyAttackPower = leia.counterAttackPower;
                    enemyName = leia.fullName;

                    $('.bottomRight').animate({
                            opacity: '1'
                        },
                        "slow", 'swing',
                        function() {
                            $('#nameR').html(leia.fullName);
                            $('#newR').html(leia.image);
                            $('#scoreR').text(enemyScore);
                        });
                }

            } else if ($(this).attr("id") === "topMiddle") {
                console.log(this);
                $('#topMiddle').animate({
                        opacity: '0.1'
                    },
                    "slow", 'swing',
                    function() {
                        $('#topMiddle').hide();
                    });

                if (leiaSecond || chewbaccaSecond) {
                    enemyScore = rey.healthPoints;
                    enemyAttackPower = rey.counterAttackPower;
                    enemyName = rey.fullName;

                    $('.bottomRight').animate({
                            opacity: '1'
                        },
                        "slow", 'swing',
                        function() {
                            $('#nameR').html(rey.fullName);
                            $('#newR').html(rey.image);
                            $('#scoreR').text(enemyScore);
                        });
                } else {
                    enemyScore = chubaka.healthPoints;
                    enemyAttackPower = chubaka.counterAttackPower;
                    enemyName = chubaka.fullName;

                    $('.bottomRight').animate({
                            opacity: '1'
                        },
                        "slow", 'swing',
                        function() {
                            $('#nameR').html(chubaka.fullName);
                            $('#newR').html(chubaka.image);
                            $('#scoreR').text(enemyScore);
                        });
                }

            } else if ($(this).attr("id") === "topRight") {
                $('#topRight').animate({
                        opacity: '0.1'
                    },
                    "slow", 'swing',
                    function() {
                        $('#topRight').hide();
                    });

                if (darthSecond) {
                    enemyScore = rey.healthPoints;
                    enemyAttackPower = rey.counterAttackPower;
                    enemyName = rey.fullName;

                    $('.bottomRight').animate({
                            opacity: '1'
                        },
                        "slow", 'swing',
                        function() {
                            $('#nameR').html(rey.fullName);
                            $('#newR').html(rey.image);
                            $('#scoreR').text(enemyScore);
                        });
                } else {
                    enemyScore = dart.healthPoints;
                    enemyAttackPower = dart.counterAttackPower;
                    enemyName = dart.fullName;

                    $('.bottomRight').animate({
                            opacity: '1'
                        },
                        "slow", 'swing',
                        function() {
                            $('#nameR').html(dart.fullName);
                            $('#newR').html(dart.image);
                            $('#scoreR').text(enemyScore);
                        });
                }
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

            userCount += 60;
            count++;

            $('.bottomRight').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameR').html("");
                    $('#newR').html("");
                    $('#scoreR').text("");
                    $('.buttonGameStart').html("");
                });

            $('#comment').text("You have defeated " + enemyName + " you can choose to fight another enemy from right");
            $('#userCount').text("");
            $('#enemyCount').text("");

            userAttackPower += enemyAttackPower;

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
                    $('#comment').text("You've been defeated press Play Again button for play again");
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
                    $('#gameOver').text(userUpper + " IS WIN");
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
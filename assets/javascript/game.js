var start = true;
var leiaFirst = false;
var chewbaccaFirst = false;
var reyFirst = false;
var darthFirst = false;
var leiaSecond = false;
var chewbaccaSecond = false;
var reySecond = false;
var darthSecond = false;
var secondChoise = false;
var leiaScore = 120;
var chewbaccaScore = 140;
var reyScore = 90;
var dartScore = 180;
var yourcount = 0;
var enemyScore = 0;

var sound = document.getElementById("star");

var leia = {
    name: 'leia',
    image: '<img src="assets/images/leya.jpg" alt="Leia">',
    fullName: 'Princess Leia',
    healthPoints: 120,
    attackPower: 13,
    counterAttackPower: 13
}

var chubaka = {
    name: 'chubaka',
    image: '<img src="assets/images/chubaka.jpg" alt="Chewbacca">',
    fullName: 'Chewbacca',
    healthPoints: 140,
    attackPower: 19,
    counterAttackPower: 19
}

var rey = {
    name: 'rey',
    image: '<img src="assets/images/rey.png" alt="Rey">',
    fullName: 'Rey',
    healthPoints: 90,
    attackPower: 23,
    counterAttackPower: 23
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


    $('.push').click(function() {

        erase();
        $('#enemy').animate({
                opacity: '1'
            }, "slow", 'swing',
            function() {
                $('#enemy').html("<h2>Enemies available to attack</h2>");
            });

        if ($(this).attr("id") === "left") {
            leiaFirst = true;
            leiaSecond = true;
            yourcount = leia.healthPoints;
            $('.bottomLeft').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameL').html(leia.fullName);
                    $('#newL').html(leia.image);
                    $('#scoreL').text(yourcount);


                });
        } else if ($(this).attr("id") === "leftMiddle") {
            chewbaccaFirst = true;
            chewbaccaSecond = true;
            yourcount = chubaka.healthPoints;
            $('.bottomLeft').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameL').html(chubaka.fullName);
                    $('#newL').html(chubaka.image);
                    $('#scoreL').text(yourcount);

                });
        } else if ($(this).attr("id") === "rightMiddle") {
            reyFirst = true;
            reySecond = true;
            yourcount = rey.healthPoints;
            $('.bottomLeft').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameL').html(rey.fullName);
                    $('#newL').html(rey.image);
                    $('#scoreL').text(yourcount);
                });
        } else {
            darthFirst = true;
            darthSecond = true;
            yourcount = dart.healthPoints;
            $('.bottomLeft').animate({
                    opacity: '1'
                },
                "slow", 'swing',
                function() {
                    $('#nameL').html(dart.fullName);
                    $('#newL').html(dart.image);
                    $('#scoreL').text(yourcount);
                });
        }

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

    $('.pushSecond').click(function() {
        if (start) {
            $('#vs').animate({
                    opacity: '1'
                },
                "slow", "swing",
                function() {
                    $('#vs').html('<img src="assets/images/vs1.png" alt="VS">');
                });

            if ($(this).attr("id") === "topLeft") {
                console.log(this);

                $('#topLeft').animate({
                        opacity: '0.1'
                    },
                    "slow", 'swing',
                    function() {
                        $('#topLeft').hide();
                    });

                if (leiaSecond) {
                    enemyScore = chubaka.healthPoints;
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
        start = false;
    });




});
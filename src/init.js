$(document).ready(function() {
  window.dancers = [];

  $('.addBlinkyButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
  
    $('body').append(dancer.$node);
  });


  $('.addCarltonButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
  
    $('body').append(dancer.$node);
  });

  $('.addMinionButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000  
    );

    window.dancers.push(dancer);
  
    $('body').append(dancer.$node);
  });

  $('.addLineUpButton').on('click', function(event) {
    var top = 0;
    var left = 500;
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];

      var $node = dancer.$node;


      $node.css({top: top, left: '60%'});

      // left -= 60;
      top += 50;
    }
  });

  $('.interactButton').on('click', function(event) {
    // var neighbors = []; // closest dancers held in an array at each index
    
    var getDistance = function(obj1, obj2) {
      var y = obj2.top - obj1.top;
      var x = obj2.left - obj1.left;
      var distance = Math.sqrt(x ^ 2 + y ^ 2);
      return distance;
    };

    var randIndex = Math.floor(window.dancers.length * Math.random());
    var randObj = window.dancers[randIndex];


    // var distances = {};
    // var storage = [];

    // for (var i = 0; i < window.dancers.length; i++) {
    //   if (i !== currentIndex) {
    //     distances[window.dancers[i]] = getDistance(window.dancers[i], window.dancers[currentIndex]);
    //   }
    // }

    // for (var key in distances) {

    // }


    var shortestDist, closestObj;

    for (var i = 0; i < window.dancers.length; i++) {
      var distance = getDistance(randObj, window.dancers[i]);
      shortestDist = shortestDist || distance;
      
      if (i !== randIndex && distance <= shortestDist) {
        closestObj = window.dancers[i];
        shortestDist = distance;
      }
    }

    var top1 = randObj.top;
    var left1 = randObj.left;
    var top2 = closestObj.top;
    var left2 = closestObj.left;
    // randObj.setPosition(40, 50);
    // closestObj.setPosition(40, 60);

    randObj.$node.animate({top: '30%', left: '20%'});
    closestObj.$node.animate({top: '30%', left: '30%'});


    setTimeout(function() {
      randObj.$node.animate({top: top1, left: left1});
      closestObj.$node.animate({top: top2, left: left2});
    }, 3000);
  });


  // mouseover function
  $('.dancer').on('mouseover', function(event) {
    $(this).slideToggle();
  });


});


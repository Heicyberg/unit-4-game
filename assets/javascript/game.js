 var targetNumber = Math.floor(Math.random()*100)+19;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var pics = ["assets/images/diamond1.jpg","assets/images/diamond2.gif","assets/images/diamond3.png","assets/images/diamond4.jpg"]
  var numW = 0;
  var numL = 0; 

  $("#WinNum").text(numW);
  $("#LosNum").text(numW);
  $("#score").text(counter);

  function moveForward(){
    counter = 0;
    targetNumber = Math.floor(Math.random()*100)+19;
    $("#number-to-guess").text(targetNumber);
    $("#score").text(counter);
  }

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < pics.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", pics[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random()*12+1));

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#score").text(counter)

    if (counter === targetNumber) {
      numW+=1;
      $("#WinNum").text(numW);
      console.log(numW);
      moveForward();
    }

    else if (counter >= targetNumber) {
      numL+=1;
      $("#LosNum").text(numL);
      console.log(numL);
      moveForward();
    }

  });

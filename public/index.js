(function () {
  "use strict";

  addAnswersToSessionStorage();
  addEventListenerToBalloons();

  $('.carousel').carousel({
    indicators: true,
    shift: 100
  });

  function addAnswersToSessionStorage(){
    var personality = [];

    [
      "strange",
      "happy",
      "angry",
      "fun",
      "boring",
      "kind",
      "sad"
    ].forEach(emotion => {
      var node = document.getElementById(emotion);
      addClickEventArray('personality', node, emotion, personality);
    });

    [
      "sad-emoji",
      "happy-emoji",
      "indifferent-emoji"
    ].forEach(emoji => {
      var node = document.getElementsByClassName(emoji)[0];
      addClickEventSingle('feelings', node, emoji.match(/^[a-z]+/));
    });

    [
      "name",
      "age"
    ].forEach(inputField => {
      var node = document.getElementsByClassName(inputField)[0];
      addKeyupEvent(inputField, node);
    });

    function addKeyupEvent(key, element){
      if(!element){ return; }
      element.addEventListener("keyup", function(){
        addSingleValueToStorage(key, element.value);
      });
    }

    function addClickEventSingle(key, element, value){
      if(!element){ return; }
      element.addEventListener("click", function(){
        addSingleValueToStorage(key, value);
      });
    }

    function addClickEventArray(key, element, value, array){
      if(!element){ return; }
      element.addEventListener("click", function(){
        addValueToArray(key, value, array);
      });
    }

    function addValueToArray(key, value, array){
      array.push(value);
      addArrayToStorage(key, array);
    }

    function addSingleValueToStorage(key, value){
      sessionStorage.setItem(key, value);
    }

    // JSON.stringify() is used here as session storage only supports strings
    function addArrayToStorage(key, array){
      sessionStorage.setItem(key, JSON.stringify(array));
    }
  }

  // Adds a class to baloons which makes them disappear when clicked.
  function addEventListenerToBalloons(){
    if (document.querySelector('.personality')){
      var balloons = document.querySelectorAll('[class^="balloons--"]');

      balloons.forEach( function (balloon) {
        balloon.addEventListener('click', function () {
          this.classList.add('pop');
        });
      });
    }
  }
})();

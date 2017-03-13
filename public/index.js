(function () {
  "use strict";

  addAnswersToSessionStorage();
  addEventListenerToBalloons();

  $('.carousel').carousel({
    indicators: true,
    shift: 100
  });

  function addAnswersToSessionStorage(){
    var nameInput = document.getElementsByClassName("text-input")[0];
    var ageInput = document.getElementsByClassName("text-input")[1];
    var strange = document.getElementById("strange");
    var happy = document.getElementById("happy");
    var angry = document.getElementById("angry");
    var fun = document.getElementById("fun");
    var boring = document.getElementById("boring");
    var kind = document.getElementById("kind");
    var sad = document.getElementById("sad");
    var happyEmoji = document.getElementsByClassName("emoji")[0];
    var sadEmoji = document.getElementsByClassName("emoji")[1];
    var indifferentEmoji = document.getElementsByClassName("emoji")[2];
    var personality = [];

    addKeyupEvent('name', nameInput);
    addKeyupEvent('age', ageInput);

    addClickEventArray('personality', strange, 'strange', personality);
    addClickEventArray('personality', happy, 'happy', personality);
    addClickEventArray('personality', angry, 'angry', personality);
    addClickEventArray('personality', fun, 'fun', personality);
    addClickEventArray('personality', boring, 'boring', personality);
    addClickEventArray('personality', kind, 'kind', personality);
    addClickEventArray('personality', sad, 'sad', personality);

    addClickEventSingle('feelings', sadEmoji, 'sad');
    addClickEventSingle('feelings', happyEmoji, 'happy');
    addClickEventSingle('feelings', indifferentEmoji, 'indifferent');

    function addKeyupEvent(key, element){
      if(!element){ return; };
      element.addEventListener("keyup", function(){
        addToStorageValue(key, element.value)
      });
    }

    function addClickEventSingle(key, element, value){
      if(!element){ return; };
      element.addEventListener("click", function(){
        addToStorageValue(key, value)
      });
    }

    function addClickEventArray(key, element, value, array){
      if(!element){ return; };
      element.addEventListener("click", function(){
        addValueToArray(key, value, array);
      });
    }

    function addToStorageValue(key, value){
      sessionStorage.setItem(key, value);
    }

    function addValueToArray(key, value, array){
      array.push(value);
      addArrayToStorage(key, array);
    };

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

var body = document.body;
var endpoint = window.location.href.split('/')[7];
var forward, backward;

// Homepage to choose an avatar page
if (endpoint === 'index.html'){
      forward = 'choose-an-avatar.html',
      backward = ''
};

// Avatar to introduction page
if (endpoint === 'choose-an-avatar.html'){
    forward = 'introduction.html',
    backward = 'index.html'
};

// Introduction to feelings page
if (endpoint === 'introduction.html'){
    forward = 'feelings.html',
    backward = 'choose-an-avatar.html'
};

// Feelings page to eating page
if (endpoint === 'feelings.html'){
    forward = 'eating.html',
    backward = 'introduction.html'
};

// Eating page to finish page
if (endpoint === 'eating.html'){
    forward = 'personality.html',
    backward = 'feelings.html'
};

// Eating page to finish page
if (endpoint === 'personality.html'){
    forward = 'finish.html',
    backward = 'eating.html'
};

// Eating page to finish page
if (endpoint === 'finish.html'){
    forward = '',
    backward = 'eating.html'
};

Hammer(body).on("swipeleft", function(event) {
  window.location.href = forward;
});

Hammer(body).on("swiperight", function(event) {
  window.location.href = backward;
});
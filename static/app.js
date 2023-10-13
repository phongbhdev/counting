const yourDate = new Date("2023-02-14T13:23:00");
function newHeart() {
      var hearts = $('.heart');
      if (hearts.length >= 24) return setTimeout(newHeart, 1000);
      var c = $('.heart-container:first').clone();
      var anims = ['swing', 'spin'];
      var a = anims[Math.round(Math.random())];
      c.find('.heart')
            .css('opacity', 0.2 + Math.random() * 0.8)
            .css('-webkit-animation-name', a)
            .css('-moz-animation-name', a);
      c.css('left', (10 + Math.random() * ($('body').innerWidth() - 10)) + 'px');
      c.css('-webkit-animation-name', 'fall');
      c.css('-webkit-animation-duration', (4 + Math.random() * 14) + 's');
      c.css('-webkit-transform', 'scale(' + (0.4 + Math.random() * 2) + ')');
      c.css('-moz-animation-duration', (4 + Math.random() * 14) + 's');
      c.css('-moz-transform', 'scale(' + (0.4 + Math.random() * 2) + ')');
      $('#hearts').append(c);
      c.bind('animationend', function () { c.remove(); });
      c.bind('webkitAnimationEnd', function () { c.remove(); });
      setTimeout(newHeart, 100);
}
setTimeout(newHeart, 100);

document.addEventListener('DOMContentLoaded', function () {
      var rootTime = document.querySelector("time");

      // document.querySelector("anni").textContent = `${(yourDate.getDate() > 9) ? yourDate.getDate() : "0" + yourDate.getDate()}-${(yourDate.getMonth() > 8) ? (yourDate.getMonth() + 1) : "0" + (yourDate.getMonth() + 1)}-${yourDate.getFullYear()}`;

      yourDate.getDate();
      yourDate.getMonth();
      yourDate.getFullYear();
      document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " DAYS";

      function olock() {
            var today = new Date(),
                  hrs = (Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
                  min = (Math.floor(Math.floor((today - yourDate) / 1000) / 60)) % 60,
                  sec = Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs > 9) ? hrs : "0" + hrs}:${(min > 9) ? min : "0" + min}:${(sec > 9) ? sec : "0" + sec}`;
      } olock();
      var timer = setInterval(function () { olock() }, 1000);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);
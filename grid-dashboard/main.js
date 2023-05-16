const container = document.getElementById('container');
const toggleFeed1 = document.getElementById('toggle-feed-1');
const toggleFeed2 = document.getElementById('toggle-feed-2');

let toggled = false;

toggleFeed1.addEventListener('click', (e) => {
  container.classList.toggle('feed-1-expanded');
  toggled = true;
});

toggleFeed2.addEventListener('click', (e) => {
  container.classList.toggle('feed-2-expanded');
});

var gameDict = {
  '16282': 'Melee',
  '504461': 'Ultimate',
  '18833': 'Brawl',
  '17516': "64",
  '488353': 'Wii U',
  '489023': '3DS',
};

var games = JSON.parse(localStorage.getItem('preferences-games')) || Object.keys(gameDict);
var header = document.getElementById("game-choice-list");
var settingsForm = document.getElementById("settings-games");
games.forEach(g => {
  var id = g;
  var val = gameDict[g];
  header.innerHTML += `<span data-game="${id}" class="game-choice">${val}</span>`;
});

Object.keys(gameDict).forEach(g => {
  var id = g;
  var val = gameDict[g];
  settingsForm.innerHTML += `<label><input value="${id}" type="checkbox" checked/> ${val}</label><br />`
});

async function get(url) {
  var f = await fetch(url,
    {
      method: 'GET',
      headers: {
        'Client-ID': '84yncem7d3f8iv4kw7ibxjiv2i4lfxe',
      }
    }
  );
  var j = f.json();
  return j;
}

var root = document.getElementById("root");
var selectedGame = localStorage.getItem('selected-game');
var streams = undefined;

(async function main() {
  var url = 'https://api.twitch.tv/helix/streams?first=100';
  games.forEach(g => {
    url += `&game_id=${g}`;
  });
  var fetchStreamers = await get(url);
  streams = fetchStreamers.data;
  if (selectedGame != null && games.includes(selectedGame)) {
    document.querySelectorAll(`#game-choice-list span[data-game='${selectedGame}']`)[0].className += " active";
  }

  displayGames(selectedGame);
})();

var displayGames = (id) => {
  var streamsToDisplay = streams;
  selectedGame = id;
  root.innerHTML = "";

  if (selectedGame != null) {
    localStorage.setItem('selected-game', selectedGame);
  }

  if (id != null)
    streamsToDisplay = streams.filter(x => x.game_id === id);

  console.log(id);
  streamsToDisplay.forEach((s, i) => {
    var oddOrEven = i % 2 === 0 ? "even" : "odd";
    root.innerHTML += `
        <img class="stream-thumbnail ${oddOrEven}" src="${s.thumbnail_url.replace("{width}", "90").replace("{height}", "50")}" />
        <a class="stream-row-link ${oddOrEven}" href="https://twitch.tv/${s.user_name}" target=_blank alt="${s.title}">
          <div class="tdlink">${s.user_name}</div>
        </a>
        <div class="stream-row-viewers ${oddOrEven}">
          ${s.viewer_count}
        </div>`;
  });
}

function gameClicked(game) {
  var id = game.target.dataset.game;
  var actives = document.querySelectorAll(".active");
  if (actives != null) {
    [].forEach.call(actives, function (el) {
      el.classList.remove("active");
    });
  }
  game.target.className += " active";
  if (selectedGame === id)
    return;

  displayGames(id);
}

Array.from(document.getElementsByClassName("game-choice")).forEach((e) => {
  e.addEventListener('click', gameClicked);
});

document.getElementById("settings").addEventListener('click', settingsClicked);

function settingsClicked() {
  document.getElementById("settings-overlay").style = "display: block";
}

document.getElementById("settings-form").addEventListener('submit', settingsSaved);

function settingsSaved(e) {

  var gameIdPreferences = [];
  for (var i = 0; i < e.target.length - 1; i++) { // -1 to skip the Submit button
    if (e.target[i].checked) {
      gameIdPreferences.push(e.target[i].defaultValue);
    }
  }
  localStorage.setItem('preferences-games', JSON.stringify(gameIdPreferences));
  document.getElementById("settings-overlay").style = "display: none";
}
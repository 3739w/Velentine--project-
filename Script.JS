function suggestMusic(mood) {
  let links = {
    happy: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
    sad: "https://www.youtube.com/watch?v=RB-RcX5DS5A",
    romantic: "https://www.youtube.com/watch?v=450p7goxZqg",
    focused: "https://www.youtube.com/watch?v=WPni755-Krg"
  };

  let moodName = mood.charAt(0).toUpperCase() + mood.slice(1);
  document.getElementById("suggestion").innerHTML =
    `Your mood is <strong>${moodName}</strong>.<br>
     <a href="${links[mood]}" target="_blank">Click here to listen</a>`;
}

function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
//  this.isPlaying = fales;
}

Song.prototype.play = function() {
  this.isPlaying = true;
};

Song.prototype.stop = function() {
  this.isPlaying = false;
};

Song.prototype.toHTML = function() {
 var htmlSting = '<li';
  if(this.isPlaying){
    htmlSting += ' clas="current"';
  }
  htmlSting += '>';
  htmlSting += this.title;
  htmlSting += ' - '
  htmlSting += this.artist;
  htmlSting += '<span class="duration">'
  htmlSting += this.duration;
  htmlSting += '</span></li>';

  return htmlSting;
};

//
//Used the code of:
// Daniel Shiffman
// Code for: https://youtu.be/KkyIDI6rQJI


function Drop(word) {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);
  this.word = word;

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.13);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      counter++;
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
      this.word = words[counter%words.length];
    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 2);
    var size = map(this.z, 0, 20, 12, 20);
    strokeWeight(thick);
    stroke(200);
    textSize(size);
    text(this.word, this.x, this.y);
  }
}

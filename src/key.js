function Key() {
  this.keys = [[440, 415, 369, 329, 293, 277, 246, 220],
      [466, 415, 364, 349, 311, 277, 261, 223],
      [523, 493, 440, 392, 349, 329, 293, 261],
      [587, 523, 493, 440, 392, 369, 329, 293],
      [369, 329, 293, 277, 246, 220, 207, 185]]
  this.counter = 0;
  this.value = this.keys[0];
}

Key.prototype.change = function( ) {
 this.counter === this.keys.length - 1 ? this.counter = 0 : this.counter++;
 this.value = this.keys[this.counter];
}
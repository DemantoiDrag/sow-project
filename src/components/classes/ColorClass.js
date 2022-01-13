export default class ColorClass {
  id = null;
  color = "#000";
  count = 4;
  checked = false;

  constructor(color, count) {
    this.id = ColorClass.incrementId();
    this.color = color;
    this.count = count;
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }

  reduceCount() {
    this.count--;
  }

  setCount(count) {
    this.count = count;
  }
}

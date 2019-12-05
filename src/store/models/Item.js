import { v4 } from "uuid";

export default class Item {
  constructor() {
    this.id = v4();
    this.isMine = Math.random() * 10 > 5;
    this.isOpened = false;
  }
}

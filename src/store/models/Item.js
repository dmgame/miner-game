import { v4 } from "uuid";

export default class Item {
  constructor() {
    this.id = v4();
    this.isMine = Math.random() * 10 > 8;
    this.isOpened = false;
  }
}

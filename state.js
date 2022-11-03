export const states = {
  STANDIN_LEFT: 0,
  STANDIN_RIGHT: 1,
};

class State {
  constructor(state) {
    this.state = state;
  }
}

export class StandingLeft extends State {
  constructor(player) {
    super("STANDIN LEFT");
    this.player = player;
  }
  enter() {
    this.player.frameY = 1;
  }
  handleInput(input) {
    if (input === "PRESS right") this.player.setState(states.STANDIN_RIGHT);
  }
}

export class StandingRight extends State {
  constructor(player) {
    super("STANDIN RIGHT");
    this.player = player;
  }
  enter() {
    this.player.frameY = 0;
  }
  handleInput(input) {
    if (input === "PRESS left") this.player.setState(states.STANDIN_LEFT);
  }
}

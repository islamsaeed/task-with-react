//console.log(moveRover(4, 12, "NORTH", "FFB"));
export function moveRoverfunction(X = 0, Y = 0, heading = "NORTH", commands) {
  heading = heading.toUpperCase();
  // remove heading spaces (start+ end)

  heading = heading.trim();

  // //remove heading undewrsocre _
  if (heading.startsWith("_")) {
    heading = heading.substring(1);
  }

  for (const command of commands) {
    if (!["F", "B", "L", "R"].includes(command)) {
      return `not supported`;
    }
    command.toUpperCase();
    if (command === "F") {
      // Move forward
      if (heading === "NORTH") {
        Y += 1;
      } else if (heading === "EAST") {
        X += 1;
      } else if (heading === "SOUTH") {
        Y -= 1;
      } else if (heading === "WEST") {
        X -= 1;
      }
    } else if (command === "B") {
      // Move backward
      if (heading === "NORTH") {
        Y -= 1;
      } else if (heading === "EAST") {
        X -= 1;
      } else if (heading === "SOUTH") {
        Y += 1;
      } else if (heading === "WEST") {
        X += 1;
      }
    } else if (command === "L") {
      // Rotate left
      if (heading === "NORTH") {
        heading = "WEST";
      } else if (heading === "EAST") {
        heading = "NORTH";
      } else if (heading === "SOUTH") {
        heading = "EAST";
      } else if (heading === "WEST") {
        heading = "SOUTH";
      } //console.log(moveRover(4, 12, "R", "FFB"));
    } else if (command === "R") {
      // Rotate right
      if (heading === "NORTH") {
        heading = "EAST";
      } else if (heading === "EAST") {
        heading = "SOUTH";
      } else if (heading === "SOUTH") {
        heading = "WEST";
      } else if (heading === "WEST") {
        heading = "NORTH";
      }
    }
    //  else {
    //   return "the command is not supported";
    // }
  }
  return `(${X},${Y}) ${heading}`;
}

console.log(moveRoverfunction(4, 12, "NORTH", "fFB"));


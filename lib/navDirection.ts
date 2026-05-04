// Module-level store: set before navigation, read by PageTransition
let direction: 1 | -1 = 1;

export function setNavDirection(d: 1 | -1) { direction = d; }
export function getNavDirection() { return direction; }

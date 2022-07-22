// Способ #1
/*
function namify(users) {
  const names = [];
  for (const user of users) {
    names.push(user.name);
  }
  return names;
}
 */

// Способ #2
function namify(users) {
  return users.map(user => user.name);
}


function checkSpam(str) {
  const changedStr = str.toUpperCase();
  const badString1 = '1xBet';
  const badString2 = 'XXX';
  return changedStr.includes(badString1.toUpperCase()) || changedStr.includes(badString2.toUpperCase());
}

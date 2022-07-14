function checkSpam(str) {
  str = str.replace(/\s/g, '');
  const changedStr = str.toUpperCase();
  console.log(str);
  const badString1 = '1xBet';
  const badString2 = 'XXX';
  return changedStr.includes(badString1.toUpperCase()) || changedStr.includes(badString2.toUpperCase());
}

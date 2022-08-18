// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === string.toLowerCase()
    );
  }
  
  function fuzzyMatch(drivers, newString) {
    return drivers.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(newString.toLowerCase()) === 0
    );
  }
  
  function matchName(drivers, soughtName) {
    return drivers.filter((record) => record.name === soughtName);
  }
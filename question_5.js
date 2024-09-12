function findHighestFloor() {
    let floors = 100;
    let dropStep = 14;
    let currentFloor = dropStep;
    let previousFloor = 0;
    let drops = 0;
  
    while (currentFloor <= floors && dropStep > 0) {
      drops++;
      
      if (currentFloor > 56) {
        break;
      }
  
      previousFloor = currentFloor;
      dropStep--;
      currentFloor += dropStep;
    }
  
    if (currentFloor > floors || currentFloor > 56) {
      currentFloor = previousFloor;
      for (let i = currentFloor + 1; i <= floors; i++) {
        drops++;
        if (i === 56) {
          break;
        }
      }
    }
  
    return `Total drops: ${drops}`;
  }
  
  console.log(findHighestFloor());
  
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    
    for (const item of arr) {
      if (seen.has(item)) {
        duplicates.add(item);
      } else {
        seen.add(item);
      }
    }
    
    return Array.from(duplicates);
  }
  
  const array = [1, 2, 3, 4, 2, 5, 6, 3];
  console.log(findDuplicates(array));  
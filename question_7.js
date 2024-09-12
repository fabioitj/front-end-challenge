function getMaxValue(carrotTypes, capacity) {
    carrotTypes.sort((a, b) => (b.price / b.kg) - (a.price / a.kg));
  
    let totalValue = 0;
    for (let i = 0; i < carrotTypes.length; i++) {
      if (capacity === 0) break;
      
      let { kg, price } = carrotTypes[i];
      let amountToTake = Math.min(kg, capacity);
  
      totalValue += amountToTake * (price / kg);
      capacity -= amountToTake;
    }
  
    return totalValue;
  }
  
  const carrotTypes = [
    { kg: 5, price: 100 },
    { kg: 7, price: 150 },
    { kg: 3, price: 70 }
  ];
  const capacity = 36;
  
  console.log(getMaxValue(carrotTypes, capacity));  
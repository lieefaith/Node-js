function countAnimals(animals,count){
    return count.map(animal => (animals.match(new RegExp(animal, "g")) || []).length);
  }
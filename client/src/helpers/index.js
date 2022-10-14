export const getRandomItemsInArray = (numberOfIteration, targetArray, newArray) => {
   const items = [];
   for (let item of targetArray) {
      items.push(item);
   }
   
   for (let i = 0; i < numberOfIteration; i++) {
      const randomIndex = Math.floor(Math.random() * items.length);
      newArray.push(items[randomIndex]);
      items.splice(randomIndex, 1);
   }
};

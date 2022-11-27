// code your solution here
function superbowlWin(array){
   let season = array.find(findWin);
   if(season === undefined) {
    return undefined;
   }
   else{
    return season.year;
   }
}

function findWin(season){
    return season.result === "W";
}

// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ];

//  console.log(superbowlWin(record));

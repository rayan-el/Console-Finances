var finances = [
  { month: 'Jan-2010', price: 867884},
  {month: 'Feb-2010', price: 984655},
  {month: 'Mar-2010', price: 322013},
  {month: 'Apr-2010', price: -69417},
  {month: 'May-2010', price: 310503},
  {month: 'Jun-2010', price: 522857},
  {month: 'Jul-2010', price: 1033096},
  {month: 'Aug-2010', price: 604885},
  {month: 'Sep-2010', price: -216386},
  {month: 'Oct-2010', price: 477532},
  {month: 'Nov-2010', price: 893810},
  {month: 'Dec-2010', price: -80353},
  {month: 'Jan-2011', price: 779806},
  {month: 'Feb-2011', price: -335203},
  {month: 'Mar-2011', price: 697845},
  {month: 'Apr-2011', price: 793163},
  {month: 'May-2011', price: 485070},
  {month: 'Jun-2011', price: 584122},
  {month: 'Jul-2011', price: 62729},
  {month: 'Aug-2011', price: 668179},
  {month: 'Sep-2011', price: 899906},
  {month: 'Oct-2011', price: 834719},
  {month: 'Nov-2011', price: 132003},
  {month: 'Dec-2011', price: 309978},
  {month: 'Jan-2012', price: -755566},
  {month: 'Feb-2012', price: 1170593},
  {month: 'Mar-2012', price: 252788},
  {month: 'Apr-2012', price: 1151518},
  {month: 'May-2012', price: 817256},
  {month: 'Jun-2012', price: 570757},
  {month: 'Jul-2012', price: 506702},
  {month: 'Aug-2012', price: -1022534},
  {month: 'Sep-2012', price: 475062},
  {month: 'Oct-2012', price: 779976},
  {month: 'Nov-2012', price: 144175},
  {month: 'Dec-2012', price: 542494},
  {month: 'Jan-2013', price: 359333},
  { month: 'Feb-2013', price: 321469},
  {month: 'Mar-2013', price: 67780},
  {month: 'Apr-2013', price: 471435},
  {month: 'May-2013', price: 565603},
  {month: 'Jun-2013', price: 872480},
  {month: 'Jul-2013', price: 789480},
  {month: 'Aug-2013', price: 999942},
  {month: 'Sep-2013', price: -1196225},
  {month: 'Oct-2013', price: 268997},
  {month: 'Nov-2013', price: -687986},
  {month: 'Dec-2013', price: 1150461},
  {month: 'Jan-2014', price: 682458},
  {month: 'Feb-2014', price: 617856},
  {month: 'Mar-2014', price: 824098},
  {month: 'Apr-2014', price: 581943},
  {month: 'May-2014', price: 132864},
  {month: 'Jun-2014', price: 448062},
  {month: 'Jul-2014', price: 689161},
  {month: 'Aug-2014', price: 800701},
  {month: 'Sep-2014', price: 1166643},
  {month: 'Oct-2014', price: 947333},
  {month: 'Nov-2014', price: 578668},
  {month: 'Dec-2014', price: 988505},
  {month: 'Jan-2015', price: 1139715},
  {month: 'Feb-2015', price: 1029471},
  {month: 'Mar-2015', price: 687533},
  {month: 'Apr-2015', price: -524626},
  {month: 'May-2015', price: 158620},
  {month: 'Jun-2015', price: 87795},
  {month: 'Jul-2015', price: 423389},
  {month: 'Aug-2015', price: 840723},
  {month: 'Sep-2015', price: 568529},
  {month: 'Oct-2015', price: 332067},
  {month: 'Nov-2015', price: 989499},
  {month: 'Dec-2015', price: 778237},
  {month: 'Jan-2016', price: 650000},
  {month: 'Feb-2016', price: -1100387},
  {month: 'Mar-2016', price: -174946},
  {month: 'Apr-2016', price: 757143},
  {month: 'May-2016', price: 445709},
  {month: 'Jun-2016', price: 712961},
  {month: 'Jul-2016', price: -1163797},
  {month: 'Aug-2016', price: 569899},
  {month: 'Sep-2016', price: 768450},
  {month: 'Oct-2016', price: 102685},
  {month: 'Nov-2016', price: 795914},
  {month: 'Dec-2016', price: 60988},
  {month: 'Jan-2017', price: 138230},
  {month: 'Feb-2017', price: 671099},
];

var totalMonths = finances.length;
console.log("Total Months: " + totalMonths);
// .length is used when counting the sum of items in array

const totalPrice = finances.reduce((total, item) => {
  return total + item.price;}, 0);
console.log("Total: $" + totalPrice);


var averageChange = totalPrice/(totalMonths - 1);
var x = averageChange;
var y = Math.round(100*x)/100;
console.log("Average change: $" + y);
//use to get nearest 100th


 const biggestIncrease = finances.reduce(
  (prev, current) => {
    return prev.price > current.price ? prev : current
  }
);
console.log("Greatest Increase in Profits/Losses: " + JSON.stringify(biggestIncrease)); 
//use to get rid of [object, object] in console


const biggestDecrease = finances.reduce(
  (prev, current) => {
    return prev.price < current.price ? prev : current
  }
);
console.log("Greatest Decrease in Profits/Losses: " + JSON.stringify(biggestDecrease));
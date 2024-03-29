//6. Mini-Max
// question: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  arr.sort((a,b) => a-b);
  let mini = 0;
  let max = 0;
  for(let i = 0; i < arr.length-1; i++){
    mini += arr[i];
  }
  for(let j = 1; j < arr.length; j++){
    max += arr[j];
  }
  let result = `${mini} ${max}`;
  console.log(result);
}

//7. Birthday Cake Candles
// question: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  let maxOfArr = Math.max(...candles);
  return candles.filter((num) => num === maxOfArr).length;
}

//8. Time Conversion
// question: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  let arr = s.slice(0,s.length-2).split(':');
  let isPM = s.includes('PM');
  if(isPM && arr[0] < 12){
    arr[0] = (Number(arr[0]) + 12).toString().padStart(2, '0');
  } else if (!isPM && arr[0] >= 12){
    arr[0] = (Number(arr[0]) - 12).toString().padStart(2, '0');
  }
  return arr.join(':');
}

//9.Grading Students
// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  let result= [];

  for(let value of grades){
    let roundedValue = 0;
    let caluateRound = Math.round(value/5) * 5;

    if(caluateRound < value || caluateRound < 40){
      result.push(value);
    } else if (caluateRound >= 40){
      roundedValue = Math.round(value/5) * 5;
      result.push(roundedValue);
    }
  }

  return result;
}

//10. Apple And Orange
// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let apppleInHouse = apples.filter(apple => apple + a >= s && apple + a <= t).length;
  let orangeInHouse = oranges.filter(apple => apple + b >= s && apple + b <= t).length;

  console.log(apppleInHouse);
  console.log(orangeInHouse);
}

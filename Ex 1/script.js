function getNumbers(){
    const nums = [];
    nums[1] = parseInt(prompt("Enter number 1: "));
    nums[2] = parseInt(prompt("Enter number 2: "));
    nums[3] = parseInt(prompt("Enter number 3: "));
    nums[4] = parseInt(prompt("Enter number 4: "));
    nums[5] = parseInt(prompt("Enter number 5: "));

    var avg = (nums[1] + nums[2] + nums[3] + nums[4] + nums[5]) / 5;

    alert("The numbers are " + nums[1] + ", " + nums[2] + ", " + nums[3] + ", " + nums[4] + ", " + nums[5] +"\nThe average of the numbers is: " + avg);
}
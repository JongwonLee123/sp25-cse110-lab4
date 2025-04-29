# Part2

1. Line 12 will print 3 to the console. We run the for loop 3 times (i times) and once ends, log the i to the console. 
2. Line 13 will print 150 because it gets the last discountedPrice which was 300 * (0.5) which is 150.
3. Line 14 returns the same value 150 because the operations get the finalprice of 150 and is stored last iteration.
4. The function returns an array containing the discountedprices calculated for each price in prices. Does not log to console because returns the discounted. (could check by console logging and getting [50, 100, 150])
5. Error because we are trying to call a variable that is not called globally in the function. If they were in the same, would print out whatever i was. 
6. Same error, can not call variable not in same global area. If outside for loop, would print fine.
7. This prints out 150 because it is declared globally and changed inside for loop. Take last iteration and which was 300 * (0.5) so we get 150.
8. Still does the same as number 4. Returns the same discounted prices in an array.
9. Error because can't call i if not global which it isn't because inside for loop. 
10. Prints 3 to console log because length is the size of prices which is 3 (100, 200, 300)
11. Returns the array [50, 100, 150] which is calculated through the for loop
12.  
    1. console.log(student.name);
    2. console.log(student['Grad Year']); 
    3. console.log(student.greeting());
    4. console.log(student.courseLoad[0]);
    5. console.log(student['Favorite Teacher'].name);
    Sarah
    2022
    Hello!
    undefined
    CSE 110
    Thomas Powell
13.  
    1. '32' because string conversion adding 2 strings
    2. 1 because numeric conversion '-' sign
    3. 3 because null does nothing to 3
    4. '3null' because string conversion
    5. 4 because numeric conversion where true becomes 1 and add
    6. 0 because numeric converison where false becomes 0 and adding to null which is nothing
    7. '3undefined' because string conversion
    8. NaN because can't do subtraction to values no numbers
14.  
    1. true because numeric conversion and 2 > 1
    2. false because string comparison and compares 1st character at a time 2 < 1 which not true
    3. true because numeric conversion and 2 == 2
    4. false because checks strict equality without type conversion where 2 != '2'
    5. false because true = 1 and 1 != 2
    6. true because true and Boolean(2) are both same types and Boolean(2) returns true
15. The difference between == and === is that === does not do type conversion and checks if the values are equal while == does type checking to check equals. 
16. (check part2-question16.js)
17. We would get an array where the values are doubled. ModifyArray has two parameters, an array and a function. We perform pushes to our new array the number of elements in our array and make sure to call the function on the element then push into new one. Return the array at the end and should contain [2, 4, 6].
18. (check part2-question18.js)
19. The output is 1 4 3 2 each on separate lines. There is a delay between for when logging 2 and 3 because of timeout. However, 1 and 4 console log. Then 3 because shorter timeout, then 2 because longest.
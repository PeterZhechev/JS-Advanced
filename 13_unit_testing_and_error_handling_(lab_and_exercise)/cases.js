//1. Bad cases - function doesn't have needed correct parameters to work - usually it throws exception, but may return a special value
// 1.5 Edge cases for incorrect values just outside the valid range
//2. Good cases - the function works
// 2.5 Check with working values - more than 1 test to cover for defaults
// 2.6 Check edge cases for correct values
// 2.7 If there are a small consistent amount of correct return values, make sure you have checked them all
//3. Code coverage - have I tested every condition on every line - line coverage
//4. Super Edge cases - value overflows, similiar code errors (used isNaN instead of Number.isInteger for example)
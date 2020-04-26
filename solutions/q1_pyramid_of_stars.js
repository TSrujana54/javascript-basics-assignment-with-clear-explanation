/* Write a program to build a `Pyramid of stars` of given height */


/* In this i consider 
"i" as row.
"j" as space.
"k" as symbol.

 here we have logic for spaces we use (total number of rows-row number) */

/*
   we can also give i=i+1 ,as i++(increment rows)
   we can also give j=j+1 ,as j++(increment space)
   we can also give k=k+1 ,as k++(increment symbol)
*/
const buildPyramid = (num) => {
  let pyramid = '';
  for(let i = 0; i < num; i = i + 1) {
        for(let j = 0; j < num - i; j = j + 1) {
          pyramid += ' ';/*to print spaces*/
        }
        for(let k = 0; k <= i; k = k + 1) {
          pyramid += '* ';/*to print symbol*/
        }
        pyramid += ' \n';/*new line*/
    }
  return pyramid;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;

# Data Structures and Algorithms

## Code challanges table of contents

| challanges          | Link                                                            |
| ------------------- | --------------------------------------------------------------- |
| Class 01            | [class01](./code-challenges/class01/class01.md)                 |
| Class 02            | [class02](./code-challenges/class02/class02.md)                 |
| Class 05            | [class05](./code-challenges/class05%20Linked%20List/class05.md) |
| Class 03            | [class03](./code-challenges/class03/class03.md)                 |
| Class 06            | [class06](./code-challenges/class06/class06.md)                 |
| Class 07            | [class07](./code-challenges/class07/class07.md)                 |
| Class 08            | [class08](./code-challenges/class08/class08.md)                 |
| Class 10            | [class10](./code-challenges/stack-and-queue/class10.md)         |
| Class 11            | [class11](./code-challenges/class11/class11.md)                 |
| Class 12            | [class12](./code-challenges/class12/class12.md)                 |
| Class 13            | [class13](./code-challenges/class13/class13.md)                 |
| Class 15            | [class15](./code-challenges/tree/tree.md)                       |
| Class 16            | [class16](./code-challenges/class16/class16.md)                 |
| Class 17            | [class17](./code-challenges/class17/class17.md)                 |
| Class 18            | [class18](./code-challenges/class18/class18.md)                 |
| Class 26            | [class26](./code-challenges/class26/class26.md)                 |
| Class 27            | [class27](./code-challenges/class27/class27.md)                 |
| Class 28            | [class28](./code-challenges/class28/class28.md)                 |
| Class 30            | [class30](./code-challenges/hashMap/hashMap.md)                 |
| Class 31            | [class31](./code-challenges/class31/class31.js)                 |
| Class 32            | [class32](./treeIntersection/tree-intersection.js)              |
| Class 33            | [class33](./code-challenges/class33/class33.js)                 |
| Class 35            | [class35](./code-challenges/graph/Graph.js)                     |
| Class 36            | [class36](./code-challenges/class36/GraphDeapth.js)             |
| Class 37            | [class37](./code-challenges/class37/class37.js)                 |
| Class 38            | [class38](./code-challenges/class38/class38.js)                 |
| Array.forEach()     | [forEach](./code-challenges/challenges-01.test.js)              |
| Array.map()         | [Map](./code-challenges/challenges-02.test.js)                  |
| Array filter()      | [filter](./code-challenges/challenges-03.test.js)               |
| Array sort()        | [sort](./code-challenges/challenges-04.test.js)                 |
| Array reduce()      | [reduce](./code-challenges/challenges-05.test.js)               |
| Value vs Reference  | [valueVSreference](./code-challenges/challenges-06.test.js)     |
| Array Methods       | [ArrayMethods](./code-challenges/challenges-07.test.js)         |
| Regular Expressions1| [RegEx1](./code-challenges/challenges-08.test.js)               |
| Object Iteration    | [Object](./code-challenges/challenges-09.test.js)               |
| 2D Arrays           | [2DArrays](./code-challenges/challenges-10.test.js)             |
| Method Chaining     | [MethodChaining](./code-challenges/challenges-11.test.js)       |

## Language: `JavaScript`

### Folder and Challenge Setup

Each type of code challenge has slightly different instructions. Please refer to the notes and examples below for instructions for each DS&A assignment type.

### Data Structure: New Implementation

- Create a new folder under the `javascript` level, with the name of the data structure and complete your implementation there
  - i.e. `linked-list`
- Implementation (the data structure "class")

  - The implementation of the data structure must be named `index.js`
  - Your implementation must be completed as a proper ES6 Class, and exported as a node module

    - Class Name must be `ProperCase`
    - Class Methods must be `camelCase`

    ```javascript
    class LinkedList {
      constructor() {
        // code
      }

      methodName() {
        // code
      }
    }
    module.exports = LinkedList;
    ```

- Tests
  - Create folder named `__tests__` and within it, a test file called `[data-structure].test.js`
    - i.e. `__tests__/linked-list.test.js`
    - Your tests will then need to require the data structure you're testing
      - i.e. `const LinkedList = require('../index');

### Data Structure: Extending an implementation

- Work within the data structure implementation
- Create a new method within the class that solves the code challenge
  - Remember, you'll have access to `this` within your class methods
- Tests
  - You will have folder named `__tests__` and within it, a test file called `[data-structure].test.js`
    - i.e. `__tests__/linked-list.test.js`
    - Add to the tests written for this data structure to cover your new method(s)

### Code Challenge / Algorithm

Code challenges should be completed within a folder named `code-challenges` under the `javascript` level

- Daily Setup:
  - Create a new folder under the `javascript` level, with the name of the code challenge
    - Each code challenge assignment identifies the branch name to use, for example 'find-maximum-value'
    - For clarity, create your folder with the same name, ensuring that it's `kebab-cased`
    - i.e. For a challenge named 'find-maximum-value', create the folder:`code-challenges/find-maximum-value`
  - Code Challenge Implementation
    - Each code challenge requires a function be written, for example "find maximum value"
    - Name the actual challenge file with the name of the challenge, in `kebab-case`
      - i.e. `find-maximum-value.js`
    - Reminder: Your challenge file will then need to require the data structure you're using to implement
      - i.e. `const LinkedList = require('../linked-list');
    - Your challenge function name is up to you, but it's recommended that you use camel case
      - i.e. `function findMaximumValue(list) { ... }`
    - Be sure to export your function so that you can write tests
  - Tests
    - Create folder named `__tests__` and within it, a test file called `[challenge].test.js`
      - i.e. `__tests__/find-maximum-value.test.js`
      - Your test file would require the challenge file found in the directory above, which has your exported function
        - i.e. `const reverse = require('../find-maximum-value.js');

## Running Tests

If you setup your folders according to the above guidelines, running tests becomes a matter of deciding which tests you want to execute. Jest does a good job at finding the test files that match what you specify in the test command

From the `data-structures-and-algorithms/javascript` folder, execute the following commands:

- **Run every possible test** - `npm test`
- **Run a test for a data structure** - `npm test linked-list`
- **Run a test for a specific challenge** - `npm test reverse-ll`

#### Live Tests

Note that when you check your code into GitHub, all of your tests will automatically execute. These results should match your own, and will be found on the **Actions** tab


## Javascript Assignments 

To start javascript assignments please follow the next steps:
*  [Fork this repo](#user-content-how-to-fork-this-repo)
*  [Setup the work environment](#user-content-how-to-setup-work-environment)
*  [Implement assignments using TDD fashion](#user-content-how-to-implement-assignments-using-tdd-fashion)
*  [How to debug tasks](#how-to-debug-tasks)

### How to fork this repo
* Click the **Fork** button at the top-right corner of this page and the repository will be copied to your own account.
* Run `git clone https://github.com/<your-account>/js-assignments.git` from command line to download the repo.


### How to setup work environment
* Download and install the latest [Nodejs](https://nodejs.org/en/download/stable/).
* Run `npm install` from you repository folder to download the required modules. All dependent modules will be located in the  *node_modules* folder.
* Open your favorite editor and complete tasks.
* Open your terminal and use `npm test` command to run all tests. You can run single file by passing it as argument `npm test ./test/01-strings-tests.js`.
* The local repo folder has the following structure: <pre>
    node_modules - app dependences restored by `npm install` command, you can delete this folder and restore later again.
    task - folder with tasks modules, it's your main folder.
    test - folder with tests modules to verify the tasks completion.
</pre>

### How to implement assignments using TDD fashion
Now you are ready to implement assignments. Tasks modules are located in the **task** folder. Each module consists of several tasks for specified topic. Each task is usually a regular function:
```javascript
  /**
   * Returns the result of concatenation of two strings.
   *
   * @param {string} value1
   * @param {string} value2
   * @return {string}
   *
   * @example
   *   'aa', 'bb' => 'aabb'
   *   'aa',''    => 'aa'
   *   '',  'bb'  => 'bb'
   */
  function concatenateStrings(value1, value2) {
     throw new Error('Not implemented');
  }
```
Resolve this task using the following [TDD steps](https://en.wikipedia.org/wiki/Test-driven_development#Test-driven_development_cycle):
* Run unit tests and make sure that everything is OK and there are no failing tests.
* Read the task description in the comment above the function. Try to understand the idea. 
* If you got it you are to write unit test first, but unit tests are already prepared :) Skip step with writing unit tests.
* Remove the throwing error line from function body
```javascript
     throw new Error('Not implemented');
```
and run the unit tests again. Find one test failed (red). Now it's time to fix it!
* Implement the function by any way and verify your solution by running tests until the failed test become passed (green).
* Your solution works, but now time to refactor it. Try to make your code as pretty and simple as possible keeping up the test green.
* Once you can't improve your code and tests are passed you can commit your solution.
* If everything is OK you can try to resolve the next task.

### How to debug tasks
To debug tests you can use **Node inspector**. To install it just run `npm install -g node-inspector` in your terminal. Then follow next steps:
* Add `debugger;` to the first line of your task.
* Run your test file with `npm run test-debug ./test/01-strings-tests.js`.
* In another terminal run `node-inspector` and copy link from the output.
* Open the link in your favorite browser. You should see Chrome Developers Tools like interface where you can debug your tasks.
* When you found and fix your issue, close the browser's tab with the debug tools, stop the node-inspector by pressing Ctrl-C, stop the test runner by pressing Ctrl-C, remove the `debugger;` from your task.

### How to debug (beginner's way)
There is an easier way to debug for beginners with free Visual Studio Code:
* Install VSC from https://code.visualstudio.com/
* Open project folder in VSC and follow the instruction from https://code.visualstudio.com/docs/runtimes/nodejs#_debugging-your-node-application to create a default `launch.json`
* Modify the `launch.json` in the IDE, set the properties "program" and "args" (empty "args" value run all tests, to run particular test specify this test file in "args"):
```
{
    "version": "0.2.0",
    "configurations": [
        {
           ...
           "program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
           ...
           "args": ["./test/01-strings-tests.js"],
           ...
         },
         ...
     ]
}
```
* Click in the red dot to the left of the line number to set the breakpoint. Press `F5` to run debug.
* NOTE: The `launch.json` is stored in the `.vscode` project folder.



// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Process = require("process");
var Readline = require("readline");

Readline.clearLine(Process.stdout, 1, (function (param) {
        console.log("line cleared");
      }));

Readline.clearScreenDown(Process.stdout, (function (param) {
        console.log("screen cleared");
      }));

Readline.cursorTo(Process.stdout, 1, 2, (function (param) {
        console.log("cursor to");
      }));

Readline.moveCursor(Process.stdout, 1, 2, (function (param) {
        console.log("cursor moved");
      }));

/*  Not a pure module */

let fs = require("fs");

let markup = "<h1>Hey!</h1>";

function test() {
  fs.writeFileSync("test.html", "<!DOCTYPE html>" + markup);
}

test();

const fs = require("fs");
// What to learn in fs ?
// write file
// appendfile
// copyfile
// rename file
// unlink
// fs.writeFile("hey.txt", "Pabna data", function (err) {
//   if (err) console.error(err);
//   else console.log("Done");
// });

// fs.appendFile("hey.txt", " Lima data lala data lima lima", function (err) {
//   if (err) console.error(err);
//   else console.log("Append Done");
// });

// fs.rename("hey.txt", "hello.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("rename Done");
// });

// fs.copyFile("hello.txt", "./copy/copyofhell.txt", function (err) {
//   if (err) console.error(err.message);
//   else console.log("CopyFile Done");
// });

// fs.unlink("hey.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("Delete Done");
// });

fs.rm("./lima", { recursive: true }, function (err) {
  if (err) console.error(err);
  else console.log("Removed ");
});

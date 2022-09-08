const fs = require("fs");
//tìm tất cả các file có đuôi là .html rồi readfile
fs.readdir("./", function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files.forEach(function (file) {
    if (file.includes(".html")) {
      fs.readFile(file, "utf8", function (err, data) {
        if (err) throw err;
        data = data.replace(/download/g, "");
        fs.writeFileSync(file, data);
      });
    }
  });
});

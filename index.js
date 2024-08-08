const fs = require("node:fs");

fs.readFile("./mobile_number_list.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) throw err;

  const string_mobile_numbers = data.split("\r\n").join('","');

  const query =
    'SELECT `id`, `phone`, `state` FROM `custom_auth_applicationuser` where phone in ("' +
    string_mobile_numbers +
    '") order by phone asc';

  console.clear();
  console.log(
    "\n\n *//*//*//*//*//*//*//* GENERATED QUERY *//*//*//*//*//*//*//*\n\n\n"
  );
  console.log(query);
  console.log("\n\n\n\n");
});

var seed = 1009;
var a = 198349314545;
var b = 31754705969;
var m = 13487650879;
function() generate{
  seed = (a*seed + b) % m;
  console.log(seed);
  console.log("Random");
  setTimeout(generate(), 1000);
}
generate();


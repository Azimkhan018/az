
function greet(name,cb){
    console.log("hello " + name + "!");
    cb();
}
  function vclg(){
    console.log("goodbye");
}
greet("azim",vclg);



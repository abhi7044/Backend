let args = process.argv;
for(let i=2; i<args.length; i++){
    console.log("hello & welcome to, ", args[i]);
}
console.log(process.argv);
// node Process-Node.js abhijeet, bhumi, preeti, preetam

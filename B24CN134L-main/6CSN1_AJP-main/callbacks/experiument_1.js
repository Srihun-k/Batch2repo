function add(a,b,callback){
    setTimeout(()=>{
        const sum=a+b
        callback(sum)
    },0);
}  
function sub(a,b,callback){
    setTimeout(()=>{
        const sum=a-b
        callback(sum)
    },0);
}
function mul(a,b,callback){
    setTimeout(()=>{
        const sum=a*b
        callback(sum)
    },0);
}
function div(a,b,callback){
    setTimeout(()=>{
        const sum=a/b
        callback(sum)
    },0);
}

for(let i=0;i<=100;i++){
add(2,3,function(sum){
    console.log("Add",sum)  
})
sub(2,3,function(sub){
    console.log("Sub",sub)
})
mul(2,3,function(mul){
    console.log("mul",mul)
})
div(2,3,function(div){
    console.log("div",div)
})
}

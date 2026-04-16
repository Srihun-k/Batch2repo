
// this code was synchronus, but node was async
function fetchdata(){
    setTimeout(()=>{
        return "Data from server"
    },0)
}

function main(){
    let data=fetchdata()
    console.log("revieved",data)
}

// main();





//this code was async

function fetchdata_1(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Data received from server")
        }, 1000);
    })
}

async function getData(){
    console.log("feteching data")
    let result=await fetchdata_1()
    console.log(result)
}

// getData()

console.log(typeof null)
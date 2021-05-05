//Debouncing 
let counter = 0;
const getData = () => {
    //api calls
    console.log("Fetching the data", counter++);
}


const debounce = function (fn, d) {
//initializing the timer for timeout 
    let timer;

    return function () {
        let context = this,
            args = arguments;
            //clearing out the timer if there is an api hit within the delay
        clearTimeout(timer);
        //starting the timer 
        //apply method takes the arguments as an array 
        timer = setTimeout(() => {
            getData.apply(context, args);
        }, d);
    }
}

//providing the function and delay as arguments
const betterFunction = debounce(getData, 300);

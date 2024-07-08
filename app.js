const counterNum = document.querySelectorAll(".counter-numbers")
const speed = 10;

counterNum.forEach((curElm) => {
    const updateNumber = ()=>{
        const targetNumber = parseInt(curElm.dataset.number);
        // console.log(targetNumber)

        const initialNum  = parseInt(curElm.innerText);
        // console.log(initialNum)

        const incrementNumber = Math.trunc(targetNumber/speed);
        console.log(incrementNumber )

        if (initialNum < targetNumber){
            curElm.innerText = `${initialNum + incrementNumber}+`;

            setTimeout(updateNumber,100)
        }
    };
    
    updateNumber();
});
function fibo(){
    let i = 0, j = 1
    console.log(i);
    console.log(j);
    for(let x = 2; x <10; x++){
        let n = i+j;
        console.log(n)
        i = j;
        j = n;
    }
}

fibo();
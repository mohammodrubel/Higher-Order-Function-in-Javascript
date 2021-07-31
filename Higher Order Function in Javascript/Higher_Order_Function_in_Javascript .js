
function sum (a,b){
    return a + b
}

    function innerFunction (a,b,func){
        var c = a + b
        var d = a - b

            function maltiple(){
                var m = func(a , b)
                return c*d*m
            }
        return maltiple
    }

    var maltiple = innerFunction(4,5,sum)
    console.log(maltiple ())





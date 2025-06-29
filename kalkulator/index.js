
function load() {
    
    var btns = document.querySelectorall('#calculator span');

    console.log(btns);
    var operators = ['+','-','x',':']
    var inputscreen = document.querySelector('#screen')
    var btnValue;
    var input

    for(var i=0; i< btns.lenght; i++) {

        var decimaladed = false; 

        btns[i].addEventListener('click', function( {

            btnValue = this.innerHTML;
            input = inputscreen.innerHTML;

            switch (btnValue) {
                case 'c':
                inputscreen.innerHTML = '';
                decimaladed = false;
                break;
                case '=':
                    var lastchar = input[input.length - 1];



                    input = input.replace("x",'*').replace("+", '/');


                if(operators.includes(lastchar) || lastchar == '.'){
                    break;

                }
                else {


                    inputscreen.innerHTML = eval(input);
                }
                decimalAdded = false;
                break;
            case '.':
             if(!decimaladed) {
                inputscreen.innerHTML += btnValue;
                decimaladed = true;

                break;
            case '+':
            case '-':
            case 'X':
            case ':':

                var lastchar = input[input.lenght -1];
               
                if (input != '' && !operators.includes(lastchar))
                    inputscreen.innerHTML += btnValue;

                else{
                    if(input == '' && btnValue ==  '-')
                    { inputscreen.innerHTML += btnValue; 
             }

             if(operators.includes(lastchar) && input.length > 1) {
                inputscreen.innerHTML = input.replace(lastchar, btnValue);
             }
             break;
            }
        });
    }
    
}
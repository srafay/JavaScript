
            var op = window.prompt("Enter operator sign : ");
            var n1 = window.prompt("Enter number 1 : ");
            var n2 = window.prompt("Enter number 2 : ");
            var res;
            if (op==='+'){
                res=n1+n2;
            }
            else if (op==='-'){
                res=n1-n2;
            }
            else if (op==='/'){
                res=n1/n2;
            }
            else if (op==='*'){
                res=n1*n2;
            }
            document.getElementById("answer").innerHTML =
                "Answer of " + n1 + " " + op + " " + n2 + " = " + res;


		var op = window.prompt("Enter operator sign");
		var num1 = window.prompt("Enter number 1 : ");
		num1 = parseInt(num1);
		var res;
		if (op === '$'){
			res=Math.sqrt(num1);
		}
		else{
			var num2 = window.prompt("Enter number 2 : ");
			num2 = parseInt(num2);
			if (op === '+'){
				res = num1 + num2;
			}
			else if (op === '-'){
				res = num1 - num2;
			}
			else if (op === '*'){
				res = num1 * num2;
			}
			else if (op === '/'){
				res = num1 / num2;
			}
			else
			window.alert("Unknown operator");
		}
		window.alert("Result : " + res);

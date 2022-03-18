const readline = require('readline');

const reader = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})


reader.question("Quanto você pesa? ", (answer) => {
    peso = parseInt(answer);

    reader.question("Qual sua altura? ", (answer) => {
        altura = parseInt(answer);

        const IMC = peso / (altura * altura / 10000);

        console.log(IMC.toFixed(2))

        if(IMC < 16)
				{console.log("Magreza Grave");
			  }

				else if(IMC > 16 && IMC < 17)
    		{
    			console.log("Magreza Moderada");
    		}

				else if(IMC > 17 && IMC < 18.5)
    		{
    			console.log("Magreza Leve");
    		}

    		else if(IMC > 18.5 && IMC < 25)
    		{
    			console.log("Peso Ideal");
    		}

    		else if(IMC > 25 && IMC < 30)
    		{
    			console.log("Sobrepeso");
    		}

    		else if(IMC > 30 && IMC < 35)
    		{
    			console.log("Obesidade Grau I");
    		}

    		else if(IMC > 35 && IMC < 40)
    		{
    			console.log("Obesidade Grau II (considerada severa)");
    		}

    		else if (IMC > 40)
    		{
    			console.log("Obesidade Grau III (considerada morbida)");
    		}
    		
    })
})







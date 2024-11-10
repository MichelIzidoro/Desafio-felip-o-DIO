let heroi =["Aquiles","Jason","hercules","belerofonte","Perseu","Teseu","Ulisses","Zeus"];
let xp = 9000

if (xp <= 1000) {
    console.log(heroi[0] + " Seu nível é FERRO");
}
else if (xp >= 1001 && xp <= 2000) {
    console.log(heroi[1] + " Seu nível é BRONZE");
}
    else if (xp >= 2001 && xp <= 5000) {
        console.log(heroi[2] + " Seu nível é PRATA");
    }

        else if (xp >= 5001 && xp <= 7000) {
            console.log(heroi[3] + " Seu nível é OURO");
        }

            else if (xp >= 7001 && xp <= 8000) {
                console.log(heroi[4] + " Seu nível é PLATINA");
            }

                else if (xp >= 8001 && xp <= 9000) {
                    console.log(heroi[5] + " Seu nível é ASCENDENTE");
                }
                
                    else if (xp >= 9001 && xp <= 10000) {
                        console.log(heroi[6] + " Seu nível é IMORTAL");
                    }
                        else if (xp >= 10000) {
                            console.log(heroi[7] + " Seu nível é RADIANTE");
                        }
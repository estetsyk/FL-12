if (confirm('Do you want to play a game?')) {
    let playFromTheBegining = true;
    while (playFromTheBegining) {
        let n = 8;
        let totalPrice = 0;
        let priceMax = 100;
        let playContinue = true;
        while (playContinue) {
            let target = Math.floor(Math.random() * (n + 1));
            console.log(target);
            let priceAttempt = priceMax;
            for (let attemptsLeft = 3; attemptsLeft > 0; attemptsLeft--) {
                let input = prompt(
                    `Choose a roulette pocket from 0 to ${n}
Attemps left: ${attemptsLeft}
Total price: ${totalPrice}$
Possible price on current attempt: ${priceAttempt}$`);
                if (target === parseInt(input,10)) {
                    totalPrice = totalPrice + priceAttempt;
                    if (confirm(
                        `Congratulation, you won!   Your prize is: ${priceAttempt} $. Do you want to continue?`)) {
                        n = n + 4;
                        priceMax = 2 * priceMax;
                        break;
                    } else {
                        alert(`Thank you for your participation. Your prize is: ${totalPrice} $`)
                        if (!confirm(`Do you want to play again?`)) {
                            playFromTheBegining = false;
                        }
                        playContinue = false;
                        break;
                    }
                } else {
                    priceAttempt = priceAttempt / 2;
                    if (attemptsLeft === 1) {
                        alert(`Thank you for your participation. Your prize is: ${totalPrice} $`);
                        if (confirm(`Do you want to play again?`)) {
                            playContinue = false;
                            break;
                        } else {
                            playContinue = false;
                            playFromTheBegining = false;
                            break;
                        }
                    }
                }
            }
        }

    }
} else {
    alert(`You did not become a billionaire, but can.`);
}




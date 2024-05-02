const Challenge = () => {


    const number1 = 10;
    const number2 = 9;

    const sumNumbers = () => {
        console.log(number1 + number2)
    };

    return (
        <div>
            <h2>Seus números da sorte são: {number1} e {number2}</h2>
            <button onClick={() => console.log(number1 + number2)}>
                Clique aqui para somá-los!
            </button>

            <button onClick={sumNumbers}>
                Clique aqui para somá-los!
            </button>
        </div>
    )
}


export default Challenge;
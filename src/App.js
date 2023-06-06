import {useState} from "react";


function App() {

    // состояние состоит из 2-х элементов: значение и функция для изменения значения
    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(null);

    function onClickIncrement() {
        setNumber(number + 1)
        console.log("ТЫк!")
    }

    function onClickDecrement() {
        setNumber(number - 1)
        console.log("ТЫк!")
    }

    function onClickSetText(newValue) {
        setValue(newValue)
        console.log("new text in h1")
    }


    return (
        <div className="App">
            Приложение работает!
            <h1>
                {number}
            </h1>
            <button className="but" onClick={onClickIncrement}>
                +1
            </button>
            <button className="but" onClick={onClickDecrement}>
                -1
            </button>

            <div>
                <h1>{value}</h1>
                <input
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <button className="textBut" onClick={() => onClickSetText(value)}>
                    Изменить заголовок с помощью кнопки
                </button>
            </div>
        </div>



    );
}

export default App;

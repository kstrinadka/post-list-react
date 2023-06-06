import {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";


function App() {

    const [value, setValue] = useState(null);

    function onClickSetText(newValue) {
        setValue(newValue)
        console.log("new text in h1")
    }


    return (
        <div className="App">
            Приложение работает!
            <Counter/>
            <ClassCounter/>

            <div>
                <h1>{value}</h1>
                <input
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <button
                    className="textBut"
                    onClick={() => onClickSetText(value)}>

                        Изменить заголовок с помощью кнопки
                </button>
            </div>
        </div>



    );
}

export default App;

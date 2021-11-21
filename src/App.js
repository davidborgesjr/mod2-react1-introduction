import Header from "./components/Header";
import Main from "./components/Main";
import {useEffect, useState} from "react";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import {getAgeFrom} from "./helpers/dateHelpers";
import {getNewId} from "./services/idservice";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";
import OnlineOfficeLine from "./components/OnlineOffiline";

export default function App() {

    const [name, setName] = useState('David');
    const [birthDate, setBirthDate] = useState('1997-03-31');
    const [showTimer, setShowTimer] = useState(false);
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        document.title = name;
    }, [name]);

    useEffect(() => {
        //online
        //offline
        function onWindowOnline(){
            setIsOnline(true);
        };

        function onWindowOffline(){
            setIsOnline(false);
        };

        window.addEventListener('online', onWindowOnline);

        window.addEventListener('offline', onWindowOffline);

        return() => {
            window.removeEventListener('online', onWindowOnline);
            window.removeEventListener('offline', onWindowOffline);
        };
    }, [])

    function handleNameChange(newName) {
        setName(newName);
    }

    function handleBirthDate(newDate){
        setBirthDate(newDate)
    }

    function toggleShowTimer(){
        setShowTimer(currentShowtimer => !currentShowtimer);
    }

    return (
        <>
            <Header>Component Header - projeto react-hello</Header>
            <Main>
                <OnlineOfficeLine isOnline={isOnline}/>
                {
                    showTimer && (
                        <div className={"text-right mt-2"}>
                            <Timer/>
                        </div>
                    )
                }
                <CheckboxInput labelDescription={"Mostrar cronômetro"} onCheckboxChange={toggleShowTimer} />
                <TextInput id={getNewId()} labelDescription={"Digite seu nome"} inputValue={name} onInputChange={handleNameChange} autoFocus/>
                <DateInput id={getNewId()} inputValue={birthDate} onInputChange={handleBirthDate} labelDescription={"Digita sua data de nascimento"}/>
                <p>O seu nomé é {name}, com {name.length} caracteres, e você possui {getAgeFrom(birthDate)} anos.</p>
            </Main>

        </>
    );
}

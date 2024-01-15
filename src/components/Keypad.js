// Code Keypad Component Here

function Keypad () {
    function handleOnChange(event) {
        console.log('Entering password...')
        return event.target.value
    }
    return (
        <div>
            <input type="password" onChange={handleOnChange}></input>
        </div>
    )
}

export default Keypad;
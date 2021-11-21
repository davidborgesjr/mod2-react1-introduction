export default function DateInput(
    {
        labelDescription = 'Descrição do label',
        inputValue = '2021-04-30',
        onInputChange=null,
        id = 'date_input_id',
        autoFocus = false
    }){
    function handleInputChange({currentTarget}){
        if(onInputChange){
            const newValue = currentTarget.value;
            onInputChange(newValue)
        }
    }
    return (
        <div className={'flex flex-col my-4'}>
            <label htmlFor={id} className={'text-sm mb-1'}>
                {labelDescription}
            </label>
            <input autoFocus={autoFocus} id={id} className={"border p-1"} type={"date"} value={inputValue} onChange={handleInputChange}></input>
        </div>
    )
}

export default function CheckboxInput(
    {
        labelDescription = 'Descrição do checkbox',
        onCheckboxChange = null,
        id = 'input-checkbox-id',
        autoFocus = false
    }){
    function handleInputChange(){
        if(onCheckboxChange){
            onCheckboxChange()
        }
    }
    return (
        <div className={'flex flex-row items-center space-x-2 my-4'}>
            <input autoFocus={autoFocus} id={id} className={"border p-1"} type={"checkbox"} onChange={handleInputChange}></input>
            <label htmlFor={id} className={'text-sm mb-1'}>
                {labelDescription}
            </label>
        </div>
    )
}

function onButtonClickHandler(event)
{
    console.log(event);
    console.log("Hello How Are You ?");
}

function onTextChangeHandler()
{
    console.log("You Pressed Key.");
}

function onKeyPressHandler(eventData)
{
    //console.log(eventData);
    if(eventData.srcElement.id === 'username')
    {
        console.log("User Pressed A Key : ", eventData.key, ", In : ", eventData.srcElement.id);
        return
    }
    console.log("Mobile / Email Key : ", eventData.key, ", In : ", eventData.srcElement.id);
}
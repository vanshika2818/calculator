const input=document.getElementById("input")

function reverse(str)
{
    return str.split("").reverse().join("")
}
function check()
{
    const value=input.value;
    const rev=reverse(value)
    if(rev===value)
    {
        alert("palindrome");
    }
    else
    {
        alert("no")
    }
}
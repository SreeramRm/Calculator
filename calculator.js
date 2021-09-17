function clickhere(val)
{
document.getElementById("screen").value+=val;


}
function remove()
{
    document.getElementById("screen").value="";
}

function equal()
{

let text=document.getElementById("screen").value;

let result=eval(text);

    document.getElementById("screen").value=result;

}
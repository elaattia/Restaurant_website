function add(){
    x=document.getElementById("add").innerHTML;
    document.getElementById("add").innerHTML=parseInt(x)+1;
}
function show(){
    var drop=document.getElementById("dropdown")
    drop.style.display=drop.style.display=="block"?"none":"block"
  }
  function addd(){
    document.querySelectorAll('.but').forEach(item=> {
    item.addEventListener('click',event => {
        console.log(item.parentElement)
        itemcopy=item.parentElement.cloneNode(true);
        itemcopy.setAttribute("class","added-item")
        document.getElementById("dropdown").append(itemcopy)
    
  })
    })
  }
  function heart(){
    document.querySelectorAll('.fa-heart').forEach(item=> {
      item.addEventListener('click',event => {
        item.style.color= item.style.color=="red"?"grey":"red"
      
    })
      })
    

  }
  heart()
  addd()
//$(selector).accion
// $("h1").hide()
// $(document).ready(()=>{

// })

$(()=> {
  //Selectores: 
  //id= "el-1" => "#el-1"
  //class= ".el-1" => ".el-1"

  $(".Hide-btn").click(()=> {
    console.log("ocultando")
    //$("h1").hide()
    $("h1").fadeOut()
  })
  $(".Show-btn").click(()=> {
    console.log("Mostrando")
    //$("h1").show()
    $("h1").fadeIn()
  })
  $("li").click(()=>{
    $("h1").css({color: "red"})
  })
  $(".new-element").click(()=> {
    // $("ul").append("<li>New Element</li>")
    $("ul").prepend("<li>New Element</li>")
  })
  $("li").mouseenter((elem)=> {
    elem.target.style.color ="blue"
  })

  $("li").mouseleave(elem => {
    elem.target.style.color = "black"
  })
  
})

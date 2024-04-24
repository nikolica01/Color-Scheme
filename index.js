
 const message = document.getElementById("text")
 const btn= document.getElementById("btn")
 const container= document.getElementById('container')

const  generateColors = async () => {
    const colorType= document.getElementById("color-type").value
    const  color = document.getElementById("colors").value.substr(-6)

 const promise = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorType}&count=5`)
const data = await promise.json()

  console.log(data)
    container.innerHTML=""
  for( const color of data.colors){
   


   const colorContainer=document.createElement('div')
   const imageColor=document.createElement("img")
   imageColor.src=color.image.bare
   let colorText=document.createElement('p')
   colorText.classList.add("mouse")
   colorText.textContent = color.hex.value
   
   colorText.addEventListener("click",()=> copyToClipboard(color.hex.value))
   
   colorContainer.appendChild(imageColor)
   colorContainer.appendChild(colorText)
   container.appendChild(colorContainer)
   
  
}
    

    }

   const  copyToClipboard = (text)=> {
    const textarea = document.createElement('textarea')
    textarea.value=text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    alert("You are copy")
    console.log("Caoo")
    document.body.removeChild(textarea)
   }

    btn.addEventListener('click', generateColors)
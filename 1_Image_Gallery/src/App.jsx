import Card from "./components/Card"
import Input from "./components/Input"
import { useState ,useEffect } from "react"

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [inputBox , setInputBox] = useState("")

  // in vite use import.meta.env to access environment variables and environment variable must start with VITE_
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${inputBox}&image_type=photo&pretty=true`)
    .then((response)=>response.json())
    .then((data)=> {
      setImages(data.hits)
      setIsLoading(false)
  })
    .catch((err)=> console.log(err))
  }, [inputBox])
  return (
    <>
    <div className="container mx-auto">
      <Input
      textSetter = {(text)=> setInputBox(text)} />

      {!isLoading&&images.length===0 ?  <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>: 1 }

    { 
      (isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : 
        <div className="flex justify-center gap-5 flex-wrap"> 
      {images.map((image)=>(
        <Card
        key = {image.id} 
        src = {image.webformatURL}
        tags = {image.tags}
        views = {image.views}
        likes = {image.likes}
        downloads = {image.downloads}
        user = {image.user}
        />
      ))}
    </div>
      )
}
  </div>
    </>
  )
}

export default App

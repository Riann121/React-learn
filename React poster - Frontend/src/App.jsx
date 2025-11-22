import { useState } from "react"
import MainHeader from "./components/MainHeader"
import { PostsList } from "./components/PostsList"
function App() {
      const [isVisible,setIsVisible] = useState(true)

      function invisibleHandler(event){
            setIsVisible(false)
      }
      function visibleHandler(event){
            setIsVisible(true)
      }
  return (
      <>
            <MainHeader onCreatePost = {visibleHandler}/>
            <div >
                  <PostsList isPosting = {isVisible} visibleStatusHandler = {invisibleHandler}/>
            </div>
      </>
   )
}

export default App


import './App.css'

function App() {
  
  return (
    <>
    <img class="w-40 aspect-square object-cover" src="thor.jpg" />
    <div class="aspect-auto">
  <p>This grows based on content</p>
</div>
<img class="w-64 aspect-4/3 object-cover" src="thor.jpg" />
{/* <div class="columns-3 md:columns-auto">
  <img src="thor.jpg" />
  <img src="thor.jpg" />
  <img src="thor.jpg" />
</div> */}
<div class="columns-2 break-after-column md:break-after-auto ">
  <p>Well, let me tell you something, ...</p>
  <p class="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
<div class="columns-2 break-inside-avoid-column md:break-inside-auto">
  <p>Well, let me tell you something, ...</p>
  <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
<span className="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ">
  Hello<br />World
</span><br />
<span className=" bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white box-decoration-clone md:box-decoration-slice">
  Hello<br />World
</span>




    </>
  )
}

export default App

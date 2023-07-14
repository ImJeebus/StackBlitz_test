import React, {useState,useEffect} from 'react'; // importing react the default export, and useState which is named export.
import Another from './Another.tsx';

const App = () => {
  const [counter,setCounter] = useState(0) //function use () to call it. add value inside
  useEffect( () => {
    // console.log("counter has changed")
    if (counter === 0) { // === checks equal with type equality 
      return
    }
    // window.alert("counter changed")
    console.log(counter)
  }, [counter] )  // when counter changes we want to do above in curly brackets
  return ( // use return () to return multiple things. need to wrap in a fragment <></>. can only return 1 thing at a time.
    <div onClick = { () => setCounter(counter+1)} >
      {counter}
      <Another/>
    </div>
  );
};





export default App;

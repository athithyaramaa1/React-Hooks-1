import { useState } from "react"
import { ToggleTheme } from "./Prog6"
import UseContext2 from "./UseContext2"

const Prog7 = () => {

    const [state, setState] = useState(true)

    const handleToggle = () => {
        setState(state=>!state)
    }
  return (
    <div>
      <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext2/>
    </ToggleTheme.Provider>
    </div>
  )
}

export default Prog7;

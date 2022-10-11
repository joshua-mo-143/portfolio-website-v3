import React, {useState} from 'react'

const useModal = () => {

    const [vis, setVis] = useState(false);

    function toggle() {
        setVis(!vis);
    }

  return {vis,
toggle,
}
}

export default useModal
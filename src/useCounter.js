import { useState } from "react";

function useCounter() {
  const [state, setState] = useState(0);
  const handleState = () => {
    setState((currentState) => currentState + 1);
  };

  const handleTripple = () => {
    handleState();
    handleState();
    handleState();
  };
  return [state, handleState, handleTripple];
}

export default useCounter;

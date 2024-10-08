import { useState, useEffect } from "react";

function useHookFunction (keyStates) {
    const [pressedKey, setPressedKey] = useState();

  useEffect(() => {
    function keyPressedHandler(event) {
      const pressedKey = event.key;

      if (!keyStates.includes(pressedKey)) {
        alert('Invalid key!');
        return;
      }
      setPressedKey(pressedKey);
    }

    window.addEventListener('keydown', keyPressedHandler);

    return () => window.removeEventListener('keydown', keyPressedHandler);
  }, [keyStates]);

  return pressedKey;
}
export default useHookFunction;

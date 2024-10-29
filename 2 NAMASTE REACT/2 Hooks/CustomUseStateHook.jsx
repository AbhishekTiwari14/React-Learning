let state; // This will hold the current state
let listeners = []; // This array will hold all the state change listeners

function customUseSteteFxn(initialValue) {
  // Set the state to the initial value if it's not already set
  state = state || initialValue;

  // Update the state function
  function setState(newState) {
    state = newState;

    // Notify all listeners that the state has changed
    listeners.forEach(listener => listener());
  }

  // Push the listener to the listeners array
  listeners.push(() => {});

  // Return the current state and the setState function
  return [state, setState];
}

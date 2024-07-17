export function applyInputRangeStyle() {
  const inputRange = document.querySelector("#selectorPrice__input");
  
  inputRange.addEventListener("input", (event) => {
    const currentInputValue = event.target.value;
    const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
    
    inputRange.style.background = `linear-gradient(to right, var(--brand-1) ${runnableTrackProgress}%, var(--gray-5) ${runnableTrackProgress}%)`;
  });
}
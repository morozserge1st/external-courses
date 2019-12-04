export const Button = (className, children) => {
  const button = document.createElement('button');
  button.className = className;
  button.innerHTML = children;

  return button; 
}
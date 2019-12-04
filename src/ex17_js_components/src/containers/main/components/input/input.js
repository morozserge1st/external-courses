import {addIssue} from '../../main-controller';
import './input.css';

export const Input = () => {
  function removeInput() {
    this.removeEventListener('blur', removeInput);
    if (this.value.trim()) {
      const issue = {
        id: Math.random(),
        name: this.value
      };  
      addIssue(issue, 0);
    }
    this.parentNode.remove();
  }

  const wrap = document.createElement('div');
  wrap.className = 'wrap';
  
  const input = document.createElement('input');
  input.className = 'input';
  wrap.append(input);

  input.addEventListener('blur', removeInput);

  return wrap;
};

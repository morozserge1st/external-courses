import {cards, addIssue, deleteIssue} from '../../main-controller';
import './select.css';

export const Select = (index) => {
  function removeSelect() {
    this.removeEventListener('blur', removeSelect);
    if (this.selectedIndex) {
      const issueId = +this[this.selectedIndex].id;
      const issue = cards[index - 1].issues.find(x => x.id === issueId);
      deleteIssue(issueId, index - 1);
      addIssue(issue, index);
    }

    this.parentNode.remove();
  }

  const wrap = document.createElement('div');
  wrap.className = 'wrap';

  const select = document.createElement('select');
  select.className = 'select';
  wrap.append(select);

  const option = document.createElement('option');
  select.append(option);

  cards[index - 1].issues.map(issue => {
    const option = document.createElement('option');
    option.id = issue.id;
    option.value = issue.name;
    option.textContent = issue.name;
    select.append(option);
  });

  select.addEventListener('blur', removeSelect);

  return wrap;
};

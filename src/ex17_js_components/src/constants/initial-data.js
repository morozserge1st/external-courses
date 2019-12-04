const localStorageData = JSON.parse(localStorage.getItem('data'));
export let initialData = localStorageData ? localStorageData : [
  {
    id: 1,
    title: 'backlog',
    issues: [],
  },
  {
    id: 2,
    title: 'ready',
    issues: [],
  },
  {
    id: 3,
    title: 'in progress',
    issues: [],
  },
  {
    id: 4,
    title: 'finished',
    issues: []
  }
];

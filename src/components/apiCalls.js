export const fetchParentData = () => {
  return fetch('https://cool-parent-api.herokuapp.com/api/v1/parents/parentData/')
    .then(response => response.json())
    .catch(err => console.log(err))
}

export const fetchEventData = () => {
  return fetch('https://cool-parent-api.herokuapp.com/api/v1/parents/eventData/')
    .then(response => response.json())
    .catch(err => console.log(err))
}
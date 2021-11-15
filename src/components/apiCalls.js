export const fetchParentData = () => {
  return fetch('http://localhost:8080/api/v1/parents/parentData')
    .then(response => response.json())
    .catch(err => console.log(err))
}

export const fetchEventData = () => {
  return fetch('http://localhost:8080/api/v1/parents/eventData/')
    .then(response => response.json())
    .catch(err => console.log(err))
}
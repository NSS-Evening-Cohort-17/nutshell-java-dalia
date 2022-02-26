const remoteURL = "http://localhost:8088"

export const getTaskById = (taskId) => {
    return fetch(`${remoteURL}/tasks/${taskId}`)
    .then(res => res.json())
}

export const getAllTasks = () => {
    return fetch(`${remoteURL}/tasks`)
    .then(res => res.json())
  }
  
  export const deleteTask = (id) => {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  export const addTask = (newTask) => {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(response => response.json())
  }
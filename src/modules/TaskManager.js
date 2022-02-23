const remoteURL = "http://localhost:8088"

export const getTaskById = (taskId) => {
    return fetch(`${remoteURL}/tasks`)
    .then(res => res.json())
}

export const getAllTasks = ()
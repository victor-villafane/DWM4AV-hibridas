export function call({ uri, method = "GET", body = undefined }){
    const token = JSON.parse(localStorage.getItem("token"))
    
    return fetch(`http://localhost:2025/api/${uri}`, {
        method, //method: method
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(body)
    })
    .then( async res => {
        if(!res.ok) throw await res.json()
        return res.json()
    } )
} 
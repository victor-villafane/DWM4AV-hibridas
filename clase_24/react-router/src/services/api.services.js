const url = "https://dwm4av-back.onrender.com/api"
export function call({ uri, method = "GET", body = undefined }){
    const token = JSON.parse(localStorage.getItem("token"))
    
    return fetch(`${url}/${uri}`, {
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
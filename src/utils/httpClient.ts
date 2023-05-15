const API = "localhost:3000";

export function get(path: string){
    return fetch(API + path).then((result) => result.json())
}

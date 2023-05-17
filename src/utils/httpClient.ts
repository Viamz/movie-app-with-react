const API = "https://api.themoviedb.org/3";

export function get(path: string){
    return fetch(API + path, {
        headers: {
            Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDlkYzNkN2E4M2U4ZmMwOTRkZDIzZjQzMzc2ODQ4OSIsInN1YiI6IjY0NjI1NGFlOGM0NGI5MDExOWNiOGY2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-XNXg2ixq2jZYqmILekjkT9fQf-l6VUdARq0F_RgyY",
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then((result) => result.json())
}

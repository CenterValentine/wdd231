
// get request

const options = {
    method: 'GET',
    headers: {
        Authorization: `Bearer xau_7g9GgJeP1UcQ9EmL0OGrqc5YMOk5JHVj`,
        'Content-Type': 'application/json'
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`   
    }
}

console.log("Hello");

async function getRooms() {
    const response = await fetch('https://dan-valentine-s-workspace-33r67l.us-east-1.xata.sh/db/drift:main/tables/rooms/query', options)
    const data = await response.json();
    console.log(data);
    return data;
}



console.log(getRooms());
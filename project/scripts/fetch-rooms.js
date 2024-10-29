
// get request

const options = {
    method: 'GET',
    headers: {
        // unsecure token
        // Authorization: `Bearer xau_7g9GgJeP1UcQ9EmL0OGrqc5YMOk5JHVj`,
        'Content-Type': 'application/json'
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`   
    }
}

// console.log("Hello");

export async function getRooms() {
    const response = await fetch('https://driftrooms-dan256.replit.app/rooms', options)
    const data = await response.json();
    // console.table(data);
    return data;
}





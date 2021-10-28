import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://intense-scrubland-93823.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handleDelete = id => {
        const url = `https://intense-scrubland-93823.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }
    return (
        <div>
            <h1>Manage Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>Name: {service.name}</h3>
                    <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;
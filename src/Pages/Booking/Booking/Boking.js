import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Boking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://intense-scrubland-93823.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1>Details of : {service.name}</h1>
            <h1>This is booking {serviceId}</h1>
        </div>
    );
};

export default Boking;
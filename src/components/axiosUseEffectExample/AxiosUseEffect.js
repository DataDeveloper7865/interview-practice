import React, {useEffect, useState } from 'react';

function AxiosUseEffect() {
    const [ userName, setUserName ] = useState('steve');
    const [ profile, setProfile ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(function fetchUserWhenMounted() {
        async function fetchUser() {

            try {
                const userResult = await Axios.get(URL);
                setProfile(userResult.data);
            } catch (error) {
                setError(error.message)
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchUser();
    }, []);
    //If listening for changes to username use:
    //}, [userName]);

    if (isLoading) return <i> Loading ... </i>;
    else if (error) return <b> Oh no! {error} </b>
    else return (
        <div>
            <b>{profile.name}</b>
        </div>
    )
}

export default AxiosUseEffect;
import React, {useState, useEffect} from 'react';

function Details({info}) {

  const [user, setUser] = useState('');

  const getUser = async () => {

    if (!info) return false;

    const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
  }

  useEffect(() => {
    getUser();
  }, [info])

  if (user !== '') {
    return <UserDetails user={user} />
  } else {
    return <></>
  }
}

function UserDetails({user}) {
  return (
    <>
      <p><img src={user.avatar} /></p>
      <h2>{user.name}</h2>
      <p>{user.details.city}</p>
      <p>{user.details.company}</p>
      <p>{user.details.position}</p>
    </>
  )
}

export default Details;
export const saveUser = user => {
    const currentUser = {
      email: user.email,
    }
  
    fetch('https://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
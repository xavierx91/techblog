const createAccountFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    

    console.log(email);

    if (email && password ) {
        const response = await fetch('/api/createaccount', {
            method: 'POST',
            body: JSON.stringify({email, password,}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            const response2 = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
          });

            if (response2.ok) {
                document.location.replace('/dashboard');
            }
        }
        
    }
}   

document
.querySelector('#sign-up-form')
.addEventListener('click', createAccountFormHandler);
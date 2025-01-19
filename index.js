function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    informations.style.display = 'block';
    picture.setAttribute('src', data.picture);
    fullName.textContent = data.name;
    email.textContent = data.email;
  }
  window.onload = function () {
      google.accounts.id.initialize({
          client_id: "119186616803-m6oudm7d4dquqq3j0b8ngrduo7s16v38.apps.googleusercontent.com",
          callback: handleCredentialResponse
      });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } 
    );
    google.accounts.id.prompt();
  }

  
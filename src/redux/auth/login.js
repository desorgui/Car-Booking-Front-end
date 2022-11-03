const Login = async (event) => {
  event.preventDefault();
  const url = 'loginData.json';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: {
        email: user.user.email,
        password: user.user.password,
      },
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  const userInfo = {
    ...data.data,
    token: response.headers.get('Authorization'),
  };
  if (response.status === 200) {
    setAuth(localStorage.setItem('isAuth', true));
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    window.location.href = '/';
  }

  return data;
};

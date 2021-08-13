# ReactJS - Chat App 💬

```sh 
Current project status: Completed. ✅  
```

This is a react application that utilizes request from an API to allow users to chat:
  - Axios
  - ChatEngine API
  - Hooks
  - Sockets
  - Props

# ~ Code Example: 👨🏿‍💻 

Here is an example of Axios JS (a popular, promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node) being used to validate credentials.
```sh
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();

      const authObject = { 'Project-ID': "00000000-00000-0000-0000-0000000000", 'User-Name': user, 'User-Secret': pass }; 

      try {
        await axios.get('https://api.chatengine.io/chats', {headers: authObject });

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload();
      } catch (error) {
        setError('Oops, incorrect credentials.')
      }
  }

```

# ~ Project Preview: 🖼️ 
![](/public/chat-app-login.png) 
![](/public/chat-app.png) 

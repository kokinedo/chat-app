import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return<LoginForm />

  return(
    <ChatEngine 
        height="100vh"
        projectID="088d7bd9-b7bb-455b-bd72-d981c3c8c61a"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
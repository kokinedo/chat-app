import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return(
    <ChatEngine 
        height="100vh"
        projectID="088d7bd9-b7bb-455b-bd72-d981c3c8c61a"
        userName="kokinedo"
        userSecret="123123"
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
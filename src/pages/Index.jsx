import { Container, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  useEffect(() => {
    const chatIcon = document.querySelector('.voiceflow-chat-icon');
    const chatbot = document.querySelector('.voiceflow-chatbot');

    if (chatIcon && chatbot) {
      chatIcon.addEventListener('click', () => {
        chatbot.style.display = 'block';
        chatbot.style.position = 'fixed';
        chatbot.style.top = '50%';
        chatbot.style.left = '50%';
        chatbot.style.transform = 'translate(-50%, -50%)';
        chatbot.style.width = '400px';
        chatbot.style.height = '600px';
        chatbot.style.backgroundColor = '#fff';
        chatbot.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
      });
    }
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      </VStack>
      <div className="voiceflow-chat-icon" style={{ cursor: 'pointer', position: 'fixed', bottom: '20px', right: '20px', background: '#007bff', color: '#fff', padding: '10px', borderRadius: '50%' }}>Chat</div>
      <div className="voiceflow-chatbot" style={{ position: 'fixed', zIndex: 10000, display: 'none' }}></div>
      <script type="text/javascript">
        {`
          (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '661177d3da0ccc92fa634e1e' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production'
                });
              }
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
          })(document, 'script');
        `}
      </script>
    </Container>
  );
};

export default Index;
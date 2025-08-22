import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Inject Dialogflow messenger script
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    // Typing animation
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const messages = document.querySelectorAll('df-messenger-message');
          messages.forEach((msg) => {
            if (!msg.classList.contains('custom-typing') && msg.shadowRoot) {
              const content = msg.shadowRoot.querySelector('.message');
              if (content && content.textContent.trim() === '') {
                msg.classList.add('custom-typing');
                content.textContent = 'Typing...';
                setTimeout(() => {
                  content.textContent = '';
                }, 2500);
              }
            }
          });
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="sahayakBot"
      agent-id="bf16a267-a970-464f-ad96-2320cd73ea6e"
      language-code="en"
    ></df-messenger>
  );
};

export default Chatbot;
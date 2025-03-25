/**
 * Send a message via Telegram or other messaging systems
 * @param emailAddress - The email address of the sender
 * @param messageContent - The message content
 * @param messageType - The type of message (e.g., 'contact', 'beta-signup')
 * @returns Promise<{success: boolean, message: string}>
 */
interface MessageResponse {
  success: boolean;
  message: string;
}

export async function sendMessage(emailAddress: string, messageContent: string, messageType: 'contact' | 'beta-signup'): Promise<MessageResponse> {
  try {
    // Format the message based on type
    let formattedMessage = '';
    if (messageType === 'beta-signup') {
      formattedMessage = `🎉 Neue Beta-Anmeldung!\n\nE-Mail: ${emailAddress}\n\nNachricht:\n${messageContent || 'Keine Nachricht'}`;
    } else {
      formattedMessage = `📧 Neue Kontaktanfrage!\n\nE-Mail: ${emailAddress}\n\nNachricht:\n${messageContent}`;
    }

    // Send message using Netlify function
    const response = await fetch('/.netlify/functions/send-telegram-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: formattedMessage,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    const data = await response.json();
    
    return {
      success: true,
      message: messageType === 'beta-signup' 
        ? 'Vielen Dank für deine Anmeldung! Wir melden uns in Kürze bei dir.'
        : 'Vielen Dank für deine Nachricht! Wir melden uns in Kürze bei dir.'
    };
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      success: false,
      message: messageType === 'beta-signup'
        ? 'Bei der Anmeldung ist ein Fehler aufgetreten. Bitte versuche es später erneut.'
        : 'Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuche es später erneut.'
    };
  }
} 
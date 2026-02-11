import './ChatPage.css';

interface Message {
    id: number;
    user: string;
    time: string;
    text: string;
    avatar: string;
    alignment: 'left' | 'right';
}

const messages: Message[] = [
    {
        id: 1,
        user: 'VOLLSTRECKER',
        time: '00:15 Uhr',
        text: 'Es ist schon lange her, dass Sie sich an mich gewendet haben und meine Dienste in Anspruch nahmen… Um genau zu sein - 19 Jahre… Was kann ich diesmal für Sie tun?',
        avatar: 'http://199.247.4.133/wp-content/uploads/2021/09/icon-chat-killer.jpg',
        alignment: 'left'
    },
    {
        id: 2,
        user: 'Heinz',
        time: '00:21 Uhr',
        text: 'Das stimmt, aber die Umstände lassen es nicht anders zu… Ich würde den gleichen “Service” wie das letztes mal brauchen, nur dass es sich diesmal nicht um meine Frau, sondern um meine “Tochter” handelt. Sie lässt sich auf ältere Männer ein und jetzt ist sie sogar schwanger von so einem dahergelaufenen Lehrer! Sie besudelt den Familiennamen AMANN und stellt mich und meine Person in der Öffentlichkeit in ein schlechtes Licht. Sogar der Direktor, mein alter Studienkollege, hat sich schon gemeldet! Das werde ich nicht dulden!! Wenn sie schon meint, zu werden wie ihre Mutter, dann muss sie auch dorthin, wo diese ist! Die meinte auch ich bin so dumm und merke nicht, dass sie eine Affäre hatte und sogar daraus Mary entstanden ist. Und dann wollte sie mir noch das Kind unterschieben... In meiner Familie hätte es sicher nie ein Kind mit solchen psychischen Problemen gegeben! Und da gebe ich für meine NICHT leibliche Tochter 19 Jahre lang alles, biete ihr alles, was sie braucht und helfe ihr wo ich nur kann… Und das ist der Dank! Soll sie doch in der Hölle schmoren bei ihrer Mutter!',
        avatar: 'http://199.247.4.133/wp-content/uploads/2021/09/Heinz.png',
        alignment: 'left' // Based on screenshot, Heinz is also on left or maybe alternate? Let's check screenshot. 
        // In screenshot, BOTH avatars are on the left. It's a linear chat log style, not left/right messaging app style.
    },
    {
        id: 3,
        user: 'VOLLSTRECKER',
        time: '00:29 Uhr',
        text: 'Mich interessieren Ihre Beweggründe nicht! Für mich ist es nur ein Geschäft. Wenn Sie wollen, dass sie nie wieder jemand findet, dann kostet Sie das EUR 150.000,-... Dass mein Service diskret und zuverlässig ist, wissen Sie ja bereits… Soll ich mich darum kümmern?',
        avatar: 'http://199.247.4.133/wp-content/uploads/2021/09/icon-chat-killer.jpg',
        alignment: 'left'
    },
    {
        id: 4,
        user: 'Heinz',
        time: '00:34 Uhr',
        text: 'Ja, beenden Sie diese Schande! Baldmöglichst! Sagen Sie ihr noch, bevor sie es tun, dass sie ihren Vater enttäuscht hat und ihre gerechte Strafe nun bekommt!',
        avatar: 'http://199.247.4.133/wp-content/uploads/2021/09/Heinz.png',
        alignment: 'left'
    },
    {
        id: 5,
        user: 'VOLLSTRECKER',
        time: '00:41 Uhr',
        text: 'Das werde ich! Das Geld hinterlegen Sie in HITTISAU in dem gleichen Haus wie damals!',
        avatar: 'http://199.247.4.133/wp-content/uploads/2021/09/icon-chat-killer.jpg',
        alignment: 'left'
    }
];

export function ChatPage() {
    return (
        <div className="chat-container-wrapper">
            <div className="chat-header-bar">
                <span>User: IMPERATOR</span>
            </div>

            <div className="chat-content">
                <div className="chat-title-section">
                    <h1>Chatverlauf</h1>
                    <p>DARKNET – gesicherte Verbindung</p>
                </div>

                <div className="chat-divider">
                    ——— PROTOKOLL GESTARTET ———
                </div>

                <div className="messages-list">
                    {messages.map((msg) => (
                        <div key={msg.id} className="message-item">
                            {/* Avatar and Info on the left? No, screenshot shows text in bubble, and user info below/above? 
                  Let's re-examine screenshot.
                  Screenshot shows: Grey Bubble with Text. 
                  BELOW the bubble: Avatar (Left) + Username (Bold) + Time (Italic) next to it.
              */}

                            <div className="message-bubble">
                                {msg.text}
                                <div className="bubble-arrow"></div>
                            </div>

                            <div className="message-meta">
                                <img src={msg.avatar} alt={msg.user} className="user-avatar" />
                                <div className="user-info">
                                    <span className="user-name">{msg.user}</span>
                                    <span className="message-time">{msg.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

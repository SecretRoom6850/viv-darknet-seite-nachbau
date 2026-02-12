import { useState, useEffect } from 'react';
import './HackingScreen.css';

interface HackingScreenProps {
    onComplete: () => void;
}

export function HackingScreen({ onComplete }: HackingScreenProps) {
    const [lines, setLines] = useState<string[]>([]);

    const hackingText = [
        "> Initializing connection protocol...",
        "> Target: 199.247.4.133",
        "> Bypassing firewall (Port 443)... SUCCESS",
        "> Injecting payload...",
        "> Decrypting SSL handshake...",
        "> Accessing hidden database...",
        "> User 'caesar' found.",
        "> Verifying hash... MATCH",
        "> Establishing secure tunnel...",
        "> ACCESS GRANTED."
    ];

    useEffect(() => {
        let delay = 0;
        hackingText.forEach((line, index) => {
            // Randomize delay slightly for realism
            delay += Math.random() * 500 + 200;

            setTimeout(() => {
                setLines(prev => [...prev, line]);

                // Scroll to bottom
                window.scrollTo(0, document.body.scrollHeight);

                // If last line, finish
                if (index === hackingText.length - 1) {
                    setTimeout(onComplete, 1000);
                }
            }, delay);
        });
    }, []);

    return (
        <div className="hacking-container">
            <div className="terminal">
                {lines.map((line, i) => (
                    <div key={i} className="terminal-line">{line}</div>
                ))}
                <div className="cursor">_</div>
            </div>
        </div>
    );
}

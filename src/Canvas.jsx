import {useState, useEffect} from "react";

const Asteroid = () => {
    const canvasRef = useState(null);
    const [position, setPosition] = useState({x: 50, y: 50});

    useEffect(() => {
            const moveSpacechip = (e) => {
                setPosition((prev) => {
                    switch (e.key) {
                        case 'ArrowUp':
                            return {...prev, y: prev.y - 5};
                        case 'ArrowDown':
                            return {...prev, y: prev.y + 5};
                        case 'ArrowLeft':
                            return {...prev, x: prev.x - 5};
                        case 'ArrowRight':
                            return {...prev, x: prev.x + 5};
                        default:
                            return prev;
                    }
                });
            };
        window.addEventListener('keydown', moveSpacechip);
        return () => window.removeEventListener('keydown', moveSpacechip);
    }, []);
}

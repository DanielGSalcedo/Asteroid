import {useState, useEffect, useRef} from "react";

const AsteroidCanvas = () => {
    const canvasRef = useRef(null);
    const [position, setPosition] = useState({x: 50, y: 50});

    useEffect(() => {
        const moveNave = (e) => {

            setPosition((prev)=>{
                switch (e.key) {
                    case 'x':
                        return {...prev, y: prev.y + 10};
                }
            })
        }

        window.addEventListener('keydown', moveNave);
        return () => window.removeEventListener('keydown', moveNave);
    })

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Borra todo
        ctx.fillStyle = 'white'; // Color de la nave
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x - 10, position.y + 20);
        ctx.lineTo(position.x + 10, position.y + 20);
        ctx.closePath();
        ctx.fill();
    }, [position]);

    return (
       <div>
           <h2>Asteroid Canvas</h2>
            <canvas
                width={800}
                height={600}
                style={{border: '1px solid black', backgroundColor: 'black'}}
                ref={canvasRef}
            />
       </div>
    );
};

export default AsteroidCanvas;

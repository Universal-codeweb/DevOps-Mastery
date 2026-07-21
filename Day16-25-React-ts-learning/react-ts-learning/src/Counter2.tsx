import { useEffect, useState } from "react";

function UseEffectLearning() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect Executed");
    });

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </>
    );
}
export default UseEffectLearning;
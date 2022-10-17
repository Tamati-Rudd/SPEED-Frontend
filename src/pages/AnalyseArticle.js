import { React, useState } from 'react';


/**
 * Analysis page for the SPEED website
 * @returns Analysis page components
 */
export default function AnalyseArticle() {
    const [testState, setTestState] = useState("");
    return (
        <div>
            <input title="title" value={testState} />
        </div>
    )
}


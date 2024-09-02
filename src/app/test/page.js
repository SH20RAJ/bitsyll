'use client'
import React, { useEffect } from 'react';

export default function Page() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://bitsyll.disqus.com/embed.js';
        script.setAttribute('data-timestamp', +new Date());
        document.body.appendChild(script);

        return () => {
            // Remove the script and check if window.DISQUS is defined before calling reset
            document.body.removeChild(script);
            if (window.DISQUS) {
                window.DISQUS.reset({});
            }
        };
    }, []);

    return (
        <div>
            <div id="disqus_thread"></div>
        </div>
    );
}

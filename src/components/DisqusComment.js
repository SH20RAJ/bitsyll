'use client'
import React, { useEffect } from 'react';

export default function DisqusComment({ id = "bitsyll" }) {
    useEffect(() => {
        const disqus_config = function () {
            this.page.url = window.location.href;  // Current page URL
            this.page.identifier = id;  // Unique identifier for each page
        };

        const script = document.createElement('script');
        script.src = 'https://bitsyll.disqus.com/embed.js';
        script.setAttribute('data-timestamp', +new Date());
        document.body.appendChild(script);

        return () => {
            // Clean up the script
            document.body.removeChild(script);
            if (window.DISQUS) {
                window.DISQUS.reset({
                    // reload: true,
                    config: disqus_config,
                });
            }
        };
    }, [id]);

    return (
        <div>
            <div id="disqus_thread"></div>
        </div>
    );
}

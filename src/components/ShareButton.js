"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Copy, Share2, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
    const [copied, setCopied] = useState(false);
    const url = "https://bitians.org"; // Your website URL

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const shareOnWhatsApp = () => {
        const sharetext = `🎓 Hey there! Check out Bitians.org! 🚀

        🌈 It's the coolest spot for BIT Mesra peeps to hang out!

        ✨ Cool stuff we've got:
        🤝 Make awesome BITian friends
        🎭 Really Anonymous confessions 💕
        📢 Get all the campus gossip
        🧠 Share your big brain energy
        🌟 Build your squad
        📱 Super light app (just 5MB!)
        😂 Epic BIT Mesra memes
        💭 Chat & vibe with BITians
        📰 Hot campus updates
        🔐 BIT insider secrets
        💻 Cool open source stuff

        🎉 Come join the fun! Let's make college life awesome! 
        
        `;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(sharetext + '\nWebsite :- ' + url)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 px-4">
            <div className="relative flex-1 max-w-md w-full">
                <Input
                    className="pr-20 border border-gray-300 rounded-lg"
                    value={url}
                    readOnly
                />
                <Button
                    onClick={handleCopy}
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 hover:bg-gray-100 hover:text-gray-800"
                    variant="ghost"
                >
                    {copied ? (
                        <span className="text-green-600 text-sm">Copied!</span>
                    ) : (
                        <Copy className="h-4 w-4" />
                    )}
                </Button>
            </div>
            <Button
                onClick={shareOnWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 flex items-center gap-2"
            >
                <MessageCircle className="h-4 w-4" />
                Share on WhatsApp
            </Button>
        </div>
    );
}

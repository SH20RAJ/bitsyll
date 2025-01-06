'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Copy, MapPin, Check } from "lucide-react";

export default function Page() {
  const contacts = [
    { name: 'Erp Bit Mesra', number: '8085145490', icon: PhoneCall },
    { name: 'Bit Ambulance Number', number: '6512276009', icon: PhoneCall },
    { name: 'Bit Transport-1', number: '6512275777', icon: PhoneCall },
    { name: 'Helpline Transport', number: '7890123456', icon: PhoneCall },
    { name: 'Auto-Cab', number: '9608305224', icon: PhoneCall },
    { name: 'BIT Mesra', number: 'BIT Mesra, Ranchi, Jharkhand', icon: MapPin },
  ];

  const [copiedStates, setCopiedStates] = useState(contacts.map(() => false));

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => prev.map((state, i) => i === index ? true : state));
    setTimeout(() => {
      setCopiedStates(prev => prev.map((state, i) => i === index ? false : state));
    }, 2000);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <Card key={index} className="transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                {React.createElement(contact.icon, { className: "mr-2 h-5 w-5" })}
                {contact.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{contact.number}</p>
              <div className="flex space-x-2">
                {contact.number.toString().length === 10 && (
                  <Button variant="outline" asChild>
                    <a href={`tel:${contact.number}`}>
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Call
                    </a>
                  </Button>
                )}
                <Button 
                  variant="secondary" 
                  onClick={() => handleCopy(contact.number, index)}
                  className="transition-all duration-300"
                >
                  {copiedStates[index] ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

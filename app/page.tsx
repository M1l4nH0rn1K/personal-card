import Card from "@/components/card";
import ContactCard from "@/components/contact-card";

import React from "react";

export default function HomePage() {
  return (
    <div className="h-screen bg-[#F3F4F6] flex  items-center justify-center">
      <Card />
      <ContactCard />
    </div>
  );
}

"use client";
import * as React from "react";
import Container from "../components/layout/Container";

// 1️⃣ Funksioni i plotë i Pricing me çmime dhe layout
function PricingList() {
  const plans = [
    { name: "Weekly", oldPrice: "$19,99", price: "$7,99", desc: "€0,61 / week" },
    { name: "Monthly", oldPrice: "$28,99", price: "$14,99", desc: "€14,99 / week" },
    { name: "Yearly", oldPrice: "$119,99", price: "$22,99", desc: "€22,99 / week" },
  ];

  return (
    <section id="pricing" className="mt-20">
      <Container>
        <h2 className="text-2xl font-semibold text-center">Our Plans</h2>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="p-6 rounded-2xl border bg-card/70 text-center">
              <h3 className="text-lg font-semibold">{p.name}</h3>

              {/* Old price */}
              <div className="text-sm text-muted line-through">{p.oldPrice}</div>

              {/* New price */}
              <div className="text-2xl mt-1 font-bold text-accent">{p.price}</div>

              <p className="text-sm text-muted mt-2">{p.desc}</p>

              {/* Optional button */}
              {/* <button className="mt-4 px-4 py-2 rounded-lg bg-accent text-black">
                Choose
              </button> */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// 2️⃣ Komponenti Pricing që thërret PricingList
export default function Pricing() {
  return <PricingList />;
}
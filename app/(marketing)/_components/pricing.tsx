"use client";

import { Check } from "lucide-react";
import { Button } from "./custom-btn";
import Heading from "./heading";
import React from "react";

const subscriptions = [
  {
    type: "Free",
    description:
      "Essential features for basic article-taking and single-device access",
    price: "0",
    features: [
      "Basic article-taking features",
      "Access on one device",
      "Limited to 2 projects",
      "Limited to 5 articles/project",
      "Community support",
    ],
  },
  {
    type: "Basic",
    price: "9.99",
    description: "Advanced features with multi-device access and more storage.",
    features: [
      "Advanced article-taking features",
      "Access on multiple devices",
      "Limited to 10 projects",
      "Limited to 20 articles/project",
      "Email support",
    ],
  },
  {
    type: "Premium",
    price: "19.99",
    description:
      "Unlimited storage, priority support, and collaborative tools for teams",
    features: [
      "All Basic features",
      "Unlimited storage space",
      "Priority customer support",
      "Early access to new features",
      "Limted to ∞ projects",
      "Limted to ∞ articles/project",
      "Collaborative tools",
      "Customizable templates",
    ],
  },
];
const Pricing = () => {
  const handleSubscription = (sub: string) => {
    console.log(sub);
  };

  return (
    <div className="z-50 bg- flex flex-col items-center w-full px-6 mt-20 bg-background py-20">
      <Heading
        title="Pricing"
        description="No more when I wrote this code I was with God now I'm just a lone"
        subscription="Pay once and contentualize forever."
      />
      <div className="flex flex-col gap-10 w-full md:flex-row">
        {subscriptions.map((sub) => (
          <div
            key={sub.type}
            className="flex-1 dark:border-neutral-700 border p-4 rounded-xl dar:bg-[#232323] flex flex-col gap-10"
          >
            <div className="">
              <h3 className="font-semibold text-2xl">{sub.type}</h3>
              <p className="text-neutral-400 text-base">{sub.description}</p>
            </div>
            <Button onClick={() => handleSubscription(sub.type)}>
              Get started
            </Button>

            <h1 className="text-3xl font-semibold">
              $ {sub.price}{" "}
              <span className="text-sm text-neutral-400">/ forever</span>
            </h1>

            <ul>
              {sub.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-5">
                  <Check className="w-4 h-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

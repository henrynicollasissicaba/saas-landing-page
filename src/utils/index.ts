// LOGO TICKER IMPORTS ----------------------------------------------------------

import logoAcme from "@/assets/logo-acme.png";
import logoApex from "@/assets/logo-apex.png";
import logoCelestial from "@/assets/logo-celestial.png";
import logoEcho from "@/assets/logo-echo.png";
import logoPulse from "@/assets/logo-pulse.png";
import logoQuantum from "@/assets/logo-quantum.png";

import { StaticImageData } from "next/image";

// LOGO TICKER DATA ----------------------------------------------------------

interface LogoTickerProps {
  src: StaticImageData;
  alt: string;
}

const logoTicker: LogoTickerProps[] = [
  { src: logoAcme, alt: "Acme Logo" },
  { src: logoApex, alt: "Apex Logo" },
  { src: logoCelestial, alt: "Celestial Logo" },
  { src: logoEcho, alt: "Echo Logo" },
  { src: logoPulse, alt: "Pulse Logo" },
  { src: logoQuantum, alt: "Quantum Logo" },
];

// PRICING DATA ----------------------------------------------------------

interface PricingProps {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}

const pricing: PricingProps[] = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export { logoTicker, pricing };

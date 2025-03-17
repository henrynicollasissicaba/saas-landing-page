import logoAcme from "@/app/assets/logo-acme.png";
import logoApex from "@/app/assets/logo-apex.png";
import logoCelestial from "@/app/assets/logo-celestial.png";
import logoEcho from "@/app/assets/logo-echo.png";
import logoPulse from "@/app/assets/logo-pulse.png";
import logoQuantum from "@/app/assets/logo-quantum.png";

import { StaticImageData } from "next/image";

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

export { logoTicker };

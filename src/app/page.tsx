import { Benefit } from "@/components/Benefits";
import { CallToAction } from "@/components/CallToAction";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Benefit />
      <CallToAction />
    </>
  );
}

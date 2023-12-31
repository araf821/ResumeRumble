import { redirect } from "next/navigation";
import FeatureSection from "@/components/landing/FeatureSection";
import { initializeUser } from "@/lib/initializeUser";
import LandingPageClient from "@/components/LandingPageClient";

export default async function Home() {
  const user = await initializeUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="mx-auto max-w-screen-xl px-4">
        <LandingPageClient />
        <FeatureSection />
          <p className="text-neutral-200 text-center py-8">Made for HTV8 🍌</p>
      </div>
    </main>
  );
}

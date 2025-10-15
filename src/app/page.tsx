
import { AuthScreen } from "@/features/auth/components/auth-screen";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#5c3b58] text-white text-3xl font-bold">
      <AuthScreen />
    </div>
  );
}

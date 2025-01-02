import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css";
import { ThemeProvider } from "@/components/theme";

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "opal",
    description: "Share AI Powered Videos with friends",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ClerkProvider>
            < html lang="en" >
                <body className={`${manrope.className} bg-[#171717]`} >
                    <ThemeProvider
                        attribute={"class"}
                        defaultTheme={"dark"}
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </html >
        </ClerkProvider>
    );
}

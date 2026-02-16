"use client";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { FadeIn, FadeInStagger } from "@/components/animations/fade-in";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Camera, MapPin, Sparkles, BookOpen, Apple, Trophy } from "lucide-react";
import Image from "next/image";

const CAMPUS_DATA = [
    {
        title: "Digital Learning Hub",
        description: "Our classrooms are equipped with modern interactive displays and ergonomic spaces designed for collaborative learning.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
        icon: Sparkles,
        tag: "Interactive Environments",
        color: "from-primary/20 to-accent/5"
    },
    {
        title: "Inquiry Science Labs",
        description: "State-of-the-art laboratories where students explore physics, chemistry, and biology through hands-on experimentation.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        icon: BookOpen,
        tag: "STEM Innovation",
        color: "from-secondary/20 to-primary/5"
    },
    {
        title: "Athletic Arena",
        description: "Comprehensive facilities for physical education, team sports, and personal fitness to nurture healthy bodies and minds.",
        image: "https://images.unsplash.com/photo-1541534741688-6078c64b52d3?q=80&w=2070&auto=format&fit=crop",
        icon: Trophy,
        tag: "Physical Excellence",
        color: "from-accent/20 to-secondary/5"
    },
    {
        title: "Reflection Sanctuary",
        description: "A tranquil library and reflection space designed for deep study, reading, and spiritual mindfulness.",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
        icon: Apple,
        tag: "Spiritual & Intellectual",
        color: "from-primary/20 to-secondary/5"
    }
];

export default function CampusPage() {
    return (
        <>
            <main className="min-h-screen bg-slate-50/50">
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 -z-10" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent -z-10" />

                    <Container>
                        <FadeIn className="text-center max-w-4xl mx-auto">
                            <span className="text-xs font-mono font-bold tracking-[0.4em] text-accent uppercase mb-6 block">The Ummah Vision Campus</span>
                            <h1 className="text-5xl md:text-8xl font-heading font-black text-primary leading-none mb-8 tracking-tighter uppercase">
                                WHERE EXCELLENCE<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary italic">LIVES</span>
                            </h1>
                            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto mb-10">
                                Explore the state-of-the-art facilities designed to provide a holistic, modern, and spiritually enriching educational experience.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button className="rounded-full px-8 h-12 bg-primary text-white hover:bg-primary/90">
                                    <Camera className="mr-2 h-4 w-4" />
                                    VIRTUAL TOUR
                                </Button>
                                <Button variant="outline" className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary/5">
                                    <MapPin className="mr-2 h-4 w-4" />
                                    GET DIRECTIONS
                                </Button>
                            </div>
                        </FadeIn>
                    </Container>
                </section>

                {/* Showcase Grid */}
                <section className="pb-32 relative">
                    <Container>
                        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {CAMPUS_DATA.map((item, idx) => (
                                <FadeIn key={idx} direction={idx % 2 === 0 ? "right" : "left"}>
                                    <Card className="group relative overflow-hidden rounded-[2.5rem] border-white/50 bg-white/40 backdrop-blur-xl shadow-2xl hover:shadow-primary/10 transition-all duration-700 h-full flex flex-col">
                                        <div className="relative h-80 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                            <div className="absolute top-6 left-6">
                                                <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-mono font-bold tracking-widest uppercase">
                                                    {item.tag}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-10 flex-1 flex flex-col relative">
                                            <div className={`absolute -top-12 right-10 p-6 rounded-3xl bg-white shadow-xl transition-transform duration-500 group-hover:-translate-y-2`}>
                                                <item.icon className="h-8 w-8 text-primary" />
                                            </div>

                                            <h3 className="text-2xl font-heading font-black text-slate-900 mb-4 uppercase tracking-tighter">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-600 font-light leading-relaxed italic mb-8">
                                                &quot;{item.description}&quot;
                                            </p>

                                            <div className="mt-auto flex items-center gap-4 border-t border-slate-100 pt-8">
                                                <div className="h-1 w-12 bg-accent rounded-full" />
                                                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                                                    Sanctuary Node: {idx + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </FadeIn>
                            ))}
                        </FadeInStagger>
                    </Container>
                </section>

                {/* Vision Quote Section */}
                <section className="py-24 relative overflow-hidden bg-primary text-white">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <Container className="relative z-10 text-center">
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-heading font-light italic mb-8 max-w-4xl mx-auto">
                                &quot;Our environment is designed to be the <span className="text-accent font-bold not-italic font-heading">third teacher</span>, sparking curiosity and grounding the spirit in every corner.&quot;
                            </h2>
                            <p className="text-blue-200/60 font-mono text-xs tracking-[0.5em] uppercase">
                                The Architect&apos;s Vision
                            </p>
                        </FadeIn>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="py-32">
                    <Container>
                        <FadeIn className="bg-gradient-to-br from-slate-900 via-primary to-slate-900 p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -ml-48 -mb-48 animate-pulse" />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 tracking-tighter uppercase">
                                    SEE IT FOR<br />
                                    <span className="text-accent">YOURSELF</span>
                                </h2>
                                <p className="text-blue-100/70 text-lg mb-12 max-w-2xl mx-auto font-light italic">
                                    Join us for an open day and experience the atmosphere of Ummah Vision firsthand. Our team is ready to welcome you.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Button size="lg" className="rounded-full px-12 h-16 bg-white text-primary hover:bg-blue-50 font-black uppercase tracking-tighter shadow-xl" asChild>
                                        <Link href="/contact">BOOK A VISIT</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="rounded-full px-12 h-16 border-white/20 text-white hover:bg-white/10 backdrop-blur-md font-black uppercase tracking-tighter" asChild>
                                        <Link href="/admissions">ENROLL NOW</Link>
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}

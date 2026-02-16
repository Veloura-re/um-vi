import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ArrowRight, Sparkles, BookCheck, GraduationCap } from "lucide-react";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/animations/fade-in";

export default function ProgramsPage() {
    const levels = [
        {
            title: "Kindergarten",
            age: "Ages 4-6",
            desc: "A vibrant creative harbor where little minds begin their journey of sensory integration and emotional discovery through purposeful play.",
            subjects: ["Arabic Phonics", "Early Literacy", "Logic & Patterns", "Creative Arts", "Social Skills"],
            color: "from-accent/20 via-accent/10 to-transparent",
            icon: Sparkles,
            accentColor: "text-accent",
            glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
        },
        {
            title: "Primary School",
            age: "Ages 7-11",
            desc: "A structured academic foundation where we nurture an insatiable love for learning while deeply rooting the heart in timeless moral values.",
            subjects: ["Language Arts", "Mathematics", "Science", "Islamic Studies", "Character Building", "Physical Education"],
            color: "from-primary/20 via-primary/10 to-transparent",
            icon: BookCheck,
            accentColor: "text-primary",
            glow: "group-hover:shadow-[0_0_30px_rgba(27,54,93,0.2)]"
        },
        {
            title: "Secondary",
            age: "Ages 12-18",
            desc: "Rigorous intellectual preparation designed to challenge critical thinking, foster leadership, and secure readiness for world-class universities.",
            subjects: ["Advanced Sciences", "Calculus", "World History", "Fiqh", "Critical Leadership", "Digital Literacy"],
            color: "from-secondary/20 via-secondary/10 to-transparent",
            icon: GraduationCap,
            accentColor: "text-secondary",
            glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
        }
    ];

    return (
        <>
            <main className="min-h-screen pt-32 pb-48 lg:pt-48">
                <Container className="relative">
                    <FadeIn className="max-w-4xl mx-auto text-center mb-32">
                        <span className="text-xs font-mono font-bold tracking-[0.3em] text-accent uppercase mb-6 block">Educational Pathways</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-primary leading-none mb-10 tracking-tighter uppercase">
                            JOURNEYS OF<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary">DISCOVERY</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                            Every child&apos;s path is unique. Our three-phase approach is designed to meet developmental milestones with precision and empathy.
                        </p>
                    </FadeIn>

                    <FadeInStagger className="grid grid-cols-1 gap-16 mb-48">
                        {levels.map((level) => (
                            <FadeIn key={level.title}>
                                <Card className={`overflow-hidden border-0 bg-white/40 backdrop-blur-xl rounded-[3rem] shadow-xl group transition-all duration-700 relative ${level.glow}`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-40 -z-10`} />

                                    <div className="md:grid md:grid-cols-12 items-center">
                                        <div className="md:col-span-5 p-12 md:p-16 flex flex-col items-center md:items-start text-center md:text-left">
                                            <div className={`w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500 ${level.accentColor}`}>
                                                <level.icon className="h-10 w-10" />
                                            </div>
                                            <h3 className="text-4xl font-heading font-black mb-4 text-slate-900 uppercase tracking-tighter leading-none">{level.title}</h3>
                                            <span className="inline-block bg-white text-slate-700 font-mono text-xs font-bold px-6 py-2 rounded-full border border-slate-100 shadow-sm mb-6 uppercase tracking-widest leading-loose">
                                                {level.age}
                                            </span>
                                            <p className="text-xl text-slate-600 leading-relaxed font-light">{level.desc}</p>
                                        </div>

                                        <div className="md:col-span-7 p-12 md:p-16 md:pl-0">
                                            <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/50 shadow-inner group-hover:shadow-lg transition-all duration-500">
                                                <h4 className="font-heading font-black text-slate-900 mb-8 flex items-center tracking-widest text-sm uppercase">
                                                    <div className={`w-2 h-8 bg-gradient-to-b from-primary to-secondary mr-6 rounded-full`} />
                                                    CORE MODULES
                                                </h4>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                                                    {level.subjects.map((sub) => (
                                                        <li key={sub} className="flex items-center text-slate-600 font-medium text-sm group/item">
                                                            <div className={`h-1.5 w-1.5 rounded-full mr-4 bg-primary opacity-30 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all duration-300`} />
                                                            <span className="group-hover/item:text-primary transition-colors tracking-tight">{sub}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </FadeIn>
                        ))}
                    </FadeInStagger>

                    <FadeIn direction="none" className="text-center bg-primary text-white p-20 rounded-[4rem] relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-none uppercase tracking-tighter">THE FUTURE IS<br /><span className="text-accent italic">WAITING</span></h2>
                            <p className="text-xl text-blue-100 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                                Our programs are more than just curricula; they are experiences designed to ignite the soul and equip the mind.
                            </p>
                            <Button size="lg" className="h-16 px-12 text-lg rounded-full bg-white text-primary hover:bg-slate-50 shadow-xl transition-all duration-300 font-bold uppercase tracking-tighter" asChild>
                                <Link href="/admissions">BEGIN THE APPLICATION</Link>
                            </Button>
                        </div>
                    </FadeIn>
                </Container>
            </main>
            <Footer />
        </>
    );
}

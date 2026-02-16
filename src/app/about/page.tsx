import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Users, Lightbulb, Heart, Shield, Compass } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/animations/fade-in";

export default function AboutPage() {
    return (
        <>
            <main className="min-h-screen pt-32 pb-48 lg:pt-48">
                <Container className="relative">
                    {/* Inspiring Intro Section */}
                    <FadeIn className="max-w-4xl mx-auto text-center mb-32">
                        <span className="text-xs font-mono font-bold tracking-[0.3em] text-accent uppercase mb-6 block">Our Story & Vision</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-primary leading-none mb-10 tracking-tighter">
                            NURTURING THE<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary">LEADERS OF TOMORROW</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                            Ummah Vision School was founded on a simple yet profound realization: that academic intelligence without moral wisdom is incomplete.
                            We bridge the gap between world-class education and timeless values.
                        </p>
                    </FadeIn>

                    {/* Mission & Vision - Impact Layout */}
                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                        <FadeIn>
                            <Card className="bg-white/60 backdrop-blur-xl border border-primary/10 p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 group h-full">
                                <Compass className="h-12 w-12 text-primary mb-8 group-hover:rotate-12 transition-transform duration-500" />
                                <h3 className="text-3xl font-heading font-black text-slate-900 mb-6 uppercase tracking-tight">Our Mission</h3>
                                &quot;To empower students with holistic education that integrates modern knowledge with timeless moral values, nurturing them to become compassionate, capable, and visionary leaders.&quot;
                            </Card>
                        </FadeIn>
                        <FadeIn>
                            <Card className="bg-white/60 backdrop-blur-xl border border-secondary/10 p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 group h-full">
                                <Lightbulb className="h-12 w-12 text-secondary mb-8 group-hover:scale-110 transition-transform duration-500" />
                                <h3 className="text-3xl font-heading font-black text-slate-900 mb-6 uppercase tracking-tight">Our Vision</h3>
                                &quot;To be a beacon of educational excellence where every child is inspired to reach their full potential and contribute positively to humanity.&quot;
                            </Card>
                        </FadeIn>
                    </FadeInStagger>

                    {/* Visionary Leadership Section */}
                    <SectionHeader
                        title="Visionary Leadership"
                        subtitle="Guided by educators who believe in the infinite potential of every child."
                        align="center"
                        className="mb-20"
                    />

                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-48">
                        {[
                            { name: "Principal Dr. Ahmed", role: "Executive Principal", icon: Users, desc: "20+ years of experience in international pedagogy and moral development." },
                            { name: "Ms. Zainab Hassan", role: "Head of Primary", icon: Heart, desc: "Expert in early childhood education and sensory integration." },
                            { name: "Ustadha Maryam", role: "Director of Values", icon: Shield, desc: "Specializes in integrating ethical frameworks into modern curricula." },
                        ].map((leader, idx) => (
                            <FadeIn key={idx} className="text-center group p-8">
                                <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                    <leader.icon className="h-10 w-10 transition-transform group-hover:scale-110" />
                                </div>
                                <h4 className="text-2xl font-heading font-bold text-slate-900">{leader.name}</h4>
                                <p className="text-accent font-mono text-xs font-bold tracking-widest mb-4 mt-1 uppercase">{leader.role}</p>
                                <p className="text-slate-500 font-light text-sm">{leader.desc}</p>
                            </FadeIn>
                        ))}
                    </FadeInStagger>

                    {/* Values Grid - Refined */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
                            <div className="w-[80%] h-[80%] bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-[100px] rounded-full" />
                        </div>

                        <SectionHeader title="THE PILLARS" subtitle="The core foundations of an Ummah Vision student." />

                        <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                            {[
                                { val: "Knowledge", icon: "📚", color: "text-primary border-primary/20 bg-white/40", glow: "group-hover:shadow-[0_0_20px_rgba(27,54,93,0.3)]" },
                                { val: "Discipline", icon: "⚙️", color: "text-accent border-accent/20 bg-white/40", glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]" },
                                { val: "Faith", icon: "✨", color: "text-secondary border-secondary/20 bg-white/40", glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]" },
                                { val: "Excellence", icon: "🏆", color: "text-slate-600 border-slate-200 bg-white/40", glow: "group-hover:shadow-[0_0_20px_rgba(148,163,184,0.3)]" }
                            ].map((item) => (
                                <FadeIn key={item.val}>
                                    <div className={`text-center p-8 rounded-[2rem] border ${item.color} shadow-sm transition-all duration-500 group relative overflow-hidden backdrop-blur-md h-full`}>
                                        <div className={`absolute -inset-1 rounded-[2rem] blur-lg opacity-0 transition-opacity duration-500 ${item.glow} -z-20`} />
                                        <span className={`block text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 drop-shadow-md`}>
                                            {item.icon}
                                        </span>
                                        <span className="font-heading font-black text-xl text-foreground group-hover:text-primary transition-colors uppercase tracking-tighter">{item.val}</span>
                                    </div>
                                </FadeIn>
                            ))}
                        </FadeInStagger>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}

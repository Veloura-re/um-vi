import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { Card } from "@/components/ui/card";
import { ClipboardCheck, FileText, UserPlus, GraduationCap } from "lucide-react";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/animations/fade-in";

export default function AdmissionsPage() {
    return (
        <>
            <main className="min-h-screen pt-32 pb-48 lg:pt-48">
                <Container className="relative">
                    <FadeIn className="max-w-4xl mx-auto text-center mb-32">
                        <span className="text-xs font-mono font-bold tracking-[0.3em] text-accent uppercase mb-6 block">Join Our Community</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-primary leading-none mb-10 tracking-tighter">
                            A BRIGHTER<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary">START AWAITS</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                            The journey to excellence starts with a single step. Our admissions process is designed to be as supportive and transparent as our education.
                        </p>
                    </FadeIn>

                    {/* Admissions Process Steps */}
                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-48">
                        {[
                            { step: "01", title: "Inquiry", desc: "Submit the online form to start your journey.", icon: FileText, color: "text-primary" },
                            { step: "02", title: "Discovery", desc: "Visit our campus and meet our visionary educators.", icon: UserPlus, color: "text-accent" },
                            { step: "03", title: "Evaluation", desc: "A brief session to understand your child's needs.", icon: ClipboardCheck, color: "text-secondary" },
                            { step: "04", title: "Enrollment", desc: "Welcome to the Ummah Vision family.", icon: GraduationCap, color: "text-primary" },
                        ].map((item, idx) => (
                            <FadeIn key={idx} className="relative p-10 text-center">
                                <div className="absolute top-0 right-0 text-8xl font-heading font-black text-slate-900/5 -z-10 leading-none">{item.step}</div>
                                <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform ${item.color}`}>
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-heading font-black text-slate-900 uppercase tracking-tighter mb-4">{item.title}</h3>
                                <p className="text-slate-500 font-light text-sm leading-relaxed">{item.desc}</p>
                            </FadeIn>
                        ))}
                    </FadeInStagger>

                    {/* Form Section */}
                    <FadeIn className="max-w-5xl mx-auto relative">
                        {/* Decorative glow behind form */}
                        <div className="absolute -inset-10 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 blur-[100px] rounded-[5rem] -z-10 opacity-50" />

                        <Card className="bg-white/70 backdrop-blur-2xl border border-white/50 p-12 md:p-20 rounded-[4rem] shadow-2xl h-full">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-heading font-black text-primary uppercase tracking-tighter leading-none mb-6">START YOUR INQUIRY</h2>
                                <p className="text-slate-600 font-light text-lg">Tell us about your child, and let&apos;s build their future together.</p>
                            </div>
                            <InquiryForm />
                        </Card>
                    </FadeIn>

                    {/* FAQ Quick Link Section */}
                    <FadeIn direction="none" className="mt-32 text-center">
                        <p className="text-slate-500 font-light italic mb-8">Have more questions? We are here to help.</p>
                        <div className="inline-flex items-center space-x-8 text-sm font-mono font-bold tracking-widest uppercase">
                            <Link href="/contact" className="text-primary hover:text-accent transition-colors flex items-center">
                                CONTACT US <div className="h-1 w-8 bg-current ml-4 scale-x-50 origin-left" />
                            </Link>
                            <span className="text-slate-300">|</span>
                            <Link href="/programs" className="text-primary hover:text-accent transition-colors flex items-center">
                                VIEW PROGRAMS <div className="h-1 w-8 bg-current ml-4 scale-x-50 origin-left" />
                            </Link>
                        </div>
                    </FadeIn>
                </Container>
            </main>
            <Footer />
        </>
    );
}

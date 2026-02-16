"use client";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { FadeIn, FadeInStagger } from "@/components/animations/fade-in";
import { Lock, Eye, FileText, Share2 } from "lucide-react";

export default function PrivacyPage() {
    return (
        <>
            <main className="min-h-screen pt-32 pb-48 lg:pt-48">
                <Container>
                    <FadeIn className="max-w-4xl mx-auto text-center mb-24">
                        <span className="text-xs font-mono font-bold tracking-[0.3em] text-accent uppercase mb-6 block">Data Protection</span>
                        <h1 className="text-5xl md:text-7xl font-heading font-black text-primary leading-none mb-10 tracking-tighter uppercase">
                            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Policy</span>
                        </h1>
                        <p className="text-xl text-slate-600 font-light leading-relaxed">
                            How we protect and manage the information of our students and community.
                        </p>
                    </FadeIn>

                    <FadeInStagger className="max-w-4xl mx-auto space-y-12">
                        <FadeIn>
                            <section className="bg-white/60 backdrop-blur-xl border border-slate-200 p-10 rounded-[2rem] shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Eye className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-slate-900 uppercase tracking-tight">Information Collection</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light mb-4">
                                    We collect information necessary for the admission and educational journey of our students. This includes, but is not limited to:
                                </p>
                                <ul className="list-disc list-inside text-slate-600 font-light space-y-2 ml-4">
                                    <li>Student personal details and academic history.</li>
                                    <li>Parent/Guardian contact and professional information.</li>
                                    <li>Health and emergency contact records.</li>
                                    <li>Usage data from our digital learning platforms.</li>
                                </ul>
                            </section>
                        </FadeIn>

                        <FadeIn>
                            <section className="bg-white/60 backdrop-blur-xl border border-slate-200 p-10 rounded-[2rem] shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                        <Lock className="h-6 w-6 text-secondary" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-slate-900 uppercase tracking-tight">Security Measures</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    Ummah Vision School employs state-of-the-art encryption and administrative safeguards to ensure all student records are kept confidential and protected from unauthorized access.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn>
                            <section className="bg-white/60 backdrop-blur-xl border border-slate-200 p-10 rounded-[2rem] shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                        <Share2 className="h-6 w-6 text-accent" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-slate-900 uppercase tracking-tight">Data Sharing</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    We do not sell, trade, or rent personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn>
                            <section className="bg-white/60 backdrop-blur-xl border border-slate-200 p-10 rounded-[2rem] shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                                        <FileText className="h-6 w-6 text-slate-600" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-slate-900 uppercase tracking-tight">Your Rights</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    Parents and legal guardians have the right to review, update, and request the deletion of their child&apos;s records. For any privacy-related inquiries, please contact our administration office.
                                </p>
                            </section>
                        </FadeIn>
                    </FadeInStagger>
                </Container>
            </main>
            <Footer />
        </>
    );
}

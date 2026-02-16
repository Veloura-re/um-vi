"use client";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { FadeIn, FadeInStagger } from "@/components/animations/fade-in";
import { Shield, Scale, ScrollText, AlertCircle } from "lucide-react";

export default function TermsPage() {
    return (
        <>
            <main className="min-h-screen pt-32 pb-48 lg:pt-48">
                <Container>
                    <FadeIn className="max-w-4xl mx-auto text-center mb-24">
                        <span className="text-xs font-mono font-bold tracking-[0.3em] text-accent uppercase mb-6 block">Legal Governance</span>
                        <h1 className="text-5xl md:text-7xl font-heading font-black text-primary leading-none mb-10 tracking-tighter uppercase">
                            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Service</span>
                        </h1>
                        <p className="text-xl text-slate-600 font-light leading-relaxed">
                            Agreement and expectations for our educational community and website visitors.
                        </p>
                    </FadeIn>

                    <FadeInStagger className="max-w-4xl mx-auto space-y-12">
                        <FadeIn>
                            <section className="bg-white/60 backdrop-blur-xl border border-slate-200 p-10 rounded-[2rem] shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Scale className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-slate-900 uppercase tracking-tight">1. Acceptance of Terms</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light mb-4">
                                    By accessing Ummah Vision School website or enrolling in our programs, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn>
                            <section className="bg-white/60 backdrop-blur-xl border border-slate-200 p-10 rounded-[2rem] shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-secondary" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-slate-900 uppercase tracking-tight">2. Use of Services</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light mb-4">
                                    Our educational services are provided for the specific purpose of academic and moral development. Users are expected to maintain professional and respectful behavior across all platforms and physical premises.
                                </p>
                                <ul className="list-disc list-inside text-slate-600 font-light space-y-2 ml-4">
                                    <li>No unauthorized reproduction of curriculum materials.</li>
                                    <li>Strict adherence to the student code of conduct.</li>
                                    <li>Accurate representation of information during admissions.</li>
                                </ul>
                            </section>
                        </FadeIn>

                        <FadeIn>
                            <section className="bg-white/60 backdrop-blur-xl border border-slate-200 p-10 rounded-[2rem] shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                        <ScrollText className="h-6 w-6 text-accent" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-slate-900 uppercase tracking-tight">3. Intellectual Property</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    All content, logos, and materials provided by Ummah Vision School are the intellectual property of the Ummah Vision Foundation. Any commercial use or redistribution without express written consent is prohibited.
                                </p>
                            </section>
                        </FadeIn>

                        <FadeIn>
                            <section className="bg-white/60 backdrop-blur-xl border border-slate-200 p-10 rounded-[2rem] shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                                        <AlertCircle className="h-6 w-6 text-red-500" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-slate-900 uppercase tracking-tight">4. Limitation of Liability</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    Ummah Vision School strives for excellence but provides services &quot;as is&quot;. We are not liable for indirect, incidental, or consequential damages arising from the use of our website or educational materials.
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

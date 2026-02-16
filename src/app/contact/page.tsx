import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";

import { ContactForm } from "@/components/forms/contact-form";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/animations/fade-in";

export default function ContactPage() {
    const contactInfo = [
        { icon: MapPin, label: "Visit Us", value: "Address Placeholder, City, Country", color: "text-primary" },
        { icon: Phone, label: "Call Us", value: "+123 456 7890", color: "text-accent" },
        { icon: Mail, label: "Email Us", value: "info@ummavision.edu", color: "text-secondary" },
        { icon: Clock, label: "Working Hours", value: "Mon - Fri: 8:00 AM - 4:00 PM", color: "text-primary" },
    ];

    return (
        <>
            <main className="min-h-screen pt-32 pb-48 lg:pt-48">
                <Container className="relative">
                    <FadeIn className="max-w-4xl mx-auto text-center mb-32">
                        <span className="text-xs font-mono font-bold tracking-[0.3em] text-accent uppercase mb-6 block">We Are Here For You</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-primary leading-none mb-10 tracking-tighter">
                            GET IN<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary uppercase">TOUCH</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                            Have questions or want to learn more about our visionary approach? Our team is always ready to guide you in the right direction.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                        {/* Contact Info Column */}
                        <FadeInStagger className="lg:col-span-4 space-y-6">
                            {contactInfo.map((info, idx) => (
                                <FadeIn key={idx}>
                                    <Card className="bg-white/50 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-lg group hover:bg-white transition-all duration-500 h-full">
                                        <div className="flex items-start gap-6">
                                            <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${info.color}`}>
                                                <info.icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-1 block">{info.label}</span>
                                                <p className="text-lg font-heading font-bold text-slate-900 leading-tight">{info.value}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </FadeIn>
                            ))}
                        </FadeInStagger>

                        {/* Form Column */}
                        <FadeIn className="lg:col-span-8">
                            <Card className="bg-white/70 backdrop-blur-2xl border border-white/50 p-12 md:p-16 rounded-[3rem] shadow-2xl h-full">
                                <div className="mb-12">
                                    <h2 className="text-3xl md:text-4xl font-heading font-black text-primary uppercase tracking-tighter leading-none mb-4">SEND A MESSAGE</h2>
                                    <p className="text-slate-600 font-light text-lg">We typically respond within 24 business hours.</p>
                                </div>
                                <ContactForm />
                            </Card>
                        </FadeIn>
                    </div>

                    {/* High-Impact Footer CTA - Synced with Home */}
                    <FadeIn direction="none" className="bg-primary text-white p-20 rounded-[4rem] relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent rounded-full blur-[100px] opacity-20" />
                        <div className="relative z-10 text-center">
                            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-none uppercase tracking-tighter">VISIT OUR<br /><span className="text-accent italic">CAMPUS</span></h2>
                            <p className="text-xl text-blue-100 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                                Experience the atmosphere of Ummah Vision firsthand. We invite you for a guided tour of our facilities and an introduction to our community.
                            </p>
                            <Button size="lg" className="h-16 px-12 text-lg rounded-full bg-white text-primary hover:bg-slate-50 shadow-xl transition-all duration-300 font-bold uppercase tracking-tighter" asChild>
                                <Link href="/admissions">BOOK A CAMPUS TOUR</Link>
                            </Button>
                        </div>
                    </FadeIn>
                </Container>
            </main>
            <Footer />
        </>
    );
}

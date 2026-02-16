"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            message: formData.get("message") as string,
        };

        try {
            const { error: supabaseError } = await supabase
                .from("contact_messages")
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .insert(data as any);

            if (supabaseError) throw supabaseError;

            setSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-600 font-medium">Full Name</Label>
                <Input id="name" name="name" required placeholder="John Doe" className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-600 font-medium">Email Address</Label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-600 font-medium">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-600 font-medium">Message</Label>
                <Textarea id="message" name="message" required placeholder="How can we help you?" className="min-h-[120px] bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" />
            </div>

            {error && <p className="text-red-500 text-sm font-medium p-2 bg-red-50 rounded-md border border-red-200">{error}</p>}
            {success && <p className="text-emerald-600 text-sm font-medium p-2 bg-emerald-50 rounded-md border border-emerald-200">Message sent! We&apos;ll get back to you soon.</p>}

            <Button type="submit" variant="neon" className="w-full text-white bg-accent hover:bg-accent/90 shadow-md">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {loading ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}

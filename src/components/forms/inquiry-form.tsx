"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

export function InquiryForm() {
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
            student_name: formData.get("student_name") as string,
            parent_name: formData.get("parent_name") as string,
            phone: formData.get("phone") as string,
            level_applying: formData.get("level_applying") as string,
            message: formData.get("message") as string,
        };

        try {
            const { error: supabaseError } = await supabase
                .from("admission_inquiries")
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
                <Label htmlFor="parent_name" className="text-slate-600 font-medium">Parent/Guardian Name</Label>
                <Input id="parent_name" name="parent_name" required placeholder="Jane Doe" className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="student_name" className="text-slate-600 font-medium">Student Name</Label>
                <Input id="student_name" name="student_name" required placeholder="John Doe Jr." className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-600 font-medium">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="level_applying" className="text-slate-600 font-medium">Grade Level Applying For</Label>
                    <select
                        id="level_applying"
                        name="level_applying"
                        required
                        className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                    >
                        <option value="" disabled selected className="text-slate-500">Select a level</option>
                        <option value="Kindergarten" className="text-slate-900">Kindergarten</option>
                        <option value="Primary (Grades 1-5)" className="text-slate-900">Primary (Grades 1-5)</option>
                        <option value="Secondary (Grades 6-12)" className="text-slate-900">Secondary (Grades 6-12)</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-600 font-medium">Any Questions or Comments?</Label>
                <Textarea id="message" name="message" placeholder="Tell us a bit about your child..." className="min-h-[100px] bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" />
            </div>

            {error && <p className="text-red-500 text-sm font-medium p-2 bg-red-50 rounded-md border border-red-200">{error}</p>}
            {success && <p className="text-emerald-600 text-sm font-medium p-2 bg-emerald-50 rounded-md border border-emerald-200">Inquiry submitted! We&apos;ll be in touch shortly.</p>}

            <Button type="submit" variant="neon" className="w-full text-white bg-accent hover:bg-accent/90 shadow-md">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {loading ? "Submitting..." : "Submit Application"}
            </Button>
        </form>
    );
}

export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            contact_messages: {
                Row: {
                    id: string
                    name: string
                    email: string
                    phone: string | null
                    message: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    email: string
                    phone?: string | null
                    message: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    email?: string
                    phone?: string | null
                    message?: string
                    created_at?: string
                }
            }
            admission_inquiries: {
                Row: {
                    id: string
                    student_name: string
                    parent_name: string
                    phone: string
                    level_applying: string
                    message: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    student_name: string
                    parent_name: string
                    phone: string
                    level_applying: string
                    message?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    student_name?: string
                    parent_name?: string
                    phone?: string
                    level_applying?: string
                    message?: string | null
                    created_at?: string
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

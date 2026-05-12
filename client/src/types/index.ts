
export type ProjectCategory = "embedded systems" | "web development" | "cybersecurity" | "mobile development" | "IT" | "full-stack";

export interface ProjectType {
    title: string;
    dates: string;
    description: string;
    skills?: string[];
    gif?: string;
    repo?: string;
    type?: ProjectCategory;
} 
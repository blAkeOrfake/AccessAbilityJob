export class JobOffer {
    id: string; // Unique identifier for the job offer
    title: string; // Title of the job offer
    company: string; // Company offering the job
    location: string; // Location of the job
    salaryRange: { min: number, max: number }; // Salary range for the job
    jobType: string; // Type of job (Full-time, Part-time, Contract, etc.)
    description: string; // Description of the job
    requirements: string[]; // List of job requirements
    responsibilities: string[]; // List of job responsibilities
    benefits: string[]; // List of job benefits
    accessibilityFeatures: string[]; // List of accessibility features
    postedDate: Date; // Date when the job offer was posted
    expiryDate: Date; // Date when the job offer expires
}

export interface JobOfferDto {
    id: number;
    title: string;
    company: string;
    location: string;
    salaryRange: { min: number, max: number };
    jobType: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
    accessibilityFeatures: string[];
    postedDate: Date;
    expiryDate: Date;
}

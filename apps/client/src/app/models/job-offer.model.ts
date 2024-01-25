export class JobOffer {
    id!: string; // Unique identifier for the job offer
    title!: string; // Title of the job offer
    company!: string; // Company offering the job
    location!: string; // Location of the job
    salaryRange!: { min: number; max: number; }; // Salary range for the job
    jobType!: string; // Type of job (Full-time, Part-time, Contract, etc.)
    description!: string; // Description of the job
    requirements!: string[]; // List of job requirements
    responsibilities!: string[]; // List of job responsibilities
    benefits!: string[]; // List of job benefits
    accessibilityFeatures!: string[]; // List of accessibility features
    postedDate!: Date; // Date when the job offer was posted
    expiryDate!: Date; // Date when the job offer expires

    constructor(params: JobOfferDto) {
        
        this.id = params.id;
        this.title = params.title;
        this.company = params.company;
        this.location = params.location;
        this.salaryRange = params.salaryRange;
        this.jobType = params.jobType;
        this.description = params.description;
        this.requirements = params.requirements;
        this.responsibilities = params.responsibilities;
        this.benefits = params.benefits;
        this.accessibilityFeatures = params.accessibilityFeatures;
        this.postedDate = new Date(params.postedDate);
        this.expiryDate = new Date(params.expiryDate);
    }
}

export interface JobOfferDto {
    id: string;
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

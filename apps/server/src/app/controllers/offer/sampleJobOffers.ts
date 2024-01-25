// eslint-disable-next-line @nx/enforce-module-boundaries
import { JobOffer } from "apps/client/src/app/models/job-offer.model";

const sampleOffersListJson = [
    {
        "id": "eb914767-d6ad-4370-a880-0a6db77ef61d",
        "postedDate": "2024-01-25T09:00:00.000Z",
        "title": "Accessibility Coordinator",
        "company": "InclusiWorks Inc.",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 55000,
            "max": 70000
        },
        "jobType": "Full-time",
        "description": "Oversee the implementation of accessibility features in the workplace.",
        "requirements": [
            "Experience with ADA compliance.",
            "Ability to coordinate accessibility initiatives."
        ],
        "responsibilities": [
            "Ensure company-wide accessibility.",
            "Implement assistive technologies."
        ],
        "benefits": [
            "Remote work flexibility.",
            "Comprehensive health coverage."
        ],
        "accessibilityFeatures": [
            "Software accommodations (screen readers, voice recognition).",
            "Flexible scheduling."
        ],
        "expiryDate": "2024-03-25T17:11:48.320Z"
    },
    {
        "id": "f57b50f1-5c7f-4c1b-8ae9-2f3c6bfa176d",
        "postedDate": "2024-01-26T09:00:00.000Z",
        "title": "Customer Service Representative",
        "company": "FriendlyVoice Inc.",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 35000,
            "max": 45000
        },
        "jobType": "Part-time",
        "description": "Provide assistance to customers via phone and email, ensuring a positive experience.",
        "requirements": [
            "Strong communication skills.",
            "Patience and a friendly demeanor."
        ],
        "responsibilities": [
            "Handle customer inquiries.",
            "Solve customer issues with patience and understanding."
        ],
        "benefits": [
            "Flexible hours to suit your needs.",
            "Work-from-home setup provided."
        ],
        "accessibilityFeatures": [
            "Ergonomic work environment.",
            "TTY telephone system for hearing impaired."
        ],
        "expiryDate": "2024-04-26T17:11:48.320Z"
    },
	{
        "id": "c8f3c77e-4137-4d0a-9f8b-5e9c3c78cb54",
        "postedDate": "2024-01-27T09:00:00.000Z",
        "title": "Web Accessibility Specialist",
        "company": "WebForAll Tech",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 60000,
            "max": 80000
        },
        "jobType": "Contract",
        "description": "Assist in developing accessible websites that meet WCAG standards.",
        "requirements": [
            "Knowledge of WCAG and ADA guidelines.",
            "Experience in web development or QA testing."
        ],
        "responsibilities": [
            "Audit websites for accessibility.",
            "Consult on accessibility improvements."
        ],
        "benefits": [
            "Health and wellness programs.",
            "Professional development stipend."
        ],
        "accessibilityFeatures": [
            "Remote work option.",
            "Flexible work hours."
        ],
        "expiryDate": "2024-05-27T17:11:48.320Z"
    },
    {
        "id": "b6a4f5e2-df1e-4a2e-9b5e-f5a28a458484",
        "postedDate": "2024-01-28T09:00:00.000Z",
        "title": "Document Accessibility Specialist",
        "company": "DocuAccessible Solutions",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 40000,
            "max": 55000
        },
        "jobType": "Full-time",
        "description": "Ensure all company documents meet accessibility standards.",
        "requirements": [
            "Familiarity with document accessibility standards.",
            "Attention to detail."
        ],
        "responsibilities": [
            "Convert documents to accessible formats.",
            "Train staff on creating accessible documents."
        ],
        "benefits": [
            "Flexible work environment.",
            "Company sponsored certifications."
        ],
        "accessibilityFeatures": [
            "Screen reader-friendly work setup.",
            "Voice-to-text software."
        ],
        "expiryDate": "2024-06-28T17:11:48.320Z"
    },
	{
        "id": "b4c0b5d2-cc80-4f1b-8e9d-e6a9d4a5a71f",
        "postedDate": "2024-01-28T08:30:00.000Z",
        "title": "Assistive Technology Trainer",
        "company": "TechAccess Solutions",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 45000,
            "max": 60000
        },
        "jobType": "Full-time",
        "description": "Train individuals with disabilities on how to use assistive technology effectively.",
        "requirements": [
            "Experience with a variety of assistive technologies.",
            "Strong teaching and communication skills."
        ],
        "responsibilities": [
            "Customize training for individual needs.",
            "Keep abreast of new technology advancements."
        ],
        "benefits": [
            "Health and wellness programs.",
            "Education reimbursement."
        ],
        "accessibilityFeatures": [
            "Voice-activated software.",
            "Alternative input devices."
        ],
        "expiryDate": "2024-05-28T08:30:00.000Z"
    },
	{
        "id": "d1a02b5c-7b8c-4d3a-8c59-67d2e3bbc531",
        "postedDate": "2024-01-29T09:00:00.000Z",
        "title": "Graphic Designer for Accessible Media",
        "company": "CreativeAccess Arts",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 50000,
            "max": 65000
        },
        "jobType": "Full-time",
        "description": "Create visually accessible media for various clients, ensuring that all designs are compliant with accessibility standards.",
        "requirements": [
            "Proficient in graphic design software.",
            "Understanding of color contrast and accessible design principles."
        ],
        "responsibilities": [
            "Design accessible digital content.",
            "Collaborate with accessibility consultants to ensure compliance."
        ],
        "benefits": [
            "Health insurance with dental and vision coverage.",
            "Company-sponsored attendance at design conferences."
        ],
        "accessibilityFeatures": [
            "Accessible design software.",
            "Flexible work hours to accommodate various needs."
        ],
        "expiryDate": "2024-06-29T17:11:48.320Z"
    },
    {
        "id": "a5b6c7d8-e9f0-11eb-ba80-0242ac130004",
        "postedDate": "2024-01-30T09:00:00.000Z",
        "title": "Remote IT Support Specialist",
        "company": "TechHelp Partners",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 45000,
            "max": 60000
        },
        "jobType": "Full-time",
        "description": "Provide remote IT support, troubleshooting software and hardware issues for clients while ensuring that all interactions are accessible.",
        "requirements": [
            "Strong technical knowledge in IT support.",
            "Excellent problem-solving and communication skills."
        ],
        "responsibilities": [
            "Offer technical assistance via phone, email, or chat.",
            "Document and resolve IT issues efficiently."
        ],
        "benefits": [
            "Work from home opportunities.",
            "Technical training and certification sponsorship."
        ],
        "accessibilityFeatures": [
            "Adaptive technology for remote assistance.",
            "Support for speech-to-text and other assistive communication tools."
        ],
        "expiryDate": "2024-07-30T17:11:48.320Z"
    },
	{
        "id": "d0c5cee1-4b14-4ec1-8b27-8e77c8c6d6b2",
        "postedDate": "2024-01-29T09:00:00.000Z",
        "title": "IT Accessibility Analyst",
        "company": "InnoTech Accessibility",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 50000,
            "max": 65000
        },
        "jobType": "Full-time",
        "description": "Work as part of the IT team to ensure all technology services are accessible to employees with a range of disabilities.",
        "requirements": [
            "Proven experience in IT with a focus on accessibility.",
            "Familiarity with accessibility standards such as Section 508."
        ],
        "responsibilities": [
            "Review and analyze current IT systems for accessibility.",
            "Provide recommendations for improvements or accommodations."
        ],
        "benefits": [
            "Comprehensive insurance plans.",
            "Generous paid leave policies."
        ],
        "accessibilityFeatures": [
            "Remote access to all company systems.",
            "Customizable workspace setups."
        ],
        "expiryDate": "2024-06-29T17:11:48.320Z"
    },
    {
        "id": "acdef081-5a4e-4cb1-aede-9d0f15c1a4cf",
        "postedDate": "2024-01-30T09:00:00.000Z",
        "title": "Sign Language Interpreter",
        "company": "SignSpeak Communications",
        "location": "Multiple Locations / Remote",
        "salaryRange": {
            "min": 40000,
            "max": 56000
        },
        "jobType": "Part-time",
        "description": "Provide sign language interpretation services in a variety of settings to facilitate communication for our deaf and hard-of-hearing employees and clients.",
        "requirements": [
            "Fluency in American Sign Language (ASL).",
            "Certification from the Registry of Interpreters for the Deaf (RID) preferred."
        ],
        "responsibilities": [
            "Interpret for meetings, trainings, and events.",
            "Assist in the creation of accessible materials."
        ],
        "benefits": [
            "Flexible scheduling.",
            "Opportunities for professional development and training."
        ],
        "accessibilityFeatures": [
            "Video relay services as needed.",
            "Communication Access Real-time Translation (CART) services."
        ],
        "expiryDate": "2024-07-30T17:11:48.320Z"
    },
	{
        "id": "5ea1f3d9-4bce-41e5-83ad-bd621a4e5f66",
        "postedDate": "2024-01-31T09:00:00.000Z",
        "title": "Remote Sales Associate",
        "company": "Boundless Horizons Sales",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 35000,
            "max": 50000
        },
        "jobType": "Full-time",
        "description": "Connect with clients to offer solutions that meet their needs while working from the comfort of your home.",
        "requirements": [
            "Excellent verbal and written communication skills.",
            "Strong understanding of customer and market dynamics."
        ],
        "responsibilities": [
            "Prospect and qualify new sales leads.",
            "Maintain relationships with existing clients."
        ],
        "benefits": [
            "Healthcare and dental plans.",
            "Paid time off and holiday leave."
        ],
        "accessibilityFeatures": [
            "Adaptable scheduling to accommodate various needs.",
            "State-of-the-art sales software with accessibility features."
        ],
        "expiryDate": "2024-07-31T17:11:48.320Z"
    },
    {
        "id": "7db2f3f0-5ebb-4d17-b2d8-4edf621d8a5e",
        "postedDate": "2024-02-01T09:00:00.000Z",
        "title": "Virtual Event Planner",
        "company": "Global Gatherings Group",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 40000,
            "max": 60000
        },
        "jobType": "Part-time",
        "description": "Plan and organize virtual events that are accessible and engaging for a diverse audience.",
        "requirements": [
            "Experience in virtual event planning.",
            "Excellent organizational skills and attention to detail."
        ],
        "responsibilities": [
            "Coordinate all aspects of virtual events.",
            "Ensure accessibility standards are met for all attendees."
        ],
        "benefits": [
            "Work-from-home support stipend.",
            "Flexible working hours to support work-life balance."
        ],
        "accessibilityFeatures": [
            "Virtual reality (VR) setups for immersive event experiences.",
            "Live captioning and sign language support for events."
        ],
        "expiryDate": "2024-08-01T17:11:48.320Z"
    },
	{
        "id": "8d2de994-e47c-4f3b-9b2c-aae5a3c8a3c1",
        "postedDate": "2024-02-02T09:00:00.000Z",
        "title": "Graphic Designer for Accessibility",
        "company": "Designs4All Studio",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 45000,
            "max": 65000
        },
        "jobType": "Full-time",
        "description": "Create and adapt visual content to be accessible for a diverse audience, including individuals with visual impairments.",
        "requirements": [
            "Proficient in design software (Adobe Creative Suite, etc.).",
            "Understanding of accessibility guidelines for visual content."
        ],
        "responsibilities": [
            "Design accessible digital content.",
            "Collaborate with the accessibility team to ensure compliance with all guidelines."
        ],
        "benefits": [
            "Competitive salary and bonus opportunities.",
            "Professional development and continued learning programs."
        ],
        "accessibilityFeatures": [
            "Screen magnification software.",
            "High-contrast visual design tools."
        ],
        "expiryDate": "2024-08-02T17:11:48.320Z"
    },
    {
        "id": "9e6dc5fa-3772-4b55-9b66-4e9f3e65e492",
        "postedDate": "2024-02-03T09:00:00.000Z",
        "title": "Accessibility Consultant",
        "company": "Inclusive Future Consulting",
        "location": "Remote / Anywhere",
        "salaryRange": {
            "min": 50000,
            "max": 70000
        },
        "jobType": "Contract",
        "description": "Provide expertise to businesses on how to create inclusive products and services for customers with disabilities.",
        "requirements": [
            "Deep knowledge of accessibility laws and standards.",
            "Experience in conducting accessibility audits and user testing."
        ],
        "responsibilities": [
            "Advise on best practices for accessibility.",
            "Lead training sessions on accessibility awareness."
        ],
        "benefits": [
            "Flexible work hours.",
            "Opportunity to work on a variety of projects across industries."
        ],
        "accessibilityFeatures": [
            "Work from home accommodations.",
            "Access to cutting-edge accessibility testing tools."
        ],
        "expiryDate": "2024-09-03T17:11:48.320Z"
    }
];

function getSampleOffersList(): JobOffer[] {
	  const offers: JobOffer[] = sampleOffersListJson.map(offer => {
				return {
			      id: offer.id,
			      postedDate: new Date(offer.postedDate),
			      title: offer.title,
			      company: offer.company,
			      location: offer.location,
			      salaryRange: offer.salaryRange,
			      jobType: offer.jobType,
			      description: offer.description,
			      requirements: offer.requirements,
			      responsibilities: offer.responsibilities,
			      benefits: offer.benefits,
			      accessibilityFeatures: offer.accessibilityFeatures,
			      expiryDate: new Date(offer.expiryDate),
		    }
	  });
	  return offers;
}

export default getSampleOffersList;
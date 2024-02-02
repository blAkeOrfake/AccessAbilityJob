import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put
} from "@nestjs/common";
import { OfferService } from "./offer.service";
import { JobOffer } from "./offer.model";

@Controller("job-offers")
export class OfferController {
	constructor(private readonly jobOfferService: OfferService) {}

	@Post()
	createJobOffer(@Body() jobOfferDto: Omit<JobOffer, "id">): JobOffer {
		return this.jobOfferService.createJobOffer(jobOfferDto);
	}

	@Post("sample")
	createSampleJobOffers(): void {
		return this.jobOfferService.createSampleJobOffers();
	}

	@Get()
	getAllJobOffers(): JobOffer[] {
		return this.jobOfferService.getAllJobOffers();
	}

	@Get(":id")
	getJobOfferById(@Param("id") id: string): JobOffer {
		return this.jobOfferService.getJobOfferById(id);
	}

	@Put(":id")
	updateJobOffer(
		@Param("id") id: string,
		@Body() jobOfferDto: Omit<JobOffer, "id">
	): JobOffer {
		return this.jobOfferService.updateJobOffer(id, jobOfferDto);
	}

	@Delete(":id")
	deleteJobOffer(@Param("id") id: string): void {
		return this.jobOfferService.deleteJobOffer(id);
	}

	@Delete("all")
	deleteAllJobOffers(): void {
		return this.jobOfferService.deleteAllJobOffers();
	}
}

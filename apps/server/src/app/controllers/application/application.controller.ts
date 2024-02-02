import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JobApplicationService } from './application.service';
import { IJobApplication, JobApplication } from './application.model';


@Controller('job-applications')
export class JobApplicationController {
  constructor(private readonly jobApplicationService: JobApplicationService) {}

  @Post()
  createJobApplication(@Body() jobApplicationDto: Omit<IJobApplication, 'id'>): JobApplication {
    return this.jobApplicationService.createJobApplication(jobApplicationDto);
  }

  @Get()
  getAllJobApplications(): JobApplication[] {
    return this.jobApplicationService.getAllJobApplications();
  }

  @Get(':id')
  getJobApplicationById(@Param('id') id: string): JobApplication {
    return this.jobApplicationService.getJobApplicationById(id);
  }

  @Put(':id')
  updateJobApplication(@Param('id') id: string, @Body() jobApplicationDto: Omit<IJobApplication, 'id'>): JobApplication {
    return this.jobApplicationService.updateJobApplication(id, jobApplicationDto);
  }

  @Delete(':id')
  deleteJobApplication(@Param('id') id: string): void {
    this.jobApplicationService.deleteJobApplication(id);
  }
}

import { Case } from '@/app/core/interfaces/case.interface';

import { Testimonial } from '../entities/testimonial.entity';
import { TestimonialsRepository } from '../repositories/testimonials.repository';

export class TestimonialsListCase implements Case<Promise<Testimonial[]>> {
  constructor(
    private readonly testimonialsRepository: TestimonialsRepository
  ) {}

  execute() {
    return this.testimonialsRepository.getAll();
  }
}
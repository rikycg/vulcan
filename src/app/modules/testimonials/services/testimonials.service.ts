import { dbService } from '@/app/core/services/db.service';

import { TestimonialsRepository } from '../repositories/testimonials.repository';

export class TestimonialsService extends TestimonialsRepository {
  async getAll() {
    return dbService.get('testimonials');
  }
}
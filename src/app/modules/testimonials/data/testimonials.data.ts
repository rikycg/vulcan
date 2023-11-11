import { TestimonialsListCase } from '../cases/testimonials-list.case';
import { TestimonialsService } from '../services/testimonials.service';

export const testimonialsService = new TestimonialsService();
export const testimonialsListCase = new TestimonialsListCase(testimonialsService);
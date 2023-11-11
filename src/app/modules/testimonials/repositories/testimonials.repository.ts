import { Testimonial } from '../entities/testimonial.entity';

export abstract class TestimonialsRepository {
  abstract getAll(): Promise<Testimonial[]>;
}
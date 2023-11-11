import { Profile } from '@/app/modules/profile/entities/profile.entity';
import { Skill } from '@/app/modules/skills/entities/skill.entity';
import { SocialNetwork } from '@/app/modules/social-network/entities/social-network.entity';
import { Testimonial } from '@/app/modules/testimonials/entities/testimonial.entity';

export class HomeInfo {
  profile!: Profile;
  testimonials: Testimonial[] = [];
  skills: Skill[] = [];
  socialNetworks: SocialNetwork[] = [];
}
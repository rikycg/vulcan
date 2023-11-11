import { profileCase } from '@/app/modules/profile/data/profile.data';
import { Profile } from '@/app/modules/profile/entities/profile.entity';
import { skillsListCase } from '@/app/modules/skills/data/skills.data';
import { Skill } from '@/app/modules/skills/entities/skill.entity';
import { socialNetworksListCase } from '@/app/modules/social-network/data/social-networks.data';
import { SocialNetwork } from '@/app/modules/social-network/entities/social-network.entity';
import { testimonialsListCase } from '@/app/modules/testimonials/data/testimonials.data';
import { Testimonial } from '@/app/modules/testimonials/entities/testimonial.entity';

import { HomeInfo } from './models/home-info.model';

class HomeService {
  public profile!: Profile;
  public testimonials: Testimonial[] = [];
  public skills: Skill[] = [];
  public socialNetworks: SocialNetwork[] = [];

  async getHomeData(): Promise<HomeInfo> {
    const profile = await profileCase.execute();
    const testimonials = await testimonialsListCase.execute();
    const skills = await skillsListCase.execute();
    const socialNetworks = await socialNetworksListCase.execute();

    this.profile = profile;
    this.testimonials = testimonials;
    this.skills = skills;
    this.socialNetworks = socialNetworks;

    return { profile, testimonials, skills, socialNetworks };
  }
}

export const homeService = new HomeService();

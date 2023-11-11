import { SocialNetworksListCase } from '../cases/social-networks-list.case';
import { SocialNetworksService } from '../services/social-networks.service';

export const socialNetworksService = new SocialNetworksService();
export const socialNetworksListCase = new SocialNetworksListCase(socialNetworksService);
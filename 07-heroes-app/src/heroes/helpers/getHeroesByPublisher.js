import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['Marvel Comics', 'DC Comics'];
    
    if(!validPublishers.includes(publisher)){
        throw new Error('The publisher ' + publisher + ' is not valid');
    }

    return heroes.filter( hero => hero.publisher === publisher);
}
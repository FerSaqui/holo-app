import { vtubers } from "../data/vtubers"

export const getVtuberByPublisher = (publisher) => {
    const validPublisher = ["Hololive EN", "Hololive JP"];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher.`);
    }

    return vtubers.filter( vtuber => vtuber.publisher === publisher );
}
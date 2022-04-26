import { vtubers } from "../data/vtubers";

export const getVtubersByName = (name = "") => {
    if (name.length === 0) {
        return [];
    }

    name = name.toLowerCase();
    return vtubers.filter( vtuber => vtuber.name.toLowerCase().includes(name));
}
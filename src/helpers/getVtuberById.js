import { vtubers } from "../data/vtubers"

export const getVtuberById = (vtuberId = "") => {
    return vtubers.find(vtuber => vtuber.id === vtuberId);
}
import { vtubers } from "../data/vtubers"

export const getVtuberById = (vtuberId = "") => {
    console.log("getVtuberById called");
    return vtubers.find(vtuber => vtuber.id === vtuberId);
}
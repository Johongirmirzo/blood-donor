import {decode} from "html-entities";

export const decodeHtml = (html: string)=> decode(html);
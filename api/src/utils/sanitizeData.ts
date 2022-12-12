import escape from "escape-html";

const sanitizeData = (data: string)=> escape(data)

export default sanitizeData;
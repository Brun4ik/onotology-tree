import {Example} from "../interfaces/example";

export async function http(request: RequestInfo):Promise<Example[]>{
    const response = await fetch(request);
    return await response.json();
}

// export async function getById(request: RequestInfo):Promise<ExampleId[]>{
//     const response = await fetch(request);
//     return await response.json();
// }





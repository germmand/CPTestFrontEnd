export const URL: string = "http://localhost:3000/";

export function GetFullUrl(uri: string): string {
    return URL + uri;
}
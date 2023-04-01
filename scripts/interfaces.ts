export interface ResultType {
    type: string,
    url: string,
    title: string,
    description: string,
    url_cut: string
}

export interface SpecialType {
    type: string,
    url: string,
    title: string,
    rating: string,
    description: string,
    genres: Array<string>,
    subsections: Array<string>
}

export interface IndecisiveType {
    type: string,
    url: string,
    title: string,
    description: string,
    url_cut: string
    rating: string,
    genres: Array<string>,
    subsections: Array<string>
}
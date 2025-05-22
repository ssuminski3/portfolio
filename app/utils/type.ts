export type Tech = {
    name: string,
    class: string
}

export type ProjectType = {
    title: string,
    description: string,
    image: string,
    github_link: string,
    prod_link?: string,
    techStack: Tech[]
}
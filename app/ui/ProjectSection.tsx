'use client';

import { useState } from "react";
import TechDropdown from "./techDropDown";
import Project from "./project";
import { ProjectType, Tech } from "../utils/type";

type Props = {
    techStack: ProjectType[];
    techList: Tech[];
};

export default function ProjectSection({ techStack, techList }: Props) {
    const [selected, setSelected] = useState<Tech | null>(null);

    const filteredProjects = selected
        ? techStack.filter(project =>
            project.techStack.some(t => t.name === selected.name)
        )
        : techStack; // <-- null means show all


    return (
        <div>
            <TechDropdown techList={techList} onSelect={setSelected} />
            {filteredProjects.map((item, i) => (
                <Project
                    key={i}
                    title={item.title}
                    description={item.description}
                    github_link={item.github_link}
                    techStack={item.techStack}
                    prod_link={item.prod_link}
                />
            ))}
        </div>
    );
}

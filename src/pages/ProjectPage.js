import React from 'react';
import { useAxios } from "use-axios-client";
import { Link, useParams, useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;


const RenderedProject = () => {
    //require navigate function 
    const navigate = useNavigate();
    const params = useParams();
    const endpoint = `http://localhost:8888/dow/wp-json/wp/v2/projects/${params.id}?_embed`

    const { data: project, error, loading } = useAxios({
        url: endpoint
    })
    if (loading) return "Loading...";
    if (!project) return "No data...";
    if (project.length === 0) return "No results found!";
    if (error) return "Error!";
    console.log(project)

    const Skills = () => {
        const skillsEndpoint = project._links["wp:term"][0].href;
        const { data: skills, error, loading } = useAxios({
            url: skillsEndpoint
        })
        if (loading) return "Loading...";
        if (!skills) return "No data...";
        if (skills.length === 0) return "No skills found!";
        if (error) return "Error!";
        console.log(skills);

        const showSkills = skills.map((skills, index) => {
            if (skills.name !=="") {
                return (
                    <div className="skill-pill" key={index}>
                        <p>{skills.name}</p>
                    </div>
                )
            }
        })
        return showSkills
    }

 
    return (
        <div id="project-page">
            <h1>{project.title.rendered}</h1>
            <div id="project-text-wrapper">
                <div id="skills-wrapper">
                    <Skills />
                </div>
                <div className="content" dangerouslySetInnerHTML={{ __html:project.content.rendered }} />

            </div>

        </div>
    )
  
}

const ProjectPage = () => {
    return (
        <div>
            
            <RenderedProject/>
            
       </div>
    )
}

export default ProjectPage;
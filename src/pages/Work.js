import React from 'react';
import { useAxios } from "use-axios-client";
// import { Link } from "react-router-dom";

//import components 

//import images 
import mockup from "./../images/dow-mockup1.png"
import orangeStar from "./../images/orange-star.png"
import flowerBtn from "./../images/bigblueflower.png"


const AllProjects = () => {
    const  endpoint = `http://localhost:8888/dow/wp-json/wp/v2/projects?_embed`
    const { data: projects, error, loading } = useAxios({
        url: endpoint
    });
    if (loading) return (
        <div id="loading">
            <h2>COOKING UP SOMETHING GOOD...</h2>
        </div>
    )
    if (!projects) return "No data...";
    if (projects.length === 0) return "No results found!";

    if (error) return (
        <div id="error">
            <h2>UH OH, SOMETHING WENT WRONG...</h2>
            <p>Please try again</p>
        </div>
    )
    console.log(projects);

   

    const showWork = projects.map((projects, index) => {
        const GetImage = () => {
            if (projects._embedded) {
                if (projects._embedded['wp:featuredmedia']) {
                    return (
                        <img src={projects._embedded['wp:featuredmedia'][0].source_url} alt={projects.title.rendered} />
                    )
                }
            }
        }

  

        const ProjectType = () => {
            if (projects.acf) {
                if (projects.acf.project_type !== "null") {
                    return (
                        <div id="type-pill">
                            <p>{projects.acf.project_type}</p>
                        </div>
                    )
                }
            }
        }

        const GoToSite = () => {
            if (projects.acf) {
                if (projects.acf.project_url !== "null") {
                    return (
                        <div id="view-site-btn">
                            <a href={projects.acf.project_url}>View Site</a> 
                        </div>
                    )
                }
            }
        }

        const AllImages = () => {
            const imagesEndpoint = projects._links["wp:attachment"][0].href;
            const { data: images, error, loading } = useAxios({
                url: imagesEndpoint
            })
            if (loading) return "Loading...";
            if (!images) return "No data...";
            if (images.length === 0) return "No results found!";
            if (error) return "Error!";
         
            
            const showAllImages = images.map((images, index) => {
                if (images.slug !=="") {
                    return (
                        <div className='all-image-wrapper' id={images.slug}   key={index} >
                            <img alt={images.slug} src={images.source_url}/>
                        </div>
                    )
                } else {
                    return (
                        <p>no other images!</p>
                    )
                }
            })
            return showAllImages
        }

        const Skills = () => {
            const skillsEndpoint = projects._links["wp:term"][0].href;
            const { data: skills, error, loading } = useAxios({
                url: skillsEndpoint
            })
            if (loading) return "Loading...";
            if (!skills) return "No data...";
            if (skills.length === 0) return "No results found!";
            if (error) return "Error!";
            console.log(skills);
    
            const showSkills = skills.map((skills, index) => {
                if (skills.name !=="") {
                    return (
                        <div className="skill-pill" key={index}>
                            <p>{skills.name}</p>
                        </div>
                    )
                } else {
                    return (
                        <p>No skills to show!</p>
                    )
                }
            })
            return showSkills
        }

        return (
            <div key={index} id="projectCard">
                {/* <Link to={`/work/${projects.id}`}> */}
                    <div id="project-header">
                        <div id="number-wrapper">
                            <h3>{index + 1}</h3>
                            <img className="rotate" src={orangeStar} alt={index + 1}/> 

                        </div>

                        <div id="title-skills">
                            <h3>{projects.title.rendered}</h3>
                            < ProjectType /> 
                            <GoToSite/>
                        </div>
                    </div>
                    <div id="image-wrapper">
                        <AllImages/>
                        < GetImage />
                        
                    </div>
                    <div id="skills-wrapper">
                        <Skills/>
                    </div>
                {/* </Link> */}
            </div>
        )
    })
    return showWork;
 }



const Work = () => {
  return (
    <div id="work-wrapper">
        <div id="work-hero">
            <div id="heading">
            <h1>PROJECTS</h1>
            </div>
            <div id="image-wrapper">
                <img src={mockup} alt="project mockup"/> 
            </div>
            
            <div id="flower-button-wrapper">
                <a href="#number-wrapper">
                    <img src={flowerBtn} alt="scroll"/>
                    <p>SCROLL</p>
                </a>
            </div>
               
        </div>
        <div id="all-work-wrapper">
        < AllProjects />
        </div>
    </div>
  )
}

export default Work;



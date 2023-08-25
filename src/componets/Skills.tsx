import data from '../data/skills.json'
import Figma from '../assets/skills/figma.png'
import Photoshop from '../assets/skills/photoshop.png'
import Adobeillustrator from '../assets/skills/adobeIllustrator.png'
import AdobeXD from '../assets/skills/adobeXd.png'
import Sketch from '../assets/skills/sketch.png'
import Tailwind from '../assets/skills/tailwind.png'
import JavaScript from '../assets/skills/javascript.png'
import ReactJS from '../assets/skills/react.png'
import { Skill } from '../interfaces/skill';


const images = [

    Figma,
    Photoshop,
    Adobeillustrator,
    AdobeXD,
    Sketch,
    Tailwind,
    JavaScript,
    ReactJS

]

const skills : Skill[]= data


export const Skills = () => {



    return (
        <div className='my-12 px-12 md:items-center'>
            {/* Texto for skills */}
            <div className=" flex flex-col gap-y-2 mb-5">
                <h1 className='text-2xl font-semibold uppercase'>Skills</h1>
                <p className='text-xl to-gray-600'>What I Know best</p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-between gap-5 md:justify-center">
            {
                skills.map((teck, i) => (
                    <div className="bg-slate-200 w-[180px] aspect-square flex flex-col justify-center items-center gap-y-5 rounded-md shadow-sm hover:shadow-md transition-shadow" key={teck.id}>
                        <img src={ `${images[i]}` } alt={teck.name} width={60}></img>
                        <h3 className='text-[14px] tracking-wider'>{teck.name}</h3>

                    </div>
                ))
            }
            </div>
        </div>
    )
}

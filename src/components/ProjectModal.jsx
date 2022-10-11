import React from 'react'
import ReactDOM from 'react-dom';
import { projectData } from '../projectData';

const ProjectModal = ({vis, hide, id}) => vis ? ReactDOM.createPortal(
    <div id="modal-overlay" className="absolute top-0 w-screen h-full lg:h-screen bg-gray-500/50 backdrop-blur-sm flex flex-col justify-start lg:justify-center">
        <div id="modal-wrapper">
    <div id="modal" className="relative bg-slate-500 py-5 w-full lg:w-3/5 m-auto">
        <div id="modal-header" className="relative">
            <button className="absolute right-2 lg:-top-4 z-50 active:text-red-500" id="modal-button" type="button" data-dismiss="modal" onClick={hide}>
                x
            </button>

                {projectData.filter(x => x.id == id).map((proj) => (
                    <>
                                                
                    <div className="relative flex flex-col lg:flex-row-reverse gap-0 justify-center">
                    <img src={`../../${id}.png`} className="w-[300px] h-[250px] m-auto mt-5 lg:mr-20 object-cover shadow-md"/>
                                <div className="flex flex-col gap-2 text-center ml-3">
                                    <h1>{proj.name}</h1>
                                <div className="flex flex-row gap-8 justify-center mt-5">
                                    <a href={proj.github} className="bg-white text-black active:text-blue-700 px-5 py-2 z-50">Github</a>
                                    <a href={proj.live} className="bg-white text-black active:text-blue-700 px-5 py-2 z-50">Live</a>
                                </div>
                                <span className="w-4/5">{proj.desc}</span>
                                <div className="flex flex-row gap-2 flex-wrap">
                                    {proj.stack.map((x) => (
                                        <div className="bg-gray-200 px-5 text-sm py-1 text-black">{x}</div>
                                    ))}
                                    </div>
                                </div>
                                </div>
                                </>
                ))}
        </div>
    </div>
    </div>
        </div>
  , document.body
) : null;

export default ProjectModal
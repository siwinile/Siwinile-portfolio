import React from 'react';



const SkillSection = () => {
return(
    <section className="SkillSection container section" id = 'Skillsection'>
        <h2 className ="Section_title">My Skill</h2>

        <div classnmae="SkillSection_container grid">
            <img src={image} alt="" className="SkillSection_img"/>
            <div className="SkillSection_data grid">
            <div className="SkillSection_info"></div>
                <p classname="SkillSection_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus adipisci perspiciatis nisi reiciendis ratione, corporis sed quod harum, voluptate quasi ipsam, porro sunt eaque facere consequatur alias consectetur optio!</p>
            </div>
        </div>
    </section>
)
}
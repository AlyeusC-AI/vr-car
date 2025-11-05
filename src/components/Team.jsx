import './Team.css';
import Footer from './Footer';
import alyeus from '../assets/team/alyeus.png';

import link from '../assets/socials/linkedin.png';
import git from '../assets/socials/github.png';
import insta from '../assets/socials/instagram.png';
import tweet from '../assets/socials/twitter.png';

const teamMembers = [
    {
        img: alyeus,
        name: "Alyeus Craig",
        usn: "4MW22CS179",
        role: "Team Lead",
        description: "Three.js & WebGL Developer",
    }
];


function Team() {
    return (
        <>
            <div id='team' className='team section'>
                <div className="slider" style={{ "--quantity": teamMembers.length }}>
                    {teamMembers.map((member, index) => (
                        <div className="item" style={{ "--position": index + 1 }} key={member.usn}>
                            <div className="content">
                                <img src={member.img} alt={member.name} />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                                <p>SMVITM</p>
                                <div className="info">
                                    <p>{member.description}  </p>
{/*                                     <div className="socials">
                                        {member.socials.map((social, i) => (
                                            <a href={social.url} key={i} target="_blank" rel="noopener noreferrer">
                                                <img src={social.icon} alt={social.alt} />
                                            </a>
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Team;

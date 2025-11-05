import './Team.css';
import Footer from './Footer';
import yogin from '../assets/team/yogin.png';
import samarth from '../assets/team/samarth.png';
import sujan from '../assets/team/sujan.png';
import vinyas from '../assets/team/vinyas.png';

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
        // socials: [
        //     { icon: link, alt: "LinkedIn", url: "linkedin.com/in/yogin-kumar-9a7a6a372" },
        //     { icon: insta, alt: "Instagram", url: "https://instagram.com/vijay_netekal_287" },
        //     { icon: tweet, alt: "Twitter", url: "https://twitter.com/Netekal1Vijay" }
        // ]
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

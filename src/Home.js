import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const Home = () => {
    return (
        <div>

            <section className='section-1'>
                <section className='frontend-image'>
                    <img src='front-image.avif' alt='Front-End' width={800} height={550}  />
                </section>
                <section className='about'>
                    <h2 >About Me</h2>
                    <p className='bio-text'>I am a Front-end developer with a passion for creating beautiful, functional websites. I have a love for learning new technologies.</p>
                </section>
            </section>
            <section className='section-2'>
                <h2>More About Me</h2>
                <p>
                    My name is Shubham, and I am a bootcamp educated Front-end and self-taught developer. I am currently focused on obtaining a full-time, entry-level role as a Frontend Developer / Engineer.

                    I am diligent about working on things until they are functioning the way they are supposed to. The ability to think outside of the box to find solutions has given me the upper hand because I am able to do so. Also, the ability to reach out for help without feeling like I have somehow failed or not been “smart enough” to figure it out on my own is something that has been beneficial. Sometimes pride can really get in the way and waste precious time.

                    I have found that on my journey to become a developer I have been able to mentor others choosing the same path. This includes finding educational material, working through docs (making them make sense), working through difficulties in projects and being an ear when needed.
                </p>
            </section>
        </div>
    );
}

export default Home;
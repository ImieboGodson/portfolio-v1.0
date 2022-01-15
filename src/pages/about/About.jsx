import Header from '../../components/header/Header';
import './about.scss';

const AboutPage = () => {
    return (
        <>
            <Header />
            <div id="about">
                <div className="aboutWrapper container">
                    <div className="aboutPictureWrapper">
                        <img src="assets/aboutimage.jpg" alt="The Good Life Quote" srcset=""/>
                    </div>
                    <div className="aboutSections myStory">
                        <div className="sectionLeft">
                            <div className="sectionTitleWrapper">
                                <p className="sectionNumber">/01</p>
                                <p className="sectionTitle">STORY</p>
                            </div>
                        </div>
                        <div className="sectionRight">
                            <div className="sectionTopicWrapper">
                                <p className="sectionTopic">A Search For Purpose</p>
                            </div>
                            <div className="sectionBodyWrapper">
                                <p className="sectionBody">
                                    After graduating with a degree in Electrical and Computer Engineering, I started the search to figure out what, where and how I really intended to make my own little contribution to the growth of my country while getting some sort of self-fulfillment and money…let's not forget money, it's important to take care of responsibilities and enjoy life.<br/><br/>

                                    I started to notice how young futuristic Nigerians like myself were shaping the ecosystem by bringing ideas to life with code. I have come to the conclusion that there's no better place to be than at the forefront of change and growth. Since then, I have also found that I really enjoy the satisfaction that I get from seeing a project I worked on come together, potentially affect lives positively and look really good. <br/><br/>

                                    <strong>What do I see?</strong> I see a future where I can contribute to the prosperity of my country…the continent with my expertise as a Software Developer because at the end of the day, I am but a simple guy with simple beginnings that has a mind that carries big dreams, looking to follow in the footsteps of the greats that have journeyed down this path of life before me hoping that at the end lies joy and gladness.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutSections workProcess">
                        <div className="sectionLeft">
                            <div className="sectionTitleWrapper">
                                <p className="sectionNumber">/02</p>
                                <p className="sectionTitle">THE PROCESS</p>
                            </div>
                        </div>
                        <div className="sectionRight">
                            <div className="sectionTopicWrapper">
                                <p className="sectionTopic">How I Get Stuff Done</p>
                            </div>
                            <div className="sectionBodyWrapper">
                                <p className="sectionBody">
                                    I have come to realize that the zeal to get things done is always at a high at the start of a project so, I always love to carry that initial momentum from the start of a project and get as much done as early as possible so as to make plenty of room for iterations or fixes. Once my playlist is on and I get plugged in, I am ready to go any day or time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutSections myTools">
                        <div className="sectionLeft">
                            <div className="sectionTitleWrapper">
                                <p className="sectionNumber">/03</p>
                                <p className="sectionTitle">TOOLS</p>
                            </div>
                        </div>
                        <div className="sectionRight">
                            <div className="sectionTopicWrapper">
                                <p className="sectionTopic">My Weapons of Choice</p>
                            </div>
                            <div className="sectionBodyWrapper">
                                <p className="sectionBody">
                                    I majorly write frontend code…for now; which means I write a lot of HTML…HTML-like code, CSS and JavaScript…JavaScript-like code. When I decide to go the framework direction, I flow in the React JS direction presently …because I always like exploring other paths to find the most efficient way to get things done and beautiful. I use Git and Github to store, share my code and contribute to open-source projects. On my terminal and for creating server (those few times I have wondered about the backend part of things.), I use NPM and Node JS. Just because of my curiosity and affection for making what I do look good I find myself interacting with the Figma interface trying to understand the thinking behind a design and how best to birth it with code.
                                </p>
                            </div>
                            <div className="sectionTopicWrapper toolsListTopic">
                                <p className="sectionTopic">Web Development</p>
                            </div>
                            <div className="sectionBodyWrapper">
                                <div className="skillsGrid">
                                    <p className="skillItem">Figma</p>
                                    <p className="skillItem">JavaScript</p>
                                    <p className="skillItem">Git</p>
                                    <p className="skillItem">HTML 5</p>
                                    <p className="skillItem">React JS</p>
                                    <p className="skillItem">NPM</p>
                                    <p className="skillItem">CSS 3</p>
                                    <p className="skillItem">Node JS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutSections contacts">
                        <div className="sectionLeft">
                            <div className="sectionTitleWrapper">
                                <p className="sectionNumber">/04</p>
                                <p className="sectionTitle">CONTACT</p>
                            </div>
                        </div>
                        <div className="sectionRight">
                            <div className="sectionTopicWrapper">
                                <p className="sectionTopic">Socials.</p>
                            </div>
                            <div className="sectionBodyWrapper">
                                <div className='heroSocialLinksWrapper'>
                                    <a href='https://twitter.com/dev_oye' target="_blank" rel='noreferrer' className='socialLink twitter'>Twitter</a>/
                                    <a href='https://www.linkedin.com/in/godson-imiebo-3b9878190/' target="_blank" rel='noreferrer' className='socialLink linkedin'>LinkedIn</a>/
                                    <a href='https://github.com/ImieboGodson' target="_blank" rel='noreferrer' className='socialLink github'>Github</a>
                                </div>
                            </div>
                            <div className="sectionTopicWrapper emailWrapper">
                                <p className="sectionTopic">Email.</p>
                            </div>
                            <div className="sectionBodyWrapper">
                                <div className='heroSocialLinksWrapper'>
                                    <a href='mailto:imiebo.godson@gmail.com' target="_blank" rel='noreferrer' className='socialLink twitter'>imiebo.godson@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="aboutSections contacts">
                        <div className="sectionLeft">
                            <div className="sectionTitleWrapper">
                                <p className="sectionNumber">/05</p>
                                <p className="sectionTitle">APPRECIATIONS</p>
                            </div>
                        </div>
                        <div className="sectionRight">
                            <div className="sectionTopicWrapper">
                                <p className="sectionTopic">A Grateful Heart Beats Healthier</p>
                            </div>
                            <div className="sectionBodyWrapper">
                                <div className="companyLinks">
                                    <a href="https://hng.tech/" className="linkIcon"><img src="../../assets/hng logo.png" alt="HNG Logo" srcset=""/></a>
                                    <a href="https://internship.zuri.team/" className="linkIcon"><img src="../../assets/i4g-zuri logo.jpg" alt="Zuri x I4G Logo" srcset=""/></a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default AboutPage;

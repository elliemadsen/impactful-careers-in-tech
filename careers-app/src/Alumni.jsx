import React, {Component} from "react";
import {Card} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';


const techMedia = [
    {name:"Sam Dean ‘10", role:"Tech reporter, LA times"},
    {name:"Bailey Yimeng Hu '15", role:"Tech reporter, TechNode"},
    {name:"Natasha Singer", role:"Tech reporter, New York Times (health technology, education technology and consumer privacy)"},
]
const techEthics = [
    {name:"Sharon Lo ‘16", role:"Product Manager, Microsoft Ethics & Society"},
    {name:"", role:""},
    {name:"Ploipailin Flynn '09", role:"Business Lead, Projects by IF (technology studio specializing in ethical and practical uses of data; data rights, transparent and accountable advanced technology, new business models for sustainable future)"},
    {name:"Veronica C. Abreu '98", role:"Chief Privacy Officer, Head of International Legal, Square (leads data privacy and information security legal functions, member of its AI ethics working group)"},
    {name:"danah boyd", role:"Technology & Social Media Scholar, Microsoft Research"},
    {name:"Solon Barocas ‘03", role:"Ethical AI & Algorithmic Fairness Researcher & Faculty, Microsoft Research and Cornell University"}
]
const environment = [
    {name:"William R. Meade '82", role:"Clean Energy Development Expert, Tetra Tech"},
    {name:"Sanjay Mahendra Ranchod '96", role:"Director of Business Development and Policy, Tesla"},
    {name:"E. Holley Atkinson '81", role:"Entrepreneur, Sustainable Food Tech & Urban Agriculture"}
]
const health = [
    {name:"Christopher William Bakerlee '12", role:"Evolutionary genetics research, Harvard University (especially interested in how we can use tech and policy innovation to stem pandemic risks from emerging biotechnologies)"},
    {name:"Dan Ziring", role:"Clinical Trials Software Developer, Flatiron Health"}
]
const privacy = [
    {name:"Marlena E. Erdos '83", role:"President, Acknowledge Software (security and privacy in computer networks)"},
    {name:"Noah Cowan '19", role:"Cyber Defense Technology Specialist, Darktrace (AI cyber security company for threat detection and response)"},
    {name:"Ethan Paul Fecht '20", role:"Strategic Intelligence Analyst, FaceBook (formerly US Navy, NSA)"},
    {name:"Noela V. Nakos ScM'93", role:"Global Lead, Technical Program Management: Privacy, Security and Trust, Google"},
    {name:"Amélie-Sophie Vavrovsky", role:"Founder, Formally (legal tech company that simplifies immigration applications for displaced people), Cyber-policy & security Masters student, Stanford University International Policy Program"}
]
const govtech = [
    {name:"Shubha Dahal '20", role:"Criminal Investigator, U.S. Food and Drug Administration (Cybersecurity)"},
    {name:"Daniel Kahn Gillmor ‘98", role:"Senior Staff Technologist, American Civil Liberties Union (ACLU)"},
    {name:"Vandhana Ravi ", role:"Data for Social Good Program Associate, Georgetown University Center for for Social Impact"},
    {name:"Noah Picard", role:"CTO, Formally (legal tech company that simplifies immigration applications for displaced people) and ML at Nextdoor"}
]
const edtech = [
    {name:"Matt Lerner", role:"Founder, Two Screens for Teachers"},
    {name:"Cliff Weitzman", role:"Founder, Speechify (Text to speech software, advocate for learners with Dyslexia)"}
]
const business = [
    {name:"Viveka Hulyalkar", role:"Co-founder, BEAM (elevating socially-responsible brands & impactful, transparent non-profits)"}
]
const hci = [
    {name:"Merrie Ringel Morris '01", role:"Senior Human-Computer Interaction Researcher, Microsoft"}
]
const design = [
    {name:"Tiffany Chen ‘18", role:"Accessible & Inclusive Design, Microsoft"}
]



// maps each project from App.js to an HTML element or Component for render
export default class Alumni extends Component {
    
    renderList(list) {

        const items = list.map(item => {
             return <div class="list">
                <Card className="card">
                    <Card.Text>
                        <Card.Title>{item.name}</Card.Title>
                        {item.role}
                    </Card.Text>
                </Card>
            </div>

            });

        return items;
}


    render() {
        return (
            <div>
                <Header/>
                <div class="App" class="Alumni">
                    <div class="section">
                        <h2>Tech Media</h2>
                        {this.renderList(techMedia)}
                    </div>
                    <div class="section">
                        <h2>Environment + Sustainability</h2>
                        {this.renderList(environment)}
                    </div>
                    <div class="section">
                        <h2>GovTech + Social Justice</h2>
                        {this.renderList(govtech)}
                    </div>
                    <div class="section">
                        <h2>Health + BioTech</h2>
                        {this.renderList(health)}
                    </div>
                    <div class="section">
                        <h2>Privacy + Cybersecurity</h2>
                        {this.renderList(privacy)}
                    </div>
                    <div class="section">
                        <h2>Tech Ethics</h2>
                        {this.renderList(techEthics)}
                    </div>
                    <div class="section">
                        <h2>EdTech</h2>
                        {this.renderList(edtech)}
                    </div>
                    <div class="section">
                        <h2>Business + Consumer Tech</h2>
                        {this.renderList(business)}
                    </div>
                    <div class="section">
                        <h2>Human-Computer Interaction</h2>
                        {this.renderList(hci)}
                    </div>
                    <div class="section">
                        <h2>Design</h2>
                        {this.renderList(design)}
                    </div>

                </div>
                <Footer/>

            </div>


        );
    }
}

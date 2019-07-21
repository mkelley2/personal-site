export const projects = {
    cloudengage: {
        company: "CloudEngage Inc.",
        companyUrl: "https://cloudengage.com",
        projectTitle: "All Major Features",
        jobTitle: "Software Engineer",
        screenshots: {
            desktop: ["images/cloudengage.svg"],
            mobile: ["images/mobile - Chord.png", "images/mobile - Evolve.png"]
        },
        logo: "logos/cloud-logo.png",
        demos: ["https://retail.gocloudengage.com/", "https://auto.gocloudengage.com/"],
        stack: [
            "PhalconPHP",
            "PHP",
            "jQuery",
            "mySQL",
            "mongoDB",
            "Greensock",
            "Pusher websockets",
            "Various RESTful APIs",
            "HTML",
            "JavaScript",
            "CSS",
            "SASS",
        ],
        description: ["After completing Epicodus I was brought on originally as an intern at CloudEngage. After working there through the Summer I was selected as one of the interns to be brought on full time. From there I quickly rose amoung the ranks and was giving lead developer on the company's biggest and newest feature, Chord.", "While working at CloudEngage I was tasked with working on the front and back end of all of the major features, services and products offered. Since it was a pretty small engineering team of only 3-6 engineers, I had the opprtunity to work on all aspects of the platform. My main tasks were handling our Alert feature, Chord Messaing Service, automated email system for various email automation needs, and the billing system through Stripe. Chord, the chat messaging service, was my prime focus which allowed me to gain lots of experience dealing with websockets.", "Due to my work at CloudEngage being proprietary I cannot post any code samples but you can view a demo of CloudEngage below or you can check out the Chord chat service at https://cloudengage.com/platform/chord. "]
    },
    delane: {
        company: "Delane Studios",
        companyUrl: null,
        projectTitle: "SimSync mod for Sims4",
        jobTitle: "Developer",
        screenshots: {
            desktop: ["images/simsync.svg"],
            mobile: ["images/mobile - sims.png"]
        },
        logo: "logos/sim-logo.png",
        demos: ["http://delane-studios.com/"],
        stack: [
            "React JS",
            "Electron",
            "Firebase",
            "Google API (Sheets)",
            "HTML",
            "JavaScript",
            "CSS",
            "SASS",
        ],
        description: ["Seeing this you may assume I'm a big Sims player but I actually don't play sims. When I was looking for some real world experience with React I was approached by a friend who is one of the lead developers on this project. I joined on and was tasked with working on an electron app that acts as the launcher for the mod and Sims.", "The launcher has multiple features including logging in using firebase auth, a friend system, personal profiles, and a host/connect system in order to link people together over LAN/UPnP/etc. The mod, SimSync, has a thriving online community following our day to day progress. Currently there are about 30,000 members in our mod's community Discord."]
    }
}
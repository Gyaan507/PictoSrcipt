import React from "react"

function About() {
  const teamMembers = [
    {
      name: "Gyaneshwar Kumar",
      role: "Team Leader",
      description:
        "Gyaneshwar is a proficient developer in web development, leading the charge in building interactive websites and integrating their backends with ML models to solve real-world problems.",
      image: "/gyaneshwar.jpg"
      ,
    },
    {
      name: "Md Aquib Ahmed",
      role: "ML Developer",
      description:
        "Aquib specializes in Machine Learning algorithms and data analysis, creating powerful models to extract captions from the imaage.",
      image: "/placeholder.svg",
    },
    {
      name: "Shivam Bhusan",
      role: "ML Developer",
      description:
        "Shivam specializes in Machine Learning and it's algorithms and data analysis, has a good knowledge of DBMS.",
      image: "/placeholder.svg",
    },
    {
      name: "Md Ashif Ansari",
      role: "Developer",
      description: "A skilled developer passionate about creating efficient and scalable solutions.",
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>We are dedicated to advancing image understanding through innovative multi-model AI approaches</p>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
        Our mission is to revolutionize image understanding by combining multiple AI vision models to provide
          comprehensive and accurate image descriptions. We aim to make visual content more accessible and
          understandable through advanced AI technology, helping businesses and individuals better interpret and utilize
          their visual data. Our multi-model approach ensures higher accuracy and more detailed analysis than
          traditional single-model systems.
        </p>
      </div>

      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card">
              <div className="team-member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <span className="role">{member.role}</span>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About


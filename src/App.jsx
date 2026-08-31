import './App.css'

function App() {
  const experiences = [
    {
      title: "QA Engineer",
      company: "PT Telekomunikasi Indonesia (Telkom)",
      period: "2022 — Sekarang",
      icon: "fa-briefcase",
      badge: "QA",
      tasks: [
        "Create test plan and test report for a invoicing process (purchase order, billing statement, payment, invoice, and tax invoice).",
        "Create test plan and test report for a Ekosistem process (Product, Variant).",
        "Collaborate with team members in testing manually and use Jira as managament and bug reporting system.",
        "Create test script and run automation testing with Katalon or Cypress.",
        "Create Load test script with Jmeter.",
        "Create documentation to comply with company's standard Requirement Specification, Bispro/BPMN diagram, Functional, Integration and User Acceptance Testing)."
      ]
    },
    {
      title: "QA Tester",
      company: "PT Visual Digital",
      period: "2021 — 2022",
      icon: "fa-briefcase",
      badge: "QT",
      tasks: [
        "Melakukan testing untuk aplikasi mobile dan web",
        "Membuat test case dan bug report",
        "Kolaborasi dengan tim development dalam memperbaiki bug",
        "Dokumentasi hasil testing"
      ]
    },
    {
      title: "QA Intern",
      company: "Startup Fintech",
      period: "2020 — 2021",
      icon: "fa-briefcase",
      badge: "IN",
      isHighlight: true,
      tasks: [
        "Mempelajari prinsip-prinsip quality assurance",
        "Melakukan manual testing pada fitur-fitur aplikasi",
        "Membuat test case sederhana",
        "Dukungan dalam automated testing"
      ]
    },
    {
      title: "Freelance QA",
      company: "Testing & Validation",
      period: "2019 — 2020",
      icon: "fa-briefcase",
      badge: "FL",
      tasks: [
        "Testing aplikasi sesuai requirement klien",
        "Membuat detailed bug report",
        "Quality assurance untuk berbagai project",
        "Validasi dan testing end-to-end"
      ]
    }
  ]

  return (
    <div className="container">
      <section className="experience-section">
        <div className="section-header">
          <i className="fas fa-briefcase"></i>
          <h2>Experience</h2>
        </div>
        <div className="experience-line"></div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className={`experience-item ${exp.isHighlight ? 'highlight' : ''}`}>
              <div className="experience-marker">
                <span>{exp.badge}</span>
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>

                <ul className="tasks-list">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App

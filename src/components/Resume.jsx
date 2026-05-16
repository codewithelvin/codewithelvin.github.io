import Header from './Header'
import Section from './Section'
import ExperienceItem from './ExperienceItem'
import EducationItem from './EducationItem'
import ProjectItem from './ProjectItem'
import SkillGroup from './SkillGroup'
import CertificateItem from './CertificateItem'
import Divider from './Divider'
import PrintButton from './PrintButton'
import { UserIcon, BriefcaseIcon, AcademicCapIcon, CertificateIcon, FolderIcon, SparklesIcon } from './Icons'
import resumeData from '../data/resume.json'

export default function Resume() {
  return (
    <main className="font-montserrat hyphens-manual">
      <PrintButton />
      <div className="px-6 py-6 mx-auto page max-w-2xl print:max-w-a4 md:max-w-a4 md:min-h-a4 print:min-h-0 xsm:px-8 xsm:py-8 sm:px-9 sm:py-9 md:px-16 md:py-16 print:py-0 print:mt-0 print:bg-white bg-gray-100">
        <Header
          name={resumeData.header.name}
          avatarUrl={resumeData.header.avatarUrl}
          positions={resumeData.header.positions}
          contacts={resumeData.header.contacts}
        />
        <hr className="w-50 mx-auto border-t-2 border-gray-300 mb-8 md:mb-11" />

        <Section title="ABOUT ME" icon={<UserIcon />}>
          <div className="break-inside-avoid">
            {resumeData.aboutMe.map((item, index) => (
              <div key={index} className={`mb-4.5 ${index > 0 ? 'break-inside-avoid' : ''}`}>
                {/* <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    {item.title}
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    <span className="italic font-medium text-gray-550">{item.period}</span>
                  </p>
                </header> */}
                {item.paragraphs.map((p, pIndex) => (
                  <p
                    key={pIndex}
                    className="mt-2.1 text-md text-gray-700 leading-normal"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        <Section title="EXPERIENCE" icon={<BriefcaseIcon />}>
          {resumeData.experience.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </Section>

        <Divider />

        <Section title="EDUCATION" icon={<AcademicCapIcon />}>
          {resumeData.education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </Section>

        {resumeData.certificates && resumeData.certificates.length > 0 && (
          <>
            <Divider />
            <Section title="CERTIFICATES" icon={<CertificateIcon />}>
              {resumeData.certificates.map((cert, index) => (
                <CertificateItem key={index} {...cert} />
              ))}
            </Section>
          </>
        )}

        <Divider />

        <div className="md:col-count-2 print:col-count-2 col-gap-md col-fill-auto">

          <Section title="PROJECTS" icon={<FolderIcon />}>
            {resumeData.projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </Section>

          <div className="break-before-col">
            <Section title="SKILLS" icon={<SparklesIcon />}>
              {resumeData.skills.map((skillGroup, index) => (
                <SkillGroup key={index} {...skillGroup} />
              ))}
            </Section>
          </div>

        </div>
      </div>
    </main>
  )
}

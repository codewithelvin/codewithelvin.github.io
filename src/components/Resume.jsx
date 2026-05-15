import Header from './Header'
import Section from './Section'
import ExperienceItem from './ExperienceItem'
import EducationItem from './EducationItem'
import ProjectItem from './ProjectItem'
import SkillGroup from './SkillGroup'
import Contact from './Contact'

export default function Resume() {
  return (
    <main className="font-montserrat hyphens-manual">
      {/* Page */}
      <div className="px-6 py-6 mx-auto page max-w-2xl print:max-w-a4 md:max-w-a4 md:min-h-a4 print:min-h-0 xsm:px-8 xsm:py-8 sm:px-9 sm:py-9 md:px-16 md:py-16 print:py-0 print:mt-0 print:bg-white bg-gray-100">

        {/* Name / Header */}
        <Header
          name="Marko Marković"
          avatarUrl="https://placehold.co/150x150/e2e8f0/64748b?text=Avatar"
          positions="User Interface Designer & Front-End Developer"
          contacts={[
            'hi@webpraktikos.com',
            '(+43) 0699 77 33 77 55'
          ]}
        />

        {/* Divider */}
        <hr className="w-50 mx-auto border-t-2 border-gray-300 mb-8 md:mb-11" />

        {/* Two-column layout */}
        <div className="md:col-count-2 print:col-count-2 col-gap-md col-fill-auto">

          {/* ── ABOUT ME ── */}
          <Section title="ABOUT ME">
            <div className="break-inside-avoid">
              <div className="mb-4.5">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    User Interface Designer
                  </h3>
                  <p className="leading-normal text-md text-gray-650">Since 2010</p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Minimal and formal résumé website template for print,
                  mo&shy;bile, and desktop. The proportions are the same on the
                  screen and paper. Built with amazing{' '}
                  <a
                    className="hover:bg-gray-150 rounded-lg transition ease-in duration-100"
                    href="https://tailwindcss.com/"
                  >
                    Tailwind CSS&nbsp;°
                  </a>
                  .
                </p>
              </div>

              <div className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Front-End Developer
                  </h3>
                  <p className="leading-normal text-md text-gray-650">Since 2013</p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  <code>src/components/Resume.jsx</code> is the main content file.
                  By editing JSX: add sections, subsections, and other parts.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  <span className="font-medium text-gray-600 print:text-black">Important: </span>
                  Too much content on one page will break the page in the form of
                  additional columns.
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Customize styles via <code>tailwind.config.js</code> or{' '}
                  <code>src/index.css</code>.
                </p>
              </div>
            </div>
          </Section>

          {/* ── EXPERIENCE ── */}
          <Section title="EXPERIENCE">
            <ExperienceItem
              company="WebPraktikos Inc."
              period="Jun 2018 – Present"
              role="Web Developer"
              description="Built doner pork chop • Served salmon, cream soft cheese, and brisket • Acted 55% pork chop • Filled burgdoggen &amp; frankfurter strip steak with 90% burger patties and broth"
            />
            <ExperienceItem
              company="Mammoth GmbH"
              period="Feb 2017 – Apr 2018"
              role="Android Developer"
              bullets={[
                'Cooked shrimps for 2 to 3 minutes per side, or until opaque; then, transferred to a serving dish with limon',
                'Roasted a pig, turning frequently, until meat reached 160°F in the thickest part of the shoulder or thigh',
              ]}
            />
            <ExperienceItem
              company="Exquisite Systems d.o.o."
              period="May 2015 – Dec 2016"
              role="Software QA Specialist"
              bullets={[
                'Made stockfish, which is unsalted fish, usually cod, dried by cold air and wind on wooden racks on the foreshore',
                'Preserved meat without salt by removing fat, cutting it into very thin strips and drying it in the sun or by a fire.',
                'Tested shrimp, crab, lobster, scallops, clams, crawfish',
              ]}
            />
          </Section>

          {/* ── EDUCATION ── */}
          <Section title="EDUCATION">
            <EducationItem
              school="Graz University of Technology"
              period="2014 – 2015"
              degree="Master's Degree in Chemistry"
              description="Barbecued shrimp, broiled shrimp, shrimp kabobs"
            />
            <EducationItem
              school="Vienna University of Technology"
              period="2010 – 2013"
              degree="Bachelor's Degree in Biology"
            />
            <EducationItem
              school="Vienna University of Technology"
              period="2010 – 2013"
              degree="Bachelor's Degree in Chemistry"
            />
          </Section>

          {/* ── PROJECTS ── */}
          <div className="break-before-col">
            <Section title="PROJECTS">
              <ProjectItem
                name="Universal Resume"
                href="https://github.com/WebPraktikos/universal-resume"
                period="Since 2019"
                tech="HTML CSS"
                description="Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects, and the pro&shy;ducts are not burdened with non-essentials."
              />
              <ProjectItem
                name="tailwindcss-rich-docs"
                href="https://github.com/WebPraktikos/tailwindcss-rich-docs"
                period="2017"
                tech="JavaScript"
                description="Good design is long-lasting. It avoids being fashionable and therefore never appears antiquated."
                extraDescription="Good design is honest. It does not make a product more innovative, powerful or valuable than it really is."
              />
              <ProjectItem
                name="Third One"
                period="2013 – 2014"
                tech="Vue"
                description="Good design is innovative. Technological development is always offering new opportunities for innovative design."
                extraDescription="Good design emphasizes the usefulness of a product whilst disregarding anything that could possibly detract from it."
              />
              <ProjectItem
                name="Fantastic Project"
                period="2012"
                tech="JavaScript"
                description="Products fulfilling a purpose are like tools. They are neither decorative objects nor works of art. Their design should therefore be both neutral and restrained, to leave room for the user's self-expression."
              />
            </Section>
          </div>

          {/* ── SKILLS ── */}
          <Section title="SKILLS">
            <SkillGroup
              skill="JavaScript"
              level="Middle Level"
              description="Good parts: pure function, higher-order functions, factory functions, composition. Bad parts: inheritance, this, new."
              tags={['ES6', 'Vue', 'Functional Programming', 'Node']}
            />
            <SkillGroup
              skill="Other"
              tags={['CSS', 'Rust', 'Git', 'Go', 'Linux Server', 'UI Design', 'Photoshop', 'Illustrator', 'Figma', 'Typography']}
            />
          </Section>

          {/* ── CONTACT ── */}
          <Section title="CONTACT">
            <Contact
              items={[
                { label: 'webpraktikos.com', href: '//webpraktikos.com' },
                { label: 'twitter.com/webpraktikos', href: '//twitter.com/webpraktikos' },
                { label: '1020 Wien, Austria' },
                { label: 'hi@webpraktikos.com' },
                { label: '(+43) 0699 77 33 77 55' },
              ]}
            />
          </Section>

        </div>
        {/* end two-column */}
      </div>
      {/* end Page */}
    </main>
  )
}

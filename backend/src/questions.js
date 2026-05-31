module.exports = [
  // ── Accessibility Foundations ──────────────────────────────────────────────
  {
    key: 'q001',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which principle from WCAG requires that content can be presented in different ways without losing meaning?',
    options: ['Operable', 'Perceivable', 'Understandable', 'Robust'],
    correctOption: 1,
    explanation: 'Perceivable requires that information and user interface components are presented in ways users can perceive, including adaptable presentation.',
    resource: 'WCAG 2.2 Guideline 1.3 (Adaptable)'
  },
  {
    key: 'q002',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the best definition of assistive technology (AT)?',
    options: [
      'A browser plugin for debugging web code',
      'Any hardware or software that increases, maintains, or improves functional capabilities of individuals with disabilities',
      'A usability testing framework used by QA teams',
      'An accessibility checker extension only used in development'
    ],
    correctOption: 1,
    explanation: 'AT includes screen readers, magnifiers, switch devices, speech input, and many other tools that support functional access.',
    resource: 'IAAP WAS Body of Knowledge - Disabilities and Assistive Technology'
  },
  {
    key: 'q003',
    domain: 'Identifying Accessibility Issues',
    stem: 'A user can only complete a form when color is used to indicate required fields. Which WCAG requirement is most directly violated?',
    options: ['Use of Color', 'Pointer Gestures', 'Focus Visible', 'Page Titled'],
    correctOption: 0,
    explanation: 'WCAG requires that color is not used as the sole visual means of conveying information.',
    resource: 'WCAG 2.2 Success Criterion 1.4.1 (Use of Color)'
  },
  {
    key: 'q004',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which statement best describes the POUR framework?',
    options: [
      'A testing sequence: Plan, Observe, Update, Report',
      'A legal framework for procurement compliance',
      'The four foundational accessibility principles: Perceivable, Operable, Understandable, Robust',
      'A method for conducting cognitive walkthroughs'
    ],
    correctOption: 2,
    explanation: 'POUR is the conceptual framework behind WCAG principles.',
    resource: 'WCAG 2.2 Principles'
  },
  {
    key: 'q005',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which disability category is most associated with the need for captions in prerecorded videos?',
    options: ['Auditory', 'Motor', 'Cognitive', 'Speech'],
    correctOption: 0,
    explanation: 'Captions are primarily essential for users who are deaf or hard of hearing.',
    resource: 'WCAG 2.2 Success Criterion 1.2.2 (Captions - Prerecorded)'
  },
  {
    key: 'q006',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which model of disability focuses on societal barriers rather than individual impairments?',
    options: ['Medical model', 'Charity model', 'Social model', 'Legal model'],
    correctOption: 2,
    explanation: 'The social model holds that disability arises from barriers created by society, not from the individual\'s impairment.',
    resource: 'IAAP WAS Body of Knowledge - Conceptual Frameworks of Disability'
  },
  {
    key: 'q007',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A screen reader user navigates a page using heading levels. What does this approach rely on?',
    options: ['ARIA live regions', 'Semantic heading structure', 'CSS z-index order', 'Tab index values'],
    correctOption: 1,
    explanation: 'Semantic heading structure (h1–h6) allows screen reader users to navigate content efficiently.',
    resource: 'WCAG 2.2 Success Criterion 2.4.6 (Headings and Labels)'
  },
  {
    key: 'q008',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which disability type primarily benefits from on-screen keyboard and switch access interfaces?',
    options: ['Auditory', 'Visual', 'Motor', 'Cognitive'],
    correctOption: 2,
    explanation: 'Users with motor disabilities may rely on switch access, eye gaze, sip-and-puff, or on-screen keyboards instead of standard mice and keyboards.',
    resource: 'IAAP WAS Body of Knowledge - Disabilities and Assistive Technology'
  },
  {
    key: 'q009',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which WCAG success criterion most directly addresses the need for audio description of video content?',
    options: [
      'SC 1.2.1 (Audio-only and Video-only)',
      'SC 1.2.3 (Audio Description or Media Alternative)',
      'SC 1.2.5 (Audio Description - Prerecorded)',
      'SC 1.4.2 (Audio Control)'
    ],
    correctOption: 2,
    explanation: 'SC 1.2.5 (Level AA) requires audio description for all prerecorded video content in synchronized media.',
    resource: 'WCAG 2.2 Success Criterion 1.2.5 (Audio Description - Prerecorded)'
  },
  {
    key: 'q010',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A person uses voice recognition software to interact with a web application. Which accessibility aspect is most critical for this user?',
    options: ['Text contrast ratio', 'Visible and correctly labeled interactive controls', 'Caption quality', 'Font size'],
    correctOption: 1,
    explanation: 'Voice recognition users speak control names or labels; controls must have accessible names that match their visible labels.',
    resource: 'WCAG 2.2 Success Criterion 2.5.3 (Label in Name)'
  },
  {
    key: 'q011',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Dyslexia is primarily a type of:',
    options: ['Visual disability', 'Motor disability', 'Cognitive/learning disability', 'Auditory disability'],
    correctOption: 2,
    explanation: 'Dyslexia is a specific learning disability affecting reading and language processing, categorized as a cognitive disability.',
    resource: 'IAAP WAS Body of Knowledge - Cognitive Disabilities'
  },
  {
    key: 'q012',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which term describes temporary impairments such as a broken arm or a noisy environment?',
    options: ['Permanent disability', 'Situational limitation', 'Transient disability', 'Episodic disability'],
    correctOption: 2,
    explanation: 'Transient (temporary) disabilities create accessibility barriers similar to permanent ones; designing for inclusion helps all users.',
    resource: 'Microsoft Inclusive Design - Persona Spectrum'
  },
  {
    key: 'q013',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which HTML attribute provides an accessible name for an image?',
    options: ['title', 'src', 'alt', 'longdesc'],
    correctOption: 2,
    explanation: 'The alt attribute supplies the text alternative for images, conveying meaning to non-visual users.',
    resource: 'WCAG 2.2 Success Criterion 1.1.1 (Non-text Content)'
  },
  {
    key: 'q014',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A WCAG conformance level of "AA" means:',
    options: [
      'Only the minimum baseline criteria are met',
      'All Level A and Level AA criteria are satisfied',
      'All Level A, AA, and AAA criteria are satisfied',
      'The product has been certified by IAAP'
    ],
    correctOption: 1,
    explanation: 'WCAG conformance levels are cumulative; AA requires meeting all A and AA success criteria.',
    resource: 'WCAG 2.2 Understanding Conformance'
  },
  {
    key: 'q015',
    domain: 'Creating Accessible Web Solutions',
    stem: 'For a complex data chart, what is the best accessible alternative?',
    options: [
      'Use a decorative image with empty alt text',
      'Provide a data table or detailed text summary conveying the same information',
      'Add a title attribute only',
      'Use a PDF attachment'
    ],
    correctOption: 1,
    explanation: 'Complex images require a long text description or equivalent alternative so non-visual users can access the data.',
    resource: 'WCAG 2.2 Success Criterion 1.1.1 (Non-text Content)'
  },
  {
    key: 'q016',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which assistive technology converts on-screen text to speech using a synthesizer?',
    options: ['Screen magnifier', 'Screen reader', 'Braille display', 'Switch access device'],
    correctOption: 1,
    explanation: 'Screen readers (e.g., NVDA, JAWS, VoiceOver) convert digital text and UI information to synthesized speech and/or Braille output.',
    resource: 'IAAP WAS Body of Knowledge - Assistive Technologies'
  },
  {
    key: 'q017',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What does "programmatic determination" mean in the context of WCAG?',
    options: [
      'A coding standard for JavaScript',
      'The ability for software (including AT) to extract and use information from content',
      'A manual audit protocol',
      'A legal term for accessibility lawsuits'
    ],
    correctOption: 1,
    explanation: 'Programmatic determination means the information is exposed in the code/DOM in a way that AT can read and convey to users.',
    resource: 'WCAG 2.2 Success Criterion 1.3.1 (Info and Relationships)'
  },
  {
    key: 'q018',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A user with low vision increases browser text size to 200%. The layout breaks and text overlaps. Which WCAG criterion is most relevant?',
    options: [
      'SC 1.4.4 (Resize Text)',
      'SC 1.4.1 (Use of Color)',
      'SC 2.4.4 (Link Purpose)',
      'SC 3.1.2 (Language of Parts)'
    ],
    correctOption: 0,
    explanation: 'SC 1.4.4 requires text to be resizable up to 200% without loss of content or functionality.',
    resource: 'WCAG 2.2 Success Criterion 1.4.4 (Resize Text)'
  },
  {
    key: 'q019',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which WCAG 2.2 success criterion is new (not present in WCAG 2.1) and addresses dragging movements?',
    options: [
      'SC 2.5.1 (Pointer Gestures)',
      'SC 2.5.7 (Dragging Movements)',
      'SC 2.5.3 (Label in Name)',
      'SC 2.4.11 (Focus Not Obscured - Minimum)'
    ],
    correctOption: 1,
    explanation: 'SC 2.5.7 is new in WCAG 2.2 and requires that dragging actions have a single-pointer alternative.',
    resource: 'WCAG 2.2 Success Criterion 2.5.7 (Dragging Movements)'
  },
  {
    key: 'q020',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which WCAG 2.2 success criterion requires that the target size for pointer inputs is at least 24×24 CSS pixels?',
    options: [
      'SC 2.5.5 (Target Size - Enhanced)',
      'SC 2.5.8 (Target Size - Minimum)',
      'SC 2.5.1 (Pointer Gestures)',
      'SC 1.4.10 (Reflow)'
    ],
    correctOption: 1,
    explanation: 'SC 2.5.8 (new in WCAG 2.2, Level AA) sets a minimum target size of 24×24 CSS pixels, with exceptions.',
    resource: 'WCAG 2.2 Success Criterion 2.5.8 (Target Size - Minimum)'
  },
  {
    key: 'q021',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What does "sufficient contrast" mean for non-text graphical elements under WCAG AA?',
    options: [
      'At least 4.5:1 against adjacent color(s)',
      'At least 3:1 against adjacent color(s)',
      'At least 7:1 against adjacent color(s)',
      'Any visible color is sufficient'
    ],
    correctOption: 1,
    explanation: 'SC 1.4.11 (Non-text Contrast) requires a 3:1 contrast ratio for UI components and graphical objects.',
    resource: 'WCAG 2.2 Success Criterion 1.4.11 (Non-text Contrast)'
  },
  {
    key: 'q022',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A decorative image should have its alt attribute set to:',
    options: ['"decorative"', 'The image filename', 'An empty string (alt="")', 'The surrounding text repeated'],
    correctOption: 2,
    explanation: 'Setting alt="" tells assistive technologies to skip the image, preventing meaningless announcements.',
    resource: 'WCAG 2.2 Success Criterion 1.1.1 (Non-text Content)'
  },
  {
    key: 'q023',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the purpose of WCAG conformance level AAA?',
    options: [
      'The minimum legal requirement in most jurisdictions',
      'The highest level of accessibility achievement, representing enhanced support',
      'The entry-level baseline for new websites',
      'A certification granted by the W3C'
    ],
    correctOption: 1,
    explanation: 'Level AAA represents the highest level of accessibility. It is not required by most regulations but reflects best-practice enhancement.',
    resource: 'WCAG 2.2 Understanding Conformance Levels'
  },
  {
    key: 'q024',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A user with photosensitive epilepsy is most at risk from content that:',
    options: [
      'Uses small font sizes',
      'Has low color contrast',
      'Flashes more than three times per second in a large area',
      'Lacks keyboard navigation'
    ],
    correctOption: 2,
    explanation: 'SC 2.3.1 (Three Flashes or Below Threshold) requires that content does not flash more than 3 times per second to prevent seizures.',
    resource: 'WCAG 2.2 Success Criterion 2.3.1 (Three Flashes or Below Threshold)'
  },
  {
    key: 'q025',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which of the following best describes "accessibility"?',
    options: [
      'Making websites load faster',
      'Ensuring content can be used by people with a wide range of disabilities and situations',
      'Supporting only screen reader users',
      'Providing text-only versions of websites'
    ],
    correctOption: 1,
    explanation: 'Accessibility means that products can be perceived, operated, and understood by people with diverse abilities, including those using AT.',
    resource: 'IAAP WAS Body of Knowledge - Introduction to Accessibility'
  },
  {
    key: 'q026',
    domain: 'Creating Accessible Web Solutions',
    stem: 'The "Robust" WCAG principle primarily ensures:',
    options: [
      'Content is visually appealing on all screens',
      'Content can be interpreted reliably by a wide variety of user agents, including AT',
      'Pages load quickly on mobile networks',
      'Forms validate without JavaScript'
    ],
    correctOption: 1,
    explanation: 'Robust content is compatible with current and future AT by using clean, standards-conformant markup.',
    resource: 'WCAG 2.2 Principle 4 (Robust)'
  },
  {
    key: 'q027',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which WCAG success criterion specifically requires that the purpose of any input field collecting personal information can be programmatically determined?',
    options: [
      'SC 1.3.4 (Orientation)',
      'SC 1.3.5 (Identify Input Purpose)',
      'SC 3.3.2 (Labels or Instructions)',
      'SC 2.4.6 (Headings and Labels)'
    ],
    correctOption: 1,
    explanation: 'SC 1.3.5 allows browsers and AT to auto-fill or present personalized icons for fields like name, email, and address.',
    resource: 'WCAG 2.2 Success Criterion 1.3.5 (Identify Input Purpose)'
  },
  {
    key: 'q028',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which type of hearing loss involves difficulty understanding speech even when sound is audible?',
    options: ['Conductive hearing loss', 'Sensorineural hearing loss', 'Mixed hearing loss', 'Central auditory processing disorder'],
    correctOption: 3,
    explanation: 'Central auditory processing disorder affects the brain\'s processing of sound, not the ear itself, making speech comprehension difficult even with adequate hearing acuity.',
    resource: 'IAAP WAS Body of Knowledge - Auditory Disabilities'
  },
  {
    key: 'q029',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What does WCAG SC 2.4.12 (Focus Not Obscured - Enhanced, Level AAA) require that is stronger than SC 2.4.11 (Level AA)?',
    options: [
      'The focused component must have a 3:1 contrast ratio',
      'No part of the focus indicator is hidden by author-created content',
      'Focus must cycle in alphabetical order',
      'Focus outlines must be at least 3px wide'
    ],
    correctOption: 1,
    explanation: 'SC 2.4.12 (AAA) requires that no part of the focused component is hidden; SC 2.4.11 (AA) only requires the component is not entirely hidden.',
    resource: 'WCAG 2.2 Success Criterion 2.4.12 (Focus Not Obscured - Enhanced)'
  },
  {
    key: 'q030',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the primary purpose of an accessibility conformance report (ACR)?',
    options: [
      'To certify that a product is 100% accessible',
      'To document how a product meets specified accessibility standards',
      'To replace user testing',
      'To provide marketing material for sales teams'
    ],
    correctOption: 1,
    explanation: 'An ACR (often using the VPAT format) documents the degree to which a product conforms to standards, helping procurement teams make informed decisions.',
    resource: 'ITI VPAT / ACR Guidance'
  },
  {
    key: 'q031',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which of the following best describes "situational disability"?',
    options: [
      'A disability caused by medication side effects',
      'Contextual conditions that limit a person\'s ability—e.g., bright sunlight on a screen',
      'A disability documented by a physician',
      'A disability affecting only one sense'
    ],
    correctOption: 1,
    explanation: 'Situational disabilities arise from environmental or contextual conditions (e.g., noisy room, sunlight, carrying a baby) and illustrate why inclusive design benefits everyone.',
    resource: 'Microsoft Inclusive Design - Persona Spectrum'
  },
  {
    key: 'q032',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which WCAG success criterion requires that content does not restrict its view or operation to a single orientation (portrait or landscape)?',
    options: [
      'SC 1.3.4 (Orientation)',
      'SC 1.4.10 (Reflow)',
      'SC 2.5.5 (Target Size - Enhanced)',
      'SC 1.3.3 (Sensory Characteristics)'
    ],
    correctOption: 0,
    explanation: 'SC 1.3.4 (WCAG 2.1) requires content to be usable in both orientations unless a specific orientation is essential.',
    resource: 'WCAG 2.2 Success Criterion 1.3.4 (Orientation)'
  },
  {
    key: 'q033',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A webpage has auto-playing background audio. Which WCAG criterion most directly addresses this?',
    options: [
      'SC 1.4.2 (Audio Control)',
      'SC 1.2.1 (Audio-only)',
      'SC 2.2.1 (Timing Adjustable)',
      'SC 1.4.7 (Low or No Background Audio)'
    ],
    correctOption: 0,
    explanation: 'SC 1.4.2 requires that auto-playing audio lasting more than 3 seconds can be paused, stopped, or its volume controlled.',
    resource: 'WCAG 2.2 Success Criterion 1.4.2 (Audio Control)'
  },

  // ── Standards and Laws ────────────────────────────────────────────────────
  {
    key: 'q034',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which standard is the primary global web accessibility standard referenced by many laws and policies?',
    options: ['ISO 9001', 'WCAG', 'PCI DSS', 'SOC 2'],
    correctOption: 1,
    explanation: 'WCAG is widely adopted and referenced by legal and policy frameworks worldwide.',
    resource: 'W3C Web Content Accessibility Guidelines'
  },
  {
    key: 'q035',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Section 508 in the United States primarily applies to:',
    options: [
      'Private blogs only',
      'Federal agencies and their ICT procurement/development',
      'Only educational institutions',
      'Only mobile applications'
    ],
    correctOption: 1,
    explanation: 'Section 508 requires federal agencies to make ICT accessible and references WCAG-based requirements.',
    resource: 'U.S. Section 508 Standards'
  },
  {
    key: 'q036',
    domain: 'Creating Accessible Web Solutions',
    stem: 'EN 301 549 is most relevant to accessibility requirements in which region?',
    options: ['European Union', 'Australia only', 'South America only', 'Global private equity firms'],
    correctOption: 0,
    explanation: 'EN 301 549 defines accessibility requirements for ICT procurement in Europe.',
    resource: 'EN 301 549 Accessibility Requirements'
  },
  {
    key: 'q037',
    domain: 'Remediating Issues',
    stem: 'What is the best reason to map product requirements to WCAG success criteria early?',
    options: [
      'It eliminates the need for usability testing',
      'It reduces remediation cost and prevents late rework',
      'It guarantees legal immunity',
      'It allows skipping keyboard support if visual design is strong'
    ],
    correctOption: 1,
    explanation: 'Addressing accessibility at requirements/design stages is significantly less expensive than retrofitting.',
    resource: 'IAAP WAS Body of Knowledge - Accessibility Program and Process Integration'
  },
  {
    key: 'q038',
    domain: 'Remediating Issues',
    stem: 'Which statement about VPAT/ACR documentation is most accurate?',
    options: [
      'It replaces all technical testing',
      'It communicates conformance status against accessibility standards such as WCAG',
      'It is required only for native mobile apps',
      'It certifies that no defects exist'
    ],
    correctOption: 1,
    explanation: 'VPAT/ACR artifacts report conformance details; they do not replace testing and are not a guarantee of defect-free products.',
    resource: 'ITI VPAT Guidance'
  },
  {
    key: 'q039',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which U.S. law prohibits discrimination against people with disabilities in places of public accommodation and has been applied to websites by courts?',
    options: ['Section 508', 'Americans with Disabilities Act (ADA) Title III', 'CVAA', 'FISMA'],
    correctOption: 1,
    explanation: 'ADA Title III covers public accommodations, and many courts have found that websites of businesses are covered.',
    resource: 'Americans with Disabilities Act (ADA) Title III'
  },
  {
    key: 'q040',
    domain: 'Creating Accessible Web Solutions',
    stem: 'The 21st Century Communications and Video Accessibility Act (CVAA) applies to:',
    options: [
      'All government websites',
      'Advanced communications services and video programming distributed online',
      'Print media and newspapers',
      'Healthcare portals only'
    ],
    correctOption: 1,
    explanation: 'CVAA requires accessibility of advanced communications services (e.g., video calling, closed captioning on online video).',
    resource: 'FCC CVAA Guidance'
  },
  {
    key: 'q041',
    domain: 'Creating Accessible Web Solutions',
    stem: 'WCAG 2.1 added success criteria to address which populations not fully addressed in WCAG 2.0?',
    options: [
      'Desktop-only users',
      'Mobile users, users with low vision, and users with cognitive/learning disabilities',
      'Screen reader users exclusively',
      'Users with auditory disabilities exclusively'
    ],
    correctOption: 1,
    explanation: 'WCAG 2.1 added 17 new success criteria focused on mobile accessibility, low vision, and cognitive/learning disabilities.',
    resource: 'WCAG 2.1 What\'s New'
  },
  {
    key: 'q042',
    domain: 'Creating Accessible Web Solutions',
    stem: 'How many new success criteria did WCAG 2.2 add compared to WCAG 2.1?',
    options: ['3', '9', '17', '22'],
    correctOption: 1,
    explanation: 'WCAG 2.2 added 9 new success criteria and removed SC 4.1.1 (Parsing).',
    resource: 'WCAG 2.2 What\'s New'
  },
  {
    key: 'q043',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which WCAG success criterion was removed in WCAG 2.2?',
    options: [
      'SC 1.4.3 (Contrast - Minimum)',
      'SC 4.1.1 (Parsing)',
      'SC 2.4.1 (Bypass Blocks)',
      'SC 1.1.1 (Non-text Content)'
    ],
    correctOption: 1,
    explanation: 'SC 4.1.1 (Parsing) was removed from WCAG 2.2 because modern browsers handle parsing issues, making it obsolete.',
    resource: 'WCAG 2.2 What\'s New'
  },
  {
    key: 'q044',
    domain: 'Creating Accessible Web Solutions',
    stem: 'The Accessibility for Ontarians with Disabilities Act (AODA) applies to:',
    options: ['All websites globally', 'Organizations in Ontario, Canada', 'Federal agencies in Canada only', 'EU member states'],
    correctOption: 1,
    explanation: 'AODA applies to public and private organizations in Ontario, Canada, requiring WCAG 2.0 Level AA compliance.',
    resource: 'AODA Web Accessibility Standards'
  },
  {
    key: 'q045',
    domain: 'Creating Accessible Web Solutions',
    stem: 'WAI-ARIA is maintained by which organization?',
    options: ['IAAP', 'W3C Web Accessibility Initiative (WAI)', 'ISO', 'NIST'],
    correctOption: 1,
    explanation: 'WAI-ARIA (Accessible Rich Internet Applications) is a W3C specification developed by the WAI.',
    resource: 'W3C WAI-ARIA Specification'
  },
  {
    key: 'q046',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which document provides guidance on applying WCAG to non-web ICT like software and documents?',
    options: ['WAI-ARIA', 'ATAG', 'WCAG2ICT', 'UAAG'],
    correctOption: 2,
    explanation: 'WCAG2ICT is W3C guidance that explains how to apply WCAG 2.x success criteria to non-web ICT products.',
    resource: 'W3C WCAG2ICT Guidance'
  },
  {
    key: 'q047',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What does ATAG stand for and what does it address?',
    options: [
      'Accessible Technology Assessment Guide — evaluates AT devices',
      'Authoring Tool Accessibility Guidelines — ensures tools produce accessible content and are accessible to authors with disabilities',
      'Automated Testing and Audit Guide — frameworks for automated checks',
      'Application Technology Accessibility Guide — web app standards'
    ],
    correctOption: 1,
    explanation: 'ATAG addresses both the accessibility of authoring interfaces and the ability of tools to produce accessible output.',
    resource: 'W3C ATAG 2.0'
  },
  {
    key: 'q048',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which Australian standard for web accessibility references WCAG?',
    options: ['AS ISO 9241', 'AS EN 301 549', 'APS Web Accessibility National Transition Strategy', 'Digital Service Standard'],
    correctOption: 3,
    explanation: 'The Australian Government\'s Digital Service Standard requires government services to meet WCAG 2.1 AA.',
    resource: 'Australian Government Digital Service Standard'
  },
  {
    key: 'q049',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Section 504 of the Rehabilitation Act requires that:',
    options: [
      'All private businesses provide accessible websites',
      'Programs receiving federal financial assistance are accessible to people with disabilities',
      'Only federal IT systems comply with WCAG',
      'Universities must offer only audio formats'
    ],
    correctOption: 1,
    explanation: 'Section 504 prohibits discrimination on the basis of disability in programs receiving federal funds, including educational institutions.',
    resource: 'Section 504, Rehabilitation Act of 1973'
  },
  {
    key: 'q050',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which standard specifically addresses the accessibility of user agents (browsers and media players)?',
    options: ['WCAG', 'ATAG', 'UAAG', 'WAI-ARIA'],
    correctOption: 2,
    explanation: 'UAAG (User Agent Accessibility Guidelines) provides guidance for browsers and media players to be accessible to all users.',
    resource: 'W3C UAAG 2.0'
  },
  {
    key: 'q051',
    domain: 'Creating Accessible Web Solutions',
    stem: 'The European Accessibility Act (EAA) most broadly requires that:',
    options: [
      'Only public sector bodies meet WCAG',
      'Certain private-sector products and services in the EU meet accessibility requirements',
      'Companies outside Europe are exempt',
      'Only government procurement follows EN 301 549'
    ],
    correctOption: 1,
    explanation: 'The EAA (Directive 2019/882) extends accessibility requirements to private-sector products and services like banking, e-commerce, and transport in the EU.',
    resource: 'European Accessibility Act (EAA) Directive 2019/882'
  },
  {
    key: 'q052',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What level of WCAG conformance is most commonly required by laws and regulations worldwide?',
    options: ['Level A', 'Level AA', 'Level AAA', 'No specific level'],
    correctOption: 1,
    explanation: 'Most laws and regulations, including Section 508 (US), EN 301 549 (EU), and AODA (Canada), require WCAG Level AA conformance.',
    resource: 'W3C Policies Relating to Web Accessibility'
  },
  {
    key: 'q053',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A conformance claim for a webpage must identify which of the following?',
    options: [
      'The date the webpage was designed',
      'The date, URL, level claimed, and any relied-upon technologies',
      'The browser used during testing',
      'The designer\'s name'
    ],
    correctOption: 1,
    explanation: 'WCAG conformance claims require: date, URLs, level, complete list of relied-upon technologies, and any exceptions/limitations.',
    resource: 'WCAG 2.2 Understanding Conformance - Conformance Claims'
  },
  {
    key: 'q054',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What does "full-page conformance" mean in WCAG?',
    options: [
      'Only the header and footer must conform',
      'The entire page must satisfy all applicable success criteria with no non-conforming parts',
      'Only customer-facing pages must conform',
      'Conformance is measured at the paragraph level'
    ],
    correctOption: 1,
    explanation: 'WCAG conformance is measured at the full page level; partial conformance claims are possible but must be explicitly documented.',
    resource: 'WCAG 2.2 Understanding Conformance'
  },
  {
    key: 'q055',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which WCAG conformance requirement states that technologies relied upon for conformance must have accessibility support?',
    options: [
      'Requirement 1: Conformance Level',
      'Requirement 4: Only Accessibility-Supported Ways of Using Technologies',
      'Requirement 2: Full Pages',
      'Requirement 3: Complete Processes'
    ],
    correctOption: 1,
    explanation: 'Technologies must be "accessibility supported" — meaning AT and browsers must actually support the technology for it to count toward conformance.',
    resource: 'WCAG 2.2 Understanding Conformance Requirement 4'
  },
  {
    key: 'q056',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the primary purpose of the IAAP WAS certification?',
    options: [
      'To certify websites as fully accessible',
      'To validate an individual\'s knowledge and skills in web accessibility',
      'To provide legal protection against ADA claims',
      'To audit software products for standards compliance'
    ],
    correctOption: 1,
    explanation: 'The WAS (Web Accessibility Specialist) certification validates professional competence in web accessibility knowledge and practice.',
    resource: 'IAAP WAS Credential Overview'
  },
  {
    key: 'q057',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A "partial conformance" claim is used when:',
    options: [
      'A website uses only HTML without CSS',
      'Third-party content on a page cannot be controlled by the author',
      'Only Level A is achieved instead of AA',
      'A page uses fewer than 10 WCAG techniques'
    ],
    correctOption: 1,
    explanation: 'Partial conformance claims cover pages where third-party content (e.g., injected ads) is not under the author\'s control and may not conform.',
    resource: 'WCAG 2.2 Understanding Conformance - Partial Conformance'
  },
  {
    key: 'q058',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the significance of the "Reasonable Accommodation" concept under the ADA in the context of digital accessibility?',
    options: [
      'It replaces the need for accessible design entirely',
      'Employers may need to provide accessible technology or alternative formats to employees with disabilities',
      'It applies only to physical building modifications',
      'It exempts small businesses from accessibility requirements'
    ],
    correctOption: 1,
    explanation: 'Reasonable accommodation under ADA Title I may require employers to provide accessible software or alternate formats for employees with disabilities.',
    resource: 'ADA Title I - Employment'
  },
  {
    key: 'q059',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which WCAG guideline addresses the need to provide users enough time to read and use content?',
    options: ['Guideline 2.1 (Keyboard Accessible)', 'Guideline 2.2 (Enough Time)', 'Guideline 2.3 (Seizures)', 'Guideline 1.4 (Distinguishable)'],
    correctOption: 1,
    explanation: 'Guideline 2.2 requires time limits to be adjustable, pausable, or removable to ensure users have sufficient time to interact.',
    resource: 'WCAG 2.2 Guideline 2.2 (Enough Time)'
  },
  {
    key: 'q060',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which WCAG success criterion specifically requires that a mechanism is available to bypass blocks of content that are repeated on multiple pages?',
    options: [
      'SC 2.4.2 (Page Titled)',
      'SC 2.4.1 (Bypass Blocks)',
      'SC 2.4.5 (Multiple Ways)',
      'SC 3.2.3 (Consistent Navigation)'
    ],
    correctOption: 1,
    explanation: 'SC 2.4.1 requires a skip-navigation link or equivalent mechanism so keyboard users can bypass repetitive content.',
    resource: 'WCAG 2.2 Success Criterion 2.4.1 (Bypass Blocks)'
  },
  {
    key: 'q061',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which international standard defines a conformance model for ICT products and services used across global procurement?',
    options: ['ISO 9001', 'EN 301 549', 'NIST SP 800-53', 'ISO/IEC 40500'],
    correctOption: 3,
    explanation: 'ISO/IEC 40500 is the ISO standard that adopts WCAG 2.0 verbatim, providing it as an international standard for global procurement.',
    resource: 'ISO/IEC 40500:2012 (WCAG 2.0)'
  },
  {
    key: 'q062',
    domain: 'Creating Accessible Web Solutions',
    stem: 'The Air Carrier Access Act (ACAA) requires airlines to make accessible:',
    options: [
      'Only their in-flight entertainment',
      'Kiosks and automated airport systems used for boarding',
      'Core travel information and services on their websites and apps',
      'Only airport signage'
    ],
    correctOption: 2,
    explanation: 'DOT rules under ACAA require airline websites and mobile apps to make core travel services accessible.',
    resource: 'U.S. DOT Air Carrier Access Act Digital Accessibility Rules'
  },

  // ── Design and UX ─────────────────────────────────────────────────────────
  {
    key: 'q063',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which design choice most improves cognitive accessibility for complex workflows?',
    options: [
      'Use dense paragraphs and minimal headings',
      'Break tasks into clear, sequential steps with consistent navigation',
      'Hide instructions behind hover-only tooltips',
      'Require memorization of control locations'
    ],
    correctOption: 1,
    explanation: 'Chunking, clear structure, and consistency reduce cognitive load.',
    resource: 'W3C Cognitive Accessibility Guidance'
  },
  {
    key: 'q064',
    domain: 'Identifying Accessibility Issues',
    stem: 'A modal opens and keyboard focus remains behind it on the page. What is the primary issue?',
    options: ['Color contrast failure', 'Focus management failure', 'Language of page missing', 'No transcript available'],
    correctOption: 1,
    explanation: 'Dialogs should move focus into the modal and trap focus until closed.',
    resource: 'WAI-ARIA Authoring Practices - Dialog Pattern'
  },
  {
    key: 'q065',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the minimum purpose of alternative text for informative images?',
    options: [
      'Describe every visual detail exactly',
      'Communicate the image meaning/function in context',
      'Repeat nearby captions verbatim',
      'Include file name for traceability'
    ],
    correctOption: 1,
    explanation: 'Alt text should convey equivalent meaning, not necessarily literal visual detail.',
    resource: 'WCAG 2.2 Success Criterion 1.1.1 (Non-text Content)'
  },
  {
    key: 'q066',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which color contrast ratio is required for normal body text under WCAG AA?',
    options: ['3:1', '4.5:1', '7:1', '2:1'],
    correctOption: 1,
    explanation: 'WCAG AA requires at least 4.5:1 for normal text, with exceptions.',
    resource: 'WCAG 2.2 Success Criterion 1.4.3 (Contrast Minimum)'
  },
  {
    key: 'q067',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which practice best supports users who rely on keyboard-only navigation?',
    options: [
      'Disable focus outlines for cleaner visuals',
      'Ensure all interactive elements are reachable and visible via keyboard focus',
      'Provide mouse instructions only',
      'Require drag-and-drop for all tasks'
    ],
    correctOption: 1,
    explanation: 'Keyboard accessibility requires reachability, logical order, and visible focus indicators.',
    resource: 'WCAG 2.2 Success Criteria 2.1.x and 2.4.7'
  },
  {
    key: 'q068',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What minimum contrast ratio is required for large text (18pt or 14pt bold) under WCAG AA?',
    options: ['2:1', '3:1', '4.5:1', '7:1'],
    correctOption: 1,
    explanation: 'Large text (18pt+ or 14pt+ bold) requires a minimum 3:1 contrast ratio at WCAG AA.',
    resource: 'WCAG 2.2 Success Criterion 1.4.3 (Contrast Minimum)'
  },
  {
    key: 'q069',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which design pattern best communicates that a form field is required without relying solely on an asterisk?',
    options: [
      'Display an asterisk in red only',
      'Provide a text label such as "required" and explain legend text near the form',
      'Add a red border on empty submission',
      'Show a tooltip on hover only'
    ],
    correctOption: 1,
    explanation: 'Relying solely on visual symbols like asterisks can fail SC 1.3.3 (Sensory Characteristics) and SC 1.4.1 (Use of Color). Explicit text labels are more robust.',
    resource: 'WCAG 2.2 Success Criterion 3.3.2 (Labels or Instructions)'
  },
  {
    key: 'q070',
    domain: 'Creating Accessible Web Solutions',
    stem: 'WCAG SC 1.4.10 (Reflow) requires that content can be presented without horizontal scrolling at a width equivalent to:',
    options: ['400 CSS pixels', '320 CSS pixels', '768 CSS pixels', '1024 CSS pixels'],
    correctOption: 1,
    explanation: 'SC 1.4.10 requires no horizontal scrolling for vertical-scrolling content at 320 CSS pixels wide (equivalent to 400% zoom on a 1280px display).',
    resource: 'WCAG 2.2 Success Criterion 1.4.10 (Reflow)'
  },
  {
    key: 'q071',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A tooltip only appears on mouse hover. A keyboard user cannot access it. Which WCAG criterion is violated?',
    options: [
      'SC 1.4.1 (Use of Color)',
      'SC 1.3.3 (Sensory Characteristics)',
      'SC 1.4.13 (Content on Hover or Focus)',
      'SC 2.5.1 (Pointer Gestures)'
    ],
    correctOption: 2,
    explanation: 'SC 1.4.13 requires that content appearing on hover or focus is dismissible, hoverable, and persistent.',
    resource: 'WCAG 2.2 Success Criterion 1.4.13 (Content on Hover or Focus)'
  },
  {
    key: 'q072',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A link that reads "Click here" is problematic because:',
    options: [
      'It uses too few characters',
      'Its purpose cannot be determined from the link text alone',
      'It is not underlined',
      'It lacks a title attribute'
    ],
    correctOption: 1,
    explanation: 'SC 2.4.4 requires link purpose to be determinable from link text or its programmatic context.',
    resource: 'WCAG 2.2 Success Criterion 2.4.4 (Link Purpose - In Context)'
  },
  {
    key: 'q073',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the recommended minimum touch target size for mobile interactive elements per WCAG 2.5.5 (Level AAA)?',
    options: ['24×24 CSS pixels', '44×44 CSS pixels', '16×16 CSS pixels', '32×32 CSS pixels'],
    correctOption: 1,
    explanation: 'SC 2.5.5 (AAA) recommends at least 44×44 CSS pixels to accommodate users with motor difficulties on touch devices.',
    resource: 'WCAG 2.2 Success Criterion 2.5.5 (Target Size - Enhanced)'
  },
  {
    key: 'q074',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which of the following best prevents layout breakage when a user adjusts text spacing?',
    options: [
      'Using fixed-height containers with overflow: hidden',
      'Using flexible/auto-height containers and relative units',
      'Setting all font sizes in points',
      'Disabling user stylesheets'
    ],
    correctOption: 1,
    explanation: 'SC 1.4.12 (Text Spacing) requires no loss of content when line height, letter spacing, word spacing, and paragraph spacing are changed.',
    resource: 'WCAG 2.2 Success Criterion 1.4.12 (Text Spacing)'
  },
  {
    key: 'q075',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What should happen when a user\'s session times out while filling a long form?',
    options: [
      'All data is lost without warning',
      'The user is warned before expiry and given the option to extend or save',
      'The form auto-submits partially',
      'The user must restart from the beginning silently'
    ],
    correctOption: 1,
    explanation: 'SC 2.2.1 (Timing Adjustable) requires users to be warned and able to adjust or extend time limits.',
    resource: 'WCAG 2.2 Success Criterion 2.2.1 (Timing Adjustable)'
  },
  {
    key: 'q076',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Parallax scrolling effects with rapid motion may affect users with vestibular disorders. Which WCAG criterion applies?',
    options: [
      'SC 2.3.1 (Three Flashes)',
      'SC 2.3.3 (Animation from Interactions)',
      'SC 1.4.2 (Audio Control)',
      'SC 2.5.4 (Motion Actuation)'
    ],
    correctOption: 1,
    explanation: 'SC 2.3.3 (AAA) requires a mechanism to disable non-essential animation triggered by interaction for users with vestibular disorders.',
    resource: 'WCAG 2.2 Success Criterion 2.3.3 (Animation from Interactions)'
  },
  {
    key: 'q077',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which WCAG success criterion addresses users who may accidentally activate controls via motion (e.g., shaking a device)?',
    options: [
      'SC 2.5.1 (Pointer Gestures)',
      'SC 2.5.4 (Motion Actuation)',
      'SC 2.5.6 (Concurrent Input Mechanisms)',
      'SC 2.5.3 (Label in Name)'
    ],
    correctOption: 1,
    explanation: 'SC 2.5.4 requires that functions triggered by device or user motion can also be operated via standard components and can be disabled.',
    resource: 'WCAG 2.2 Success Criterion 2.5.4 (Motion Actuation)'
  },
  {
    key: 'q078',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A carousel auto-advances every 3 seconds. What must be provided to meet WCAG?',
    options: [
      'Nothing extra is required',
      'Controls to pause, stop, or hide the movement',
      'A text transcript of each slide',
      'A high-contrast theme button'
    ],
    correctOption: 1,
    explanation: 'SC 2.2.2 (Pause, Stop, Hide) requires mechanisms to pause, stop, or hide moving/auto-updating content.',
    resource: 'WCAG 2.2 Success Criterion 2.2.2 (Pause, Stop, Hide)'
  },
  {
    key: 'q079',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which design approach ensures that instructions do not solely rely on shape, size, or location?',
    options: [
      'Using only icons without labels',
      'Providing instructions using multiple sensory characteristics (e.g., "press the green Save button")',
      'Using spatial references like "the panel on the right"',
      'Describing shape only (e.g., "click the round button")'
    ],
    correctOption: 1,
    explanation: 'SC 1.3.3 (Sensory Characteristics) requires that instructions not rely solely on shape, color, size, visual location, or sound.',
    resource: 'WCAG 2.2 Success Criterion 1.3.3 (Sensory Characteristics)'
  },
  {
    key: 'q080',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the best practice for error identification in forms?',
    options: [
      'Highlight the field in red only',
      'Identify the error in text and describe the issue clearly near the problematic field',
      'Use an alert sound only',
      'Disable the submit button without explanation'
    ],
    correctOption: 1,
    explanation: 'SC 3.3.1 (Error Identification) requires errors to be identified in text and described to the user.',
    resource: 'WCAG 2.2 Success Criterion 3.3.1 (Error Identification)'
  },
  {
    key: 'q081',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What should happen when a user changes a setting in a UI component without explicit form submission?',
    options: [
      'An automatic page reload is preferred',
      'Context changes should not occur without user initiation',
      'Navigation should always redirect to a confirmation page',
      'All other fields should reset'
    ],
    correctOption: 1,
    explanation: 'SC 3.2.2 (On Input) requires that changing a setting does not automatically cause a context change unless the user has been advised beforehand.',
    resource: 'WCAG 2.2 Success Criterion 3.2.2 (On Input)'
  },
  {
    key: 'q082',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Inclusive design differs from accessibility compliance in that it:',
    options: [
      'Focuses exclusively on meeting legal requirements',
      'Proactively designs for a wide range of users from the beginning rather than retrofitting for disability',
      'Only applies to physical product design',
      'Replaces user research with automated testing'
    ],
    correctOption: 1,
    explanation: 'Inclusive design aims to create products that work for the widest possible range of people by default, not as an afterthought.',
    resource: 'IAAP WAS Body of Knowledge - Inclusive Design'
  },
  {
    key: 'q083',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A navigation menu appears at the top of every page. Which WCAG criterion requires it to appear in the same relative order each time?',
    options: [
      'SC 3.2.1 (On Focus)',
      'SC 3.2.3 (Consistent Navigation)',
      'SC 2.4.1 (Bypass Blocks)',
      'SC 3.1.2 (Language of Parts)'
    ],
    correctOption: 1,
    explanation: 'SC 3.2.3 (Consistent Navigation) requires repeated navigation components to appear in the same relative order on each page.',
    resource: 'WCAG 2.2 Success Criterion 3.2.3 (Consistent Navigation)'
  },
  {
    key: 'q084',
    domain: 'Creating Accessible Web Solutions',
    stem: 'When designing for users with cognitive disabilities, which strategy is most beneficial?',
    options: [
      'Maximize information density to reduce page count',
      'Use plain language, familiar icons, consistent layouts, and progressive disclosure',
      'Avoid any use of images or multimedia',
      'Require users to create accounts before accessing any content'
    ],
    correctOption: 1,
    explanation: 'Plain language, consistent patterns, and progressive disclosure reduce cognitive load and support users with cognitive disabilities.',
    resource: 'W3C Cognitive Accessibility Task Force Guidance'
  },
  {
    key: 'q085',
    domain: 'Creating Accessible Web Solutions',
    stem: 'An icon-only button has no visible text label. How should the accessible name be provided?',
    options: [
      'Leave aria-label empty',
      'Use aria-label or a visually hidden text element to supply the accessible name',
      'Use the title attribute exclusively',
      'Use role="presentation" on the button'
    ],
    correctOption: 1,
    explanation: 'Icon-only buttons need accessible names via aria-label, aria-labelledby, or visually hidden text so AT can identify their purpose.',
    resource: 'WCAG 2.2 Success Criterion 4.1.2 (Name, Role, Value)'
  },
  {
    key: 'q086',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What does the "F" in the Flesch-Kincaid readability test measure?',
    options: [
      'The frequency of technical terms',
      'The grade level required to understand text',
      'The font size needed for legibility',
      'The number of focus indicators on a page'
    ],
    correctOption: 1,
    explanation: 'The Flesch-Kincaid grade level formula estimates the U.S. school grade level needed to understand a passage, helping design for cognitive accessibility.',
    resource: 'WCAG 2.2 Success Criterion 3.1.5 (Reading Level)'
  },
  {
    key: 'q087',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What color contrast ratio is needed for WCAG AA enhanced (Level AAA) for normal text?',
    options: ['4.5:1', '7:1', '3:1', '5:1'],
    correctOption: 1,
    explanation: 'SC 1.4.6 (Contrast Enhanced, AAA) requires at least 7:1 for normal text and 4.5:1 for large text.',
    resource: 'WCAG 2.2 Success Criterion 1.4.6 (Contrast Enhanced)'
  },
  {
    key: 'q088',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which of the following is an example of providing "multiple ways" to locate a page (SC 2.4.5)?',
    options: [
      'Providing only a search bar',
      'Providing both a site map and a search function',
      'Providing a single navigation menu',
      'Linking only from the homepage'
    ],
    correctOption: 1,
    explanation: 'SC 2.4.5 requires more than one way to locate a web page (e.g., search, site map, navigation, related links).',
    resource: 'WCAG 2.2 Success Criterion 2.4.5 (Multiple Ways)'
  },

  // ── Development Techniques ────────────────────────────────────────────────
  {
    key: 'q089',
    domain: 'Creating Accessible Web Solutions',
    stem: 'For a custom button component, which implementation is most accessible?',
    options: [
      '<div onclick="...">Submit</div>',
      '<span role="button">Submit</span> without keyboard handlers',
      '<button type="button">Submit</button>',
      '<a href="#">Submit</a> with CSS'
    ],
    correctOption: 2,
    explanation: 'Native semantic elements provide built-in keyboard interaction and accessibility APIs.',
    resource: 'HTML Accessibility Best Practices'
  },
  {
    key: 'q090',
    domain: 'Creating Accessible Web Solutions',
    stem: 'When should ARIA be used in web applications?',
    options: [
      'Always, instead of native HTML semantics',
      'Only when native HTML cannot provide required semantics/behavior',
      'Only for color styling',
      'Only for SEO optimization'
    ],
    correctOption: 1,
    explanation: 'Rule of ARIA: use native semantics first; ARIA supplements when necessary.',
    resource: 'WAI-ARIA Specification and Authoring Practices'
  },
  {
    key: 'q091',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A field error appears visually but is not announced by screen readers. Which change is most appropriate?',
    options: [
      'Increase font size of the error message',
      'Use programmatic association and/or live region patterns so the error is announced',
      'Move error text to footer only',
      'Require user refresh to discover errors'
    ],
    correctOption: 1,
    explanation: 'Errors need programmatic exposure and clear relationships to fields.',
    resource: 'WCAG 2.2 Success Criteria 3.3.x and ARIA live regions guidance'
  },
  {
    key: 'q092',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the most robust way to ensure table headers are conveyed to assistive technologies?',
    options: [
      'Use visual bold text only',
      'Use proper <th> elements and associations where needed',
      'Render table as image for layout control',
      'Avoid all tabular markup'
    ],
    correctOption: 1,
    explanation: 'Proper semantic table markup enables header-cell relationships for screen readers.',
    resource: 'WCAG Techniques for Data Tables'
  },
  {
    key: 'q093',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the best way to handle skip navigation in long pages?',
    options: [
      'Use a keyboard-accessible "Skip to main content" link that becomes visible on focus',
      'Use only visual section breaks',
      'Rely on browser back button',
      'Disable tabbing to reduce key presses'
    ],
    correctOption: 0,
    explanation: 'Skip links improve keyboard efficiency by bypassing repeated blocks.',
    resource: 'WCAG 2.2 Success Criterion 2.4.1 (Bypass Blocks)'
  },
  {
    key: 'q094',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which ARIA property is used to associate a visible label element with an input that is not a sibling?',
    options: ['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-owns'],
    correctOption: 1,
    explanation: 'aria-labelledby references the ID of any visible element as the accessible name, regardless of DOM position.',
    resource: 'WAI-ARIA 1.2 - aria-labelledby'
  },
  {
    key: 'q095',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the correct use of aria-live="assertive"?',
    options: [
      'For all dynamic content updates',
      'For critical, time-sensitive alerts that must interrupt the user',
      'For decorative animations',
      'For log messages that accumulate in the background'
    ],
    correctOption: 1,
    explanation: 'aria-live="assertive" interrupts AT immediately; it should be reserved for urgent alerts. Polite is preferred for most updates.',
    resource: 'WAI-ARIA 1.2 - aria-live'
  },
  {
    key: 'q096',
    domain: 'Creating Accessible Web Solutions',
    stem: 'How should an image used as a link be marked up accessibly?',
    options: [
      '<a href="..."><img src="..." /></a> with no alt text',
      '<a href="..."><img src="..." alt="Description of link destination" /></a>',
      '<a href="..." title="link"><img src="..." /></a>',
      '<img src="..." role="link" />'
    ],
    correctOption: 1,
    explanation: 'When an image is the only content of a link, the alt attribute provides the accessible name describing the link\'s destination.',
    resource: 'WCAG Technique H30 - Providing link text for image links'
  },
  {
    key: 'q097',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What does the HTML lang attribute on the <html> element provide?',
    options: [
      'A translation of the page',
      'The primary language of the page for AT to use the correct pronunciation and rules',
      'A reference to the country of the server',
      'An SEO keyword list'
    ],
    correctOption: 1,
    explanation: 'SC 3.1.1 (Language of Page) requires the lang attribute so screen readers use correct language synthesis.',
    resource: 'WCAG 2.2 Success Criterion 3.1.1 (Language of Page)'
  },
  {
    key: 'q098',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A single-page app changes content dynamically. What technique helps screen reader users discover the new content?',
    options: [
      'Reload the entire page',
      'Move focus to the new content or use an ARIA live region to announce the update',
      'Use setTimeout to delay all transitions',
      'Append content in hidden divs only'
    ],
    correctOption: 1,
    explanation: 'In SPAs, focus management and live regions are critical to inform AT users of view changes without full page loads.',
    resource: 'WAI-ARIA Authoring Practices - Single Page Application Guidance'
  },
  {
    key: 'q099',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which value of the aria-expanded attribute indicates a collapsed menu?',
    options: ['"true"', '"false"', '"undefined"', '"null"'],
    correctOption: 1,
    explanation: 'aria-expanded="false" indicates the controlled element is collapsed; "true" means expanded.',
    resource: 'WAI-ARIA 1.2 - aria-expanded'
  },
  {
    key: 'q100',
    domain: 'Creating Accessible Web Solutions',
    stem: 'For a custom checkbox implemented with a <div>, which ARIA role and attribute combination is correct?',
    options: [
      'role="button" aria-pressed="true"',
      'role="checkbox" aria-checked="true|false"',
      'role="option" aria-selected="true|false"',
      'role="switch" aria-live="polite"'
    ],
    correctOption: 1,
    explanation: 'role="checkbox" with aria-checked conveys the checked/unchecked state to AT, mimicking the native checkbox API.',
    resource: 'WAI-ARIA 1.2 - checkbox role'
  },
  {
    key: 'q101',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which HTML element should be used for the main landmark region of a page?',
    options: ['<div id="main">', '<section>', '<main>', '<article>'],
    correctOption: 2,
    explanation: 'The native <main> element has the implicit ARIA landmark role "main", helping AT users navigate directly to primary content.',
    resource: 'HTML5 <main> Element and ARIA landmark navigation'
  },
  {
    key: 'q102',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the purpose of the tabindex="0" attribute?',
    options: [
      'Remove an element from tab order',
      'Make a non-interactive element focusable in natural document order',
      'Give an element the highest tab priority',
      'Prevent keyboard interaction entirely'
    ],
    correctOption: 1,
    explanation: 'tabindex="0" inserts an element into the natural tab order; tabindex="-1" removes it from tab order but allows programmatic focus.',
    resource: 'WCAG Success Criterion 2.1.1 and HTML tabindex guidance'
  },
  {
    key: 'q103',
    domain: 'Creating Accessible Web Solutions',
    stem: 'An inline SVG icon used decoratively should be hidden from assistive technology using:',
    options: [
      'alt=""',
      'aria-hidden="true"',
      'role="img"',
      'display:none on the SVG'
    ],
    correctOption: 1,
    explanation: 'aria-hidden="true" removes the element from the accessibility tree while keeping it visible on screen.',
    resource: 'WAI-ARIA 1.2 - aria-hidden'
  },
  {
    key: 'q104',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which technique provides accessible descriptions (not names) for form fields?',
    options: [
      'aria-label',
      'aria-labelledby',
      'aria-describedby',
      'title'
    ],
    correctOption: 2,
    explanation: 'aria-describedby associates supplementary description text (e.g., hints, validation instructions) with a form control.',
    resource: 'WAI-ARIA 1.2 - aria-describedby'
  },
  {
    key: 'q105',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the accessibility issue with using CSS :before and :after pseudo-elements to display informative text?',
    options: [
      'They slow page rendering',
      'Some AT may not expose CSS-generated content in the accessibility tree',
      'They are not supported in HTML5',
      'They always duplicate content'
    ],
    correctOption: 1,
    explanation: 'CSS pseudo-element content may not be consistently exposed to all AT; real text in the DOM is more reliable.',
    resource: 'WCAG Technique - CSS-generated content accessibility'
  },
  {
    key: 'q106',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A data grid with multiple rows and columns requires programmatic row and column header associations. Which HTML element and attribute achieves this?',
    options: [
      '<td headers="id"> referencing matching <th id="id">',
      'A CSS class on each header cell',
      'aria-label on each cell',
      'A caption element'
    ],
    correctOption: 0,
    explanation: 'The headers attribute on <td> references the IDs of associated <th> elements, enabling correct header-cell relationships.',
    resource: 'WCAG Techniques H43 - Using id and headers attributes for table data cells'
  },
  {
    key: 'q107',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which keyboard interaction should always dismiss a pop-up or tooltip?',
    options: ['Tab', 'Enter', 'Escape', 'Space'],
    correctOption: 2,
    explanation: 'The Escape key should close modals, tooltips, and pop-ups per WAI-ARIA Authoring Practices keyboard patterns.',
    resource: 'WAI-ARIA Authoring Practices Guide - Keyboard Interaction Patterns'
  },
  {
    key: 'q108',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What makes an iframe fully accessible?',
    options: [
      'Setting width and height to 0',
      'Providing a descriptive title attribute and ensuring the content within is accessible',
      'Adding role="iframe"',
      'Using scrolling="no"'
    ],
    correctOption: 1,
    explanation: 'The title attribute on <iframe> describes its purpose; the content within must also meet accessibility requirements.',
    resource: 'WCAG Technique H64 - Using the title attribute of the frame element'
  },
  {
    key: 'q109',
    domain: 'Creating Accessible Web Solutions',
    stem: 'How should a "required" field constraint be exposed programmatically?',
    options: [
      'Visually with a red border only',
      'Using the required HTML attribute or aria-required="true"',
      'By setting placeholder text only',
      'Using a hidden element'
    ],
    correctOption: 1,
    explanation: 'The required attribute or aria-required="true" communicates the constraint to AT.',
    resource: 'WCAG 2.2 Success Criterion 3.3.2 (Labels or Instructions)'
  },
  {
    key: 'q110',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What happens when a keyboard user navigates to a custom slider with only arrow keys defined but no Home/End keys?',
    options: [
      'It fully meets WCAG keyboard requirements',
      'It may fail to provide all expected keyboard interactions per WAI-ARIA slider pattern',
      'It is acceptable if mouse users work correctly',
      'No impact because sliders are exempt from keyboard requirements'
    ],
    correctOption: 1,
    explanation: 'The WAI-ARIA slider pattern specifies Home, End, Page Up/Down in addition to arrow keys for full keyboard operability.',
    resource: 'WAI-ARIA Authoring Practices - Slider Pattern'
  },
  {
    key: 'q111',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which CSS approach ensures text remains accessible when a user\'s system font size is increased?',
    options: [
      'Set all font sizes in px',
      'Use relative units such as em or rem for font sizes',
      'Lock font sizes with !important',
      'Use vw units only'
    ],
    correctOption: 1,
    explanation: 'Relative units (em, rem) scale with user preferences, while px overrides them.',
    resource: 'WCAG 2.2 Success Criterion 1.4.4 (Resize Text)'
  },
  {
    key: 'q112',
    domain: 'Creating Accessible Web Solutions',
    stem: 'In a tab widget, which ARIA roles correctly identify the container, individual tabs, and tab panel?',
    options: [
      'role="list", role="listitem", role="region"',
      'role="tablist", role="tab", role="tabpanel"',
      'role="menu", role="menuitem", role="dialog"',
      'role="navigation", role="option", role="status"'
    ],
    correctOption: 1,
    explanation: 'The WAI-ARIA tab pattern uses tablist, tab, and tabpanel roles to correctly communicate the widget semantics to AT.',
    resource: 'WAI-ARIA Authoring Practices - Tabs Pattern'
  },
  {
    key: 'q113',
    domain: 'Creating Accessible Web Solutions',
    stem: 'A PDF document must be tagged. What does "tagging" a PDF mean?',
    options: [
      'Adding metadata keywords for SEO',
      'Embedding logical document structure (headings, paragraphs, lists) that AT can interpret',
      'Applying digital rights management',
      'Compressing the file for smaller size'
    ],
    correctOption: 1,
    explanation: 'Tagged PDFs expose reading order, structure, and semantics so screen readers can navigate and read content correctly.',
    resource: 'PDF Accessibility - Tagged PDF Guidance'
  },
  {
    key: 'q114',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the first rule of ARIA?',
    options: [
      'Use ARIA roles on every element',
      'If a native HTML element can do the job, use it instead of adding ARIA',
      'ARIA attributes are mandatory for all interactive elements',
      'ARIA should always override native semantics'
    ],
    correctOption: 1,
    explanation: 'The first rule of ARIA use is: use a native HTML element or attribute with the semantics you require if possible.',
    resource: 'W3C ARIA in HTML - First Rule of ARIA'
  },

  // ── Testing and QA ────────────────────────────────────────────────────────
  {
    key: 'q115',
    domain: 'Identifying Accessibility Issues',
    stem: 'Which testing strategy is most appropriate for accessibility validation?',
    options: [
      'Automated testing only',
      'Manual testing only',
      'A combined approach using automated checks, manual expert review, and assistive technology testing',
      'No testing after release'
    ],
    correctOption: 2,
    explanation: 'Automated tools catch only a subset of issues; manual and AT testing are required for broader coverage.',
    resource: 'IAAP WAS Body of Knowledge - Testing and Validation'
  },
  {
    key: 'q116',
    domain: 'Identifying Accessibility Issues',
    stem: 'What is a primary limitation of automated accessibility scanners?',
    options: [
      'They cannot run in CI pipelines',
      'They detect every issue with perfect accuracy',
      'They cannot reliably judge context-dependent usability and some semantic correctness',
      'They only support static websites'
    ],
    correctOption: 2,
    explanation: 'Many accessibility outcomes depend on context and user experience beyond machine-detectable rules.',
    resource: 'W3C Accessibility Evaluation Resources'
  },
  {
    key: 'q117',
    domain: 'Identifying Accessibility Issues',
    stem: 'What should be included in an accessibility defect report to support remediation?',
    options: [
      'Only a screenshot',
      'Issue description, impacted standard criterion, reproduction steps, expected behavior, and severity/impact',
      'Only browser version',
      'Only a pass/fail label'
    ],
    correctOption: 1,
    explanation: 'Actionable reports tie issues to standards and provide reproduction and expected results.',
    resource: 'Accessibility QA Reporting Practices'
  },
  {
    key: 'q118',
    domain: 'Identifying Accessibility Issues',
    stem: 'During keyboard testing, focus order appears illogical. Which WCAG concept is most relevant?',
    options: ['Meaningful Sequence', 'Non-text Content', 'Time-based Media', 'Parsing'],
    correctOption: 0,
    explanation: 'Focus and reading order should preserve meaning and operability.',
    resource: 'WCAG 2.2 Success Criteria 1.3.2 and 2.4.3'
  },
  {
    key: 'q119',
    domain: 'Identifying Accessibility Issues',
    stem: 'Why include users with disabilities in usability studies when possible?',
    options: [
      'To replace all standards-based testing',
      'To gather authentic interaction feedback and discover barriers that scripted checks may miss',
      'To reduce sample size to one participant',
      'To avoid documenting findings'
    ],
    correctOption: 1,
    explanation: 'Involving users with disabilities improves product fitness and reveals practical barriers.',
    resource: 'Inclusive Research and User Testing Guidance'
  },
  {
    key: 'q120',
    domain: 'Identifying Accessibility Issues',
    stem: 'What percentage of WCAG success criteria can typically be detected by automated tools alone?',
    options: ['100%', '80%', '30–40%', '10%'],
    correctOption: 2,
    explanation: 'Research consistently shows automated tools catch roughly 30–40% of WCAG issues; the rest require human judgment.',
    resource: 'W3C - How to Use Automated Testing Tools for Accessibility'
  },
  {
    key: 'q121',
    domain: 'Identifying Accessibility Issues',
    stem: 'Which screen reader + browser pairing is most commonly used in professional accessibility testing on Windows?',
    options: [
      'TalkBack + Safari',
      'JAWS or NVDA + Chrome or Firefox',
      'VoiceOver + Edge',
      'Narrator + Firefox'
    ],
    correctOption: 1,
    explanation: 'JAWS and NVDA with Chrome or Firefox represent the most widely used combinations for professional Windows screen reader testing.',
    resource: 'WebAIM Screen Reader User Survey'
  },
  {
    key: 'q122',
    domain: 'Identifying Accessibility Issues',
    stem: 'When testing color contrast, what tool capability is most important?',
    options: [
      'The ability to automatically write HTML',
      'The ability to sample foreground and background colors and calculate the contrast ratio',
      'Integration with version control',
      'The ability to translate pages'
    ],
    correctOption: 1,
    explanation: 'Contrast checkers must measure actual foreground and background color values and compute the WCAG contrast ratio formula.',
    resource: 'WCAG 2.2 Success Criterion 1.4.3 - Contrast Testing Guidance'
  },
  {
    key: 'q123',
    domain: 'Identifying Accessibility Issues',
    stem: 'Which browser developer tool feature is most useful for quickly inspecting the accessibility tree?',
    options: [
      'Network tab',
      'Accessibility panel (showing accessible names, roles, and properties)',
      'Console log',
      'Source map viewer'
    ],
    correctOption: 1,
    explanation: 'Browser accessibility panels expose the computed accessible name, role, and ARIA properties for selected elements.',
    resource: 'Chrome DevTools Accessibility Reference'
  },
  {
    key: 'q124',
    domain: 'Identifying Accessibility Issues',
    stem: 'A zero-defect automated scan does NOT mean:',
    options: [
      'The page has no code errors',
      'The page is fully accessible',
      'The automated tool ran successfully',
      'The HTML is well-formed'
    ],
    correctOption: 1,
    explanation: 'A clean automated scan means only that the tool found no machine-detectable issues; many accessibility issues require human review.',
    resource: 'W3C Accessibility Evaluation Resources'
  },
  {
    key: 'q125',
    domain: 'Identifying Accessibility Issues',
    stem: 'What is the purpose of the axe accessibility engine?',
    options: [
      'It generates accessible HTML automatically',
      'It identifies accessibility rule violations in web content and returns detailed results',
      'It converts PDFs to HTML',
      'It trains screen reader users'
    ],
    correctOption: 1,
    explanation: 'Axe is a widely used open-source accessibility testing engine used in browsers, CLIs, and CI pipelines.',
    resource: 'Deque axe Accessibility Engine'
  },
  {
    key: 'q126',
    domain: 'Identifying Accessibility Issues',
    stem: 'What does "keyboard trap" mean in accessibility testing?',
    options: [
      'A keyboard shortcut that duplicates a gesture',
      'Focus becoming stuck in a component with no way to navigate away using keyboard alone',
      'A sticky key accessibility feature',
      'A testing shortcut that records keystrokes'
    ],
    correctOption: 1,
    explanation: 'SC 2.1.2 (No Keyboard Trap) requires that keyboard focus can always be moved away from any component using standard keys.',
    resource: 'WCAG 2.2 Success Criterion 2.1.2 (No Keyboard Trap)'
  },
  {
    key: 'q127',
    domain: 'Identifying Accessibility Issues',
    stem: 'To test WCAG 1.4.10 (Reflow), a tester should:',
    options: [
      'Switch the browser language to Spanish',
      'Zoom the browser to 400% and verify no horizontal scrolling is needed for text',
      'Disable CSS and check layout',
      'Increase font weight to bold'
    ],
    correctOption: 1,
    explanation: 'Testing Reflow requires zooming to 400% (simulating 320 CSS pixels width) and verifying all content is readable without horizontal scrolling.',
    resource: 'WCAG 2.2 Success Criterion 1.4.10 (Reflow) - Testing Guidance'
  },
  {
    key: 'q128',
    domain: 'Identifying Accessibility Issues',
    stem: 'Which type of accessibility audit provides the most thorough findings?',
    options: [
      'Automated scan only',
      'Code review only',
      'Expert manual evaluation combining code review, AT testing, and standards mapping',
      'User satisfaction survey'
    ],
    correctOption: 2,
    explanation: 'A comprehensive expert audit combines automated tools, manual code review, AT interaction testing, and explicit WCAG success criteria mapping.',
    resource: 'IAAP WAS Body of Knowledge - Evaluation Approaches'
  },
  {
    key: 'q129',
    domain: 'Identifying Accessibility Issues',
    stem: 'How should the presence and quality of captions be evaluated?',
    options: [
      'Automated word count check',
      'Manual review for accuracy, synchronization, and speaker identification',
      'Checking file size only',
      'Verifying file format only'
    ],
    correctOption: 1,
    explanation: 'Caption quality requires human review of accuracy, timing, identification of speakers, and sound descriptions.',
    resource: 'WCAG 2.2 Success Criterion 1.2.2 (Captions - Prerecorded) - Testing'
  },
  {
    key: 'q130',
    domain: 'Identifying Accessibility Issues',
    stem: 'During AT testing with VoiceOver on iOS, which gesture reads the next item?',
    options: ['Three-finger swipe up', 'Single swipe right', 'Double tap', 'Pinch out'],
    correctOption: 1,
    explanation: 'A single swipe right moves VoiceOver focus to the next element; swipe left goes to the previous element.',
    resource: 'Apple VoiceOver Gestures Reference'
  },
  {
    key: 'q131',
    domain: 'Identifying Accessibility Issues',
    stem: 'When documenting an accessibility finding as "Needs Review", the evaluator means:',
    options: [
      'The issue is confirmed as a violation',
      'An automated tool flagged it but human judgment is required to confirm or dismiss it',
      'The issue is out of scope',
      'Testing should be skipped'
    ],
    correctOption: 1,
    explanation: '"Needs Review" indicates a suspected issue that requires expert interpretation of context before confirming as a defect.',
    resource: 'W3C Accessibility Evaluation Resources'
  },
  {
    key: 'q132',
    domain: 'Identifying Accessibility Issues',
    stem: 'What is the primary purpose of a "walkthrough" evaluation method in accessibility?',
    options: [
      'To test servers for uptime',
      'To systematically evaluate representative user journeys against accessibility criteria',
      'To check design mockups for color palettes',
      'To run automated scans in parallel'
    ],
    correctOption: 1,
    explanation: 'A structured walkthrough follows key user tasks, checking each step against accessibility criteria using manual and AT techniques.',
    resource: 'IAAP WAS Body of Knowledge - Accessibility Auditing Methods'
  },
  {
    key: 'q133',
    domain: 'Identifying Accessibility Issues',
    stem: 'What is WCAG-EM?',
    options: [
      'An accessibility enforcement mechanism used by courts',
      'A W3C methodology for evaluating website conformance to WCAG',
      'An ARIA extension for error messages',
      'A browser plugin for contrast checking'
    ],
    correctOption: 1,
    explanation: 'WCAG-EM (Website Accessibility Conformance Evaluation Methodology) provides a structured process for evaluating conformance at scale.',
    resource: 'W3C WCAG-EM Evaluation Methodology'
  },
  {
    key: 'q134',
    domain: 'Identifying Accessibility Issues',
    stem: 'Which WCAG success criterion is specifically tested by turning off CSS and checking that content order is logical?',
    options: [
      'SC 1.3.3 (Sensory Characteristics)',
      'SC 1.3.2 (Meaningful Sequence)',
      'SC 2.4.3 (Focus Order)',
      'SC 3.1.1 (Language of Page)'
    ],
    correctOption: 1,
    explanation: 'SC 1.3.2 (Meaningful Sequence) ensures the reading order in the DOM preserves meaning; disabling CSS is a common check.',
    resource: 'WCAG 2.2 Success Criterion 1.3.2 (Meaningful Sequence)'
  },
  {
    key: 'q135',
    domain: 'Identifying Accessibility Issues',
    stem: 'An evaluator discovers a third-party widget on a page that fails WCAG. Who is responsible for remediating it?',
    options: [
      'The widget vendor only',
      'The page owner, who should work with the vendor or seek an alternative accessible component',
      'The browser vendor',
      'W3C'
    ],
    correctOption: 1,
    explanation: 'The page owner is responsible for WCAG conformance of the full page; if third-party content fails, the owner must remediate, replace, or document a partial conformance claim.',
    resource: 'WCAG Understanding Conformance Requirements'
  },
  {
    key: 'q136',
    domain: 'Identifying Accessibility Issues',
    stem: 'Which accessibility testing scenario requires a real screen reader rather than a DOM inspection tool?',
    options: [
      'Checking whether a heading is marked with <h2>',
      'Verifying that a screen reader announces a live region update in real time',
      'Counting the number of links on a page',
      'Measuring font size in pixels'
    ],
    correctOption: 1,
    explanation: 'Live region behavior depends on AT implementation and timing; only real AT testing can verify the announcement experience.',
    resource: 'WAI-ARIA - Live Regions Testing Guidance'
  },
  {
    key: 'q137',
    domain: 'Identifying Accessibility Issues',
    stem: 'WAVE (Web Accessibility Evaluation Tool) identifies issues by:',
    options: [
      'Running a full legal compliance audit',
      'Injecting visual icons and a sidebar into the page showing detected errors, alerts, and structural information',
      'Generating an ARIA-compliant version of the page automatically',
      'Providing a screen reader simulation'
    ],
    correctOption: 1,
    explanation: 'WAVE overlays icons and provides a sidebar showing errors, alerts, features, and structural elements detected on the page.',
    resource: 'WebAIM WAVE Tool Documentation'
  },
  {
    key: 'q138',
    domain: 'Identifying Accessibility Issues',
    stem: 'What is a "regression test" in the context of accessibility?',
    options: [
      'A test that only runs at project inception',
      'A test that verifies previously fixed accessibility issues have not been reintroduced',
      'A backward-compatibility check for older browsers',
      'A test that only checks Level A criteria'
    ],
    correctOption: 1,
    explanation: 'Accessibility regression tests are critical in CI pipelines to catch issues that resurface after code changes.',
    resource: 'Accessibility in CI/CD - Regression Testing'
  },

  // ── Program Management ────────────────────────────────────────────────────
  {
    key: 'q139',
    domain: 'Remediating Issues',
    stem: 'Which role is most responsible for embedding accessibility requirements into procurement and vendor contracts?',
    options: ['Finance only', 'Product and procurement stakeholders with accessibility governance support', 'Interns only', 'No role is needed'],
    correctOption: 1,
    explanation: 'Accessibility must be integrated into procurement lifecycle with accountable stakeholders.',
    resource: 'IAAP WAS Body of Knowledge - Organizational Integration'
  },
  {
    key: 'q140',
    domain: 'Remediating Issues',
    stem: 'What is the strongest KPI for sustained accessibility maturity?',
    options: [
      'Number of decorative icons on homepage',
      'Percentage of releases meeting defined accessibility quality gates over time',
      'Number of ad campaigns launched',
      'Total lines of code'
    ],
    correctOption: 1,
    explanation: 'Maturity is demonstrated through repeatable process outcomes, not cosmetic metrics.',
    resource: 'Accessibility Program Metrics Guidance'
  },
  {
    key: 'q141',
    domain: 'Remediating Issues',
    stem: 'What is the best first response when a critical accessibility issue is found in production?',
    options: [
      'Ignore until next major redesign',
      'Triage impact, provide temporary workaround/communication, and prioritize remediation',
      'Delete the feature permanently without review',
      'Stop all unrelated development indefinitely'
    ],
    correctOption: 1,
    explanation: 'Effective incident response balances urgency, mitigation, and structured remediation.',
    resource: 'Accessibility Incident Management Practices'
  },
  {
    key: 'q142',
    domain: 'Remediating Issues',
    stem: 'Which policy statement is most aligned with an accessibility-first culture?',
    options: [
      'Accessibility is optional unless customers complain',
      'Accessibility requirements are integrated into definition of done and release governance',
      'Accessibility is only design team responsibility',
      'Accessibility testing happens after launch only'
    ],
    correctOption: 1,
    explanation: 'Embedding accessibility in quality gates institutionalizes responsibility across teams.',
    resource: 'IAAP WAS Body of Knowledge - Governance'
  },
  {
    key: 'q143',
    domain: 'Remediating Issues',
    stem: 'What is the key purpose of an accessibility statement published by an organization?',
    options: [
      'To guarantee legal immunity',
      'To communicate commitment, known limitations, standards targets, and contact paths for feedback',
      'To replace internal testing',
      'To list unrelated marketing goals'
    ],
    correctOption: 1,
    explanation: 'Public statements set expectations and provide accountability and support channels.',
    resource: 'W3C Accessibility Statement Generator Guidance'
  },
  {
    key: 'q144',
    domain: 'Remediating Issues',
    stem: 'What is an "accessibility champion" in an organization?',
    options: [
      'A legal representative who handles ADA lawsuits',
      'An embedded advocate within a team who promotes accessibility practices and provides peer support',
      'An external auditor hired for annual reviews',
      'A regulatory body that certifies products'
    ],
    correctOption: 1,
    explanation: 'Champions are embedded advocates who build accessibility knowledge and culture within their teams.',
    resource: 'IAAP WAS Body of Knowledge - Organizational Culture'
  },
  {
    key: 'q145',
    domain: 'Remediating Issues',
    stem: 'What is the best approach when prioritizing accessibility remediation of a large backlog?',
    options: [
      'Fix cosmetic issues first',
      'Prioritize by severity of impact on users with disabilities and frequency of use of the affected feature',
      'Fix the easiest issues first regardless of impact',
      'Wait for a full redesign'
    ],
    correctOption: 1,
    explanation: 'Impact-based prioritization ensures the most harmful barriers for users with disabilities are resolved first.',
    resource: 'Accessibility Remediation Prioritization Guidance'
  },
  {
    key: 'q146',
    domain: 'Remediating Issues',
    stem: 'Why is accessibility training important for all team members, not just developers?',
    options: [
      'All team members write code and must know HTML',
      'Accessibility issues can be introduced in content, design, QA, and management decisions, not only code',
      'Legal liability is equal across all roles',
      'Training replaces the need for technical accessibility standards'
    ],
    correctOption: 1,
    explanation: 'Designers, content authors, testers, and managers all make decisions that affect accessibility; cross-team training prevents upstream defects.',
    resource: 'IAAP WAS Body of Knowledge - Training and Awareness'
  },
  {
    key: 'q147',
    domain: 'Remediating Issues',
    stem: 'What is the purpose of an "accessibility roadmap" in an organization?',
    options: [
      'A legal document for court filings',
      'A time-phased plan outlining goals, milestones, and resources for improving accessibility maturity',
      'A marketing strategy for disability outreach',
      'A replacement for technical testing'
    ],
    correctOption: 1,
    explanation: 'An accessibility roadmap provides structured direction, accountability, and visibility for continuous improvement.',
    resource: 'IAAP WAS Body of Knowledge - Accessibility Program Planning'
  },
  {
    key: 'q148',
    domain: 'Remediating Issues',
    stem: 'Which accessibility metric best indicates whether accessibility is being addressed in the design phase?',
    options: [
      'Number of post-release defects',
      'Percentage of design reviews that include accessibility acceptance criteria',
      'Total AT users on the platform',
      'Lines of accessibility-related code comments'
    ],
    correctOption: 1,
    explanation: 'Shifting accessibility left means catching issues in design; tracking design review coverage is a leading indicator of shift-left maturity.',
    resource: 'IAAP WAS Body of Knowledge - Shift-Left Accessibility'
  },
  {
    key: 'q149',
    domain: 'Remediating Issues',
    stem: 'What is the relationship between accessibility and usability?',
    options: [
      'They are the same thing',
      'Accessibility focuses on meeting technical standards; usability focuses on ease of use — both are needed for inclusive products',
      'Usability testing replaces accessibility testing',
      'Accessibility only applies to AT users while usability applies to all users'
    ],
    correctOption: 1,
    explanation: 'Accessibility and usability are complementary; a product can meet WCAG technically but still be hard to use; holistic evaluation addresses both.',
    resource: 'IAAP WAS Body of Knowledge - Accessibility and Usability'
  },
  {
    key: 'q150',
    domain: 'Remediating Issues',
    stem: 'When evaluating third-party software for procurement, which document should vendors be asked to provide?',
    options: [
      'Their privacy policy',
      'A Voluntary Product Accessibility Template (VPAT) or Accessibility Conformance Report (ACR)',
      'Their net promoter score',
      'A list of supported browsers'
    ],
    correctOption: 1,
    explanation: 'VPATs/ACRs document the vendor\'s accessibility conformance, helping procurement teams assess risk.',
    resource: 'ITI VPAT Guidance - Procurement'
  },
  {
    key: 'q151',
    domain: 'Remediating Issues',
    stem: 'An organization commits to a "WCAG 2.1 Level AA" target. What does this commitment entail?',
    options: [
      'Meeting only the Level A criteria',
      'Meeting all Level A and Level AA success criteria in WCAG 2.1',
      'Meeting all Level A, AA, and AAA criteria',
      'Using only WAI-ARIA without HTML semantics'
    ],
    correctOption: 1,
    explanation: 'WCAG conformance levels are cumulative; committing to AA requires satisfying all A and AA success criteria.',
    resource: 'WCAG 2.1 Understanding Conformance'
  },
  {
    key: 'q152',
    domain: 'Remediating Issues',
    stem: 'Which of the following best describes a "feedback loop" in an accessibility program?',
    options: [
      'A JavaScript event listener for form errors',
      'A mechanism for users with disabilities to report issues and for the organization to respond and track resolution',
      'A CI/CD pipeline configuration',
      'An annual survey sent to all employees'
    ],
    correctOption: 1,
    explanation: 'User feedback channels allow real-world barriers to be reported and addressed, complementing internal testing.',
    resource: 'W3C Accessibility Statement - Feedback Mechanism Guidance'
  },
  {
    key: 'q153',
    domain: 'Remediating Issues',
    stem: 'What is the typical first step in an organizational accessibility maturity assessment?',
    options: [
      'Immediately fix all found defects',
      'Baseline the current state across people, process, and technology dimensions',
      'Hire an external law firm',
      'Replace all legacy systems'
    ],
    correctOption: 1,
    explanation: 'A maturity assessment begins with baselining current capabilities to identify gaps and prioritize improvements.',
    resource: 'IAAP WAS Body of Knowledge - Accessibility Maturity Models'
  },
  {
    key: 'q154',
    domain: 'Remediating Issues',
    stem: 'How does embedding accessibility in the "definition of done" benefit a development team?',
    options: [
      'It allows teams to skip testing',
      'It makes accessibility a non-negotiable quality gate, preventing inaccessible code from reaching production',
      'It guarantees AAA conformance automatically',
      'It eliminates the need for accessibility documentation'
    ],
    correctOption: 1,
    explanation: 'Including accessibility in the definition of done integrates it into normal quality processes, reducing the backlog of post-release defects.',
    resource: 'IAAP WAS Body of Knowledge - Agile Accessibility Integration'
  },
  {
    key: 'q155',
    domain: 'Remediating Issues',
    stem: 'Which of the following is NOT a component of an effective organizational accessibility policy?',
    options: [
      'A stated commitment to accessibility standards',
      'Roles and responsibilities for compliance',
      'A guarantee that the product has zero defects',
      'A process for reporting accessibility barriers'
    ],
    correctOption: 2,
    explanation: 'No product can guarantee zero defects. Policies should commit to standards targets, responsibilities, and improvement processes.',
    resource: 'IAAP WAS Body of Knowledge - Accessibility Policy'
  },
  {
    key: 'q156',
    domain: 'Remediating Issues',
    stem: 'What does "shift-left" mean in the context of accessibility?',
    options: [
      'Moving the navigation menu to the left side',
      'Incorporating accessibility requirements and testing earlier in the development lifecycle',
      'Reducing the number of WCAG success criteria under review',
      'Migrating to a left-to-right writing direction for all content'
    ],
    correctOption: 1,
    explanation: 'Shift-left means addressing accessibility early (in design and requirements) rather than testing and fixing only after development, significantly reducing costs.',
    resource: 'IAAP WAS Body of Knowledge - Shift-Left Accessibility'
  },
  {
    key: 'q157',
    domain: 'Remediating Issues',
    stem: 'An organization receives an accessibility complaint from a user. What is the best immediate response?',
    options: [
      'Ignore it if no lawsuit has been filed',
      'Acknowledge receipt, investigate the reported barrier, and communicate a timeline for resolution',
      'Direct the user to a text-only site',
      'Reply that the product passed automated testing'
    ],
    correctOption: 1,
    explanation: 'Prompt acknowledgment, investigation, and communication demonstrate good faith and support a user-centered accessibility culture.',
    resource: 'W3C Accessibility Statement - Feedback Handling'
  },
  {
    key: 'q158',
    domain: 'Remediating Issues',
    stem: 'What is an "exception process" in accessibility governance?',
    options: [
      'A method for bypassing all accessibility requirements',
      'A documented process for tracking known gaps, assigning ownership, and setting remediation timelines',
      'A legal exemption from WCAG',
      'An automated tool that ignores false positives'
    ],
    correctOption: 1,
    explanation: 'Exception processes manage known non-conformances transparently with remediation plans, balancing business needs with accountability.',
    resource: 'IAAP WAS Body of Knowledge - Accessibility Governance'
  },
  {
    key: 'q159',
    domain: 'Remediating Issues',
    stem: 'Which role in an organization typically owns the accessibility policy?',
    options: [
      'Individual developers',
      'Senior leadership or a designated accessibility program owner with executive support',
      'External contractors only',
      'The web hosting provider'
    ],
    correctOption: 1,
    explanation: 'Effective accessibility programs require executive sponsorship and clear ownership at the program level to drive cross-functional accountability.',
    resource: 'IAAP WAS Body of Knowledge - Program Ownership and Governance'
  },
  {
    key: 'q160',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What does "operable" mean in the context of WCAG principles?',
    options: [
      'Content can be parsed by user agents',
      'UI components and navigation must be usable by all users',
      'Information must be visible to all users',
      'Content must load within 3 seconds'
    ],
    correctOption: 1,
    explanation: 'Operable means that all functionality is accessible via keyboard and other input methods, without time-based barriers.',
    resource: 'WCAG 2.2 Principle 2 (Operable)'
  },
  {
    key: 'q161',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which assistive technology is primarily designed for users with motor disabilities who cannot use a standard keyboard or mouse?',
    options: ['Screen reader', 'Refreshable Braille display', 'Switch access device', 'Screen magnifier'],
    correctOption: 2,
    explanation: 'Switch access devices allow users to control computers through one or more switches, enabling access for those with limited motor control.',
    resource: 'IAAP WAS Body of Knowledge - Disabilities and Assistive Technology'
  },
  {
    key: 'q162',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Cognitive accessibility primarily benefits users who have difficulty with:',
    options: ['Perceiving visual content', 'Processing, understanding, or remembering information', 'Hearing audio content', 'Using a mouse'],
    correctOption: 1,
    explanation: 'Cognitive accessibility addresses barriers for people with learning disabilities, memory issues, attention difficulties, and other cognitive differences.',
    resource: 'W3C Cognitive Accessibility Guidance'
  },
  {
    key: 'q163',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the purpose of the "robust" principle in WCAG?',
    options: [
      'To ensure pages load quickly',
      'To ensure content works with current and future user agents, including assistive technologies',
      'To ensure all text has sufficient contrast',
      'To ensure all images have alternative text'
    ],
    correctOption: 1,
    explanation: 'Robust content can be reliably interpreted by a wide variety of user agents, including current and future assistive technologies.',
    resource: 'WCAG 2.2 Principle 4 (Robust)'
  },
  {
    key: 'q164',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What does "Section 508" in the United States govern?',
    options: [
      'Accessibility of consumer products sold commercially',
      'Accessibility of information and communication technology procured, used, or developed by federal agencies',
      'Accessibility of transportation systems',
      'Accessibility of print publications'
    ],
    correctOption: 1,
    explanation: 'Section 508 of the Rehabilitation Act requires that federal agencies\' ICT be accessible to people with disabilities.',
    resource: 'Section 508 Standards'
  },
  {
    key: 'q165',
    domain: 'Creating Accessible Web Solutions',
    stem: 'The EU Web Accessibility Directive (2016/2102) applies to which entities?',
    options: [
      'All private sector websites in the EU',
      'Public sector bodies\' websites and mobile apps in EU member states',
      'Only government portals with more than 1 million visitors',
      'All websites hosted on EU servers'
    ],
    correctOption: 1,
    explanation: 'The EU Web Accessibility Directive requires public sector bodies in EU member states to meet WCAG 2.1 AA for their websites and mobile apps.',
    resource: 'EU Web Accessibility Directive 2016/2102'
  },
  {
    key: 'q166',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the role of the Access Board in U.S. accessibility regulation?',
    options: [
      'Enforces the ADA through litigation',
      'Develops and maintains accessibility guidelines and standards, including Section 508 and ADA guidelines',
      'Audits federal websites for WCAG compliance',
      'Issues accessibility certifications to organizations'
    ],
    correctOption: 1,
    explanation: 'The U.S. Access Board is an independent federal agency that develops accessibility guidelines and standards, such as Section 508 technical standards and ADA Accessibility Guidelines.',
    resource: 'U.S. Access Board Overview'
  },
  {
    key: 'q167',
    domain: 'Creating Accessible Web Solutions',
    stem: 'WCAG 2.1 added success criteria primarily focused on which user groups?',
    options: [
      'Blind users and screen reader users only',
      'Users with cognitive or learning disabilities, users with low vision, and mobile device users',
      'Deaf users only',
      'Users of legacy browsers'
    ],
    correctOption: 1,
    explanation: 'WCAG 2.1 expanded coverage with 17 new success criteria, focusing on cognitive/learning disabilities, low vision, and mobile/touch interactions.',
    resource: 'WCAG 2.1 What\'s New'
  },
  {
    key: 'q168',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is a "skip navigation" link and why is it important?',
    options: [
      'A link that bypasses broken pages; useful for error recovery',
      'A link that allows keyboard users to skip repeated navigation blocks and reach main content directly',
      'A link visible only to screen readers that removes ads',
      'A sitemap link displayed at the top of every page'
    ],
    correctOption: 1,
    explanation: 'Skip navigation links allow keyboard-only users and screen reader users to bypass repetitive navigation menus and jump directly to main content, satisfying WCAG 2.4.1 Bypass Blocks.',
    resource: 'WCAG 2.2 SC 2.4.1 (Bypass Blocks)'
  },
  {
    key: 'q169',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which design pattern best supports users with cognitive disabilities when completing complex tasks?',
    options: [
      'Displaying all steps on a single long page',
      'Breaking the task into smaller, clearly labeled steps with progress indication',
      'Using animations to draw attention to key actions',
      'Using dense, technical language for precision'
    ],
    correctOption: 1,
    explanation: 'Step-by-step wizards with clear progress indicators reduce cognitive load, helping users with cognitive disabilities complete complex tasks without confusion.',
    resource: 'W3C Cognitive Accessibility Guidance'
  },
  {
    key: 'q170',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the minimum recommended touch target size for mobile accessibility according to WCAG 2.5.5?',
    options: ['24x24 CSS pixels', '44x44 CSS pixels', '32x32 CSS pixels', '16x16 CSS pixels'],
    correctOption: 1,
    explanation: 'WCAG 2.5.5 (AAA) recommends a minimum target size of 44x44 CSS pixels to ensure touch targets are large enough for users with motor impairments.',
    resource: 'WCAG 2.2 SC 2.5.5 (Target Size)'
  },
  {
    key: 'q171',
    domain: 'Creating Accessible Web Solutions',
    stem: 'When should a designer avoid using carousels or auto-rotating content?',
    options: [
      'When the site has fewer than 5 pages',
      'When the rotation cannot be paused, stopped, or hidden by users',
      'When the carousel contains images rather than text',
      'When the page uses a sans-serif font'
    ],
    correctOption: 1,
    explanation: 'Auto-updating content that cannot be paused violates WCAG 2.2.2 (Pause, Stop, Hide), which is particularly problematic for users with attention or cognitive disabilities.',
    resource: 'WCAG 2.2 SC 2.2.2 (Pause, Stop, Hide)'
  },
  {
    key: 'q172',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which HTML element should be used to mark up the primary navigation landmark?',
    options: ['<aside>', '<div id="nav">', '<nav>', '<section>'],
    correctOption: 2,
    explanation: 'The <nav> element provides the navigation landmark role, enabling assistive technology users to quickly locate and jump to navigation regions.',
    resource: 'HTML Living Standard - nav element'
  },
  {
    key: 'q173',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What attribute should be added to an <input> element to associate it with a visible label that has id="email-label"?',
    options: ['aria-label="email-label"', 'title="email-label"', 'for="email-label"', 'aria-labelledby="email-label"'],
    correctOption: 3,
    explanation: 'aria-labelledby references the id of an existing visible element to provide the accessible name for the input.',
    resource: 'ARIA in HTML - aria-labelledby'
  },
  {
    key: 'q174',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which CSS property, when set to "none", can inadvertently remove visible focus indicators and harm keyboard accessibility?',
    options: ['visibility', 'outline', 'opacity', 'display'],
    correctOption: 1,
    explanation: 'Setting outline: none removes the default focus ring, making it impossible for keyboard users to see which element has focus, violating WCAG 2.4.7.',
    resource: 'WCAG 2.2 SC 2.4.7 (Focus Visible)'
  },
  {
    key: 'q175',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the purpose of the aria-expanded attribute?',
    options: [
      'To indicate how many items a list contains',
      'To indicate whether a collapsible element (like an accordion or dropdown) is currently open or closed',
      'To expand the size of a form field',
      'To set the tab order of elements'
    ],
    correctOption: 1,
    explanation: 'aria-expanded conveys the state of expandable widgets to assistive technologies, informing users whether content is currently visible or hidden.',
    resource: 'ARIA Authoring Practices Guide - Accordion'
  },
  {
    key: 'q176',
    domain: 'Creating Accessible Web Solutions',
    stem: 'When implementing a custom modal dialog, which technique correctly traps keyboard focus within the dialog while it is open?',
    options: [
      'Setting tabindex="-1" on all elements outside the dialog',
      'Using JavaScript to intercept Tab and Shift+Tab to cycle focus within the dialog',
      'Wrapping the dialog in a <form> element',
      'Adding aria-hidden="true" to the dialog container'
    ],
    correctOption: 1,
    explanation: 'Focus trapping in modals requires JavaScript to intercept keyboard navigation so that Tab and Shift+Tab keep focus within the dialog, per the ARIA modal dialog pattern.',
    resource: 'ARIA Authoring Practices Guide - Dialog (Modal)'
  },
  {
    key: 'q177',
    domain: 'Identifying Accessibility Issues',
    stem: 'Which automated tool is commonly integrated into CI/CD pipelines to flag WCAG violations before deployment?',
    options: ['WAVE', 'axe-core', 'NVDA', 'VoiceOver'],
    correctOption: 1,
    explanation: 'axe-core is an open-source accessibility engine widely integrated into testing frameworks and CI/CD pipelines for automated WCAG violation detection.',
    resource: 'Deque axe-core documentation'
  },
  {
    key: 'q178',
    domain: 'Identifying Accessibility Issues',
    stem: 'What percentage of WCAG issues can typically be caught through automated testing alone?',
    options: ['Nearly 100%', 'About 30–40%', 'About 60–70%', 'Less than 10%'],
    correctOption: 1,
    explanation: 'Automated tools can reliably detect roughly 30–40% of WCAG issues. The rest require manual and user testing to identify.',
    resource: 'WebAIM - Testing Methodologies'
  },
  {
    key: 'q179',
    domain: 'Identifying Accessibility Issues',
    stem: 'When manually testing keyboard navigation, what is the correct sequence to check focus order?',
    options: [
      'Use mouse clicks to verify visual focus indicators',
      'Press Tab to move forward and Shift+Tab to move backward through interactive elements, confirming logical focus order',
      'Use screen reader quick navigation keys only',
      'Check the DOM source order without interacting with the page'
    ],
    correctOption: 1,
    explanation: 'Keyboard testing requires using Tab and Shift+Tab to navigate through interactive elements in sequence, verifying that focus is visible and follows a logical order matching visual layout.',
    resource: 'WebAIM - Keyboard Accessibility'
  },
  {
    key: 'q180',
    domain: 'Identifying Accessibility Issues',
    stem: 'What is the primary reason to include users with disabilities in accessibility testing?',
    options: [
      'It is a legal requirement under all accessibility laws',
      'People with disabilities discover real-world usage barriers that automated tools and sighted testers often miss',
      'It reduces the need for automated testing entirely',
      'It replaces the need for WCAG conformance evaluation'
    ],
    correctOption: 1,
    explanation: 'Users with disabilities interact with content through lived experience and assistive technologies, uncovering practical barriers that automated tools and non-disabled testers cannot reliably detect.',
    resource: 'W3C Involving Users in Evaluating Web Accessibility'
  },
  {
    key: 'q181',
    domain: 'Identifying Accessibility Issues',
    stem: 'Which document type is used to formally report accessibility conformance and known issues for a product?',
    options: ['WCAG Audit Checklist', 'Accessibility Conformance Report (ACR/VPAT)', 'Issue Tracker Export', 'WCAG Quick Reference'],
    correctOption: 1,
    explanation: 'An Accessibility Conformance Report (ACR), often called a VPAT, documents how a product conforms to accessibility standards and identifies known issues.',
    resource: 'ITI VPAT / ACR Framework'
  },
  {
    key: 'q182',
    domain: 'Identifying Accessibility Issues',
    stem: 'Which screen reader and browser combination is most widely used on desktop according to WebAIM Screen Reader User Surveys?',
    options: ['VoiceOver + Safari', 'JAWS + Chrome or Edge', 'NVDA + Firefox', 'Narrator + Edge'],
    correctOption: 1,
    explanation: 'JAWS paired with Chrome or Edge consistently ranks as the most-used desktop screen reader combination in WebAIM\'s annual surveys.',
    resource: 'WebAIM Screen Reader User Survey'
  },
  {
    key: 'q183',
    domain: 'Remediating Issues',
    stem: 'Which approach best ensures accessibility is maintained as a product evolves over time?',
    options: [
      'Conduct one accessibility audit per year',
      'Integrate accessibility checkpoints into design reviews, development sprints, and release criteria',
      'Hire one dedicated accessibility specialist',
      'Test accessibility only after user complaints'
    ],
    correctOption: 1,
    explanation: 'Embedding accessibility into each stage of the product lifecycle (design, build, QA, release) creates a sustainable feedback loop rather than relying on periodic after-the-fact audits.',
    resource: 'IAAP WAS Body of Knowledge - Program Management'
  },
  {
    key: 'q184',
    domain: 'Remediating Issues',
    stem: 'What is the primary purpose of an accessibility roadmap?',
    options: [
      'To list every WCAG success criterion',
      'To document planned remediation priorities, timelines, and resources for improving accessibility over time',
      'To replace the need for accessibility testing',
      'To satisfy a single legal audit requirement'
    ],
    correctOption: 1,
    explanation: 'An accessibility roadmap outlines the organization\'s plan to systematically address gaps, assign responsibility, and track progress toward conformance goals.',
    resource: 'IAAP WAS Body of Knowledge - Program Planning'
  },
  {
    key: 'q185',
    domain: 'Remediating Issues',
    stem: 'What type of training is most effective for helping developers write accessible code?',
    options: [
      'A one-time company-wide presentation',
      'Role-specific, hands-on training integrated into development workflows with practical examples',
      'Reading the full WCAG specification once',
      'Watching recorded webinars without follow-up exercises'
    ],
    correctOption: 1,
    explanation: 'Role-specific training that is practical, contextual, and reinforced through real workflow tasks produces lasting behavior change compared to general awareness sessions.',
    resource: 'IAAP WAS Body of Knowledge - Accessibility Training'
  },
  {
    key: 'q186',
    domain: 'Remediating Issues',
    stem: 'Which metric is most meaningful for tracking progress toward an accessible product?',
    options: [
      'Number of accessibility-related support tickets closed',
      'Percentage of user flows that pass manual and automated accessibility testing against defined criteria',
      'Time spent in accessibility design reviews',
      'Number of employees who attended accessibility training'
    ],
    correctOption: 1,
    explanation: 'Measuring the percentage of user flows passing accessibility criteria directly reflects actual product quality rather than process activity.',
    resource: 'IAAP WAS Body of Knowledge - Metrics and Reporting'
  },
  {
    key: 'q187',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which WCAG principle is most directly concerned with making text content readable and understandable?',
    options: ['Perceivable', 'Operable', 'Understandable', 'Robust'],
    correctOption: 2,
    explanation: 'The Understandable principle (Principle 3) addresses readability, language of page, predictable behavior, and error identification to ensure users can comprehend content.',
    resource: 'WCAG 2.2 Principle 3 (Understandable)'
  },
  {
    key: 'q188',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is an "accessibility conformance claim" under WCAG?',
    options: [
      'A legal certification issued by the W3C',
      'A statement that a page or set of pages meets a specified WCAG conformance level',
      'A government-issued compliance certificate',
      'A vendor promise to fix issues within 30 days'
    ],
    correctOption: 1,
    explanation: 'A WCAG conformance claim is an optional but recommended statement declaring which pages meet a specific conformance level (A, AA, or AAA).',
    resource: 'WCAG 2.2 Understanding Conformance'
  },
  {
    key: 'q189',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which principle of inclusive design encourages creating one solution that works for the widest range of users rather than separate "accessible" versions?',
    options: ['Graceful degradation', 'Universal Design', 'Progressive enhancement', 'Responsive design'],
    correctOption: 1,
    explanation: 'Universal Design aims to create products and environments that are usable by all people without adaptation or specialized design, benefiting everyone.',
    resource: 'NC State University - Principles of Universal Design'
  },
  {
    key: 'q190',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What accessible design consideration is critical when using iconography as the sole means of conveying UI actions?',
    options: [
      'Icons must be at least 32px',
      'Every icon must have a visible text label or accessible name (e.g., tooltip or aria-label)',
      'Icons must be SVG format',
      'Icons must use high-contrast colors only'
    ],
    correctOption: 1,
    explanation: 'Icons without text labels can be ambiguous; providing an accessible name ensures screen reader users understand the purpose of interactive icons.',
    resource: 'WCAG 2.2 SC 1.1.1 (Non-text Content)'
  },
  {
    key: 'q191',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What is the correct ARIA role for a group of radio buttons?',
    options: ['group', 'radiogroup', 'listbox', 'menu'],
    correctOption: 1,
    explanation: 'The radiogroup role wraps a set of radio buttons and allows assistive technologies to convey that the contained radio inputs are related choices.',
    resource: 'ARIA in HTML - radiogroup role'
  },
  {
    key: 'q192',
    domain: 'Creating Accessible Web Solutions',
    stem: 'When an image serves purely as decoration and conveys no information, what is the correct alt attribute value?',
    options: ['"decorative"', '"image"', '""  (empty string)', 'The filename of the image'],
    correctOption: 2,
    explanation: 'An empty alt attribute (alt="") marks an image as decorative, causing screen readers to skip it entirely, preventing unnecessary verbosity.',
    resource: 'WCAG 2.2 SC 1.1.1 Technique H67'
  },
  {
    key: 'q193',
    domain: 'Identifying Accessibility Issues',
    stem: 'What is the "accessibility tree" and why is it important for testing?',
    options: [
      'A CSS selector hierarchy used for styling accessibility features',
      'A representation of accessible objects derived from the DOM that assistive technologies use to interact with content',
      'A database of known accessibility issues across the web',
      'A visual sitemap of accessible pages'
    ],
    correctOption: 1,
    explanation: 'The accessibility tree is built from the DOM by the browser\'s accessibility API and is what screen readers and other AT use; inspecting it reveals what AT users actually experience.',
    resource: 'MDN Web Docs - Accessibility Tree'
  },
  {
    key: 'q194',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which condition is classified as an episodic disability, meaning it fluctuates over time?',
    options: ['Congenital blindness', 'Multiple sclerosis', 'Complete deafness from birth', 'Amputation'],
    correctOption: 1,
    explanation: 'Multiple sclerosis is episodic — symptoms like fatigue, tremor, and vision issues can vary day to day, requiring adaptable and flexible design.',
    resource: 'IAAP WAS Body of Knowledge - Disability Categories'
  },
  {
    key: 'q195',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Under WCAG 2.2, what does "conformance level AA" mean for an organization?',
    options: [
      'The organization meets every level A and level AA success criterion for all covered pages',
      'The organization has passed a government-issued audit',
      'Only 80% of pages need to meet the criteria',
      'The organization has filed a conformance claim with the W3C'
    ],
    correctOption: 0,
    explanation: 'Level AA conformance means all level A and level AA success criteria are satisfied for the covered scope of pages.',
    resource: 'WCAG 2.2 Understanding Conformance'
  },
  {
    key: 'q196',
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which HTML attribute enables a browser\'s built-in spell check for a text input and may also be used to disable it for sensitive fields?',
    options: ['autocorrect', 'spellcheck', 'autocomplete', 'inputmode'],
    correctOption: 1,
    explanation: 'The spellcheck attribute can be set to true or false on text fields; disabling it for sensitive fields (like passwords or codes) prevents unexpected corrections.',
    resource: 'HTML Living Standard - spellcheck attribute'
  },
  {
    key: 'q197',
    domain: 'Identifying Accessibility Issues',
    stem: 'In WCAG evaluation methodology (WCAG-EM), what is the first step of the evaluation process?',
    options: ['Select a sample of web pages', 'Define the evaluation scope', 'Perform automated testing', 'Report findings'],
    correctOption: 1,
    explanation: 'WCAG-EM step 1 is to define the evaluation scope, including the website, conformance target, accessibility support baseline, and additional requirements.',
    resource: 'W3C WCAG-EM Overview'
  },
  {
    key: 'q198',
    domain: 'Creating Accessible Web Solutions',
    stem: 'What term describes the ability of an accessibility feature to function correctly in a specific combination of user agent, assistive technology, and platform?',
    options: ['Compatibility', 'Accessibility support', 'Baseline compliance', 'Progressive enhancement'],
    correctOption: 1,
    explanation: 'Accessibility support refers to whether a particular technique functions with the assistive technologies and user agents that users are likely to encounter.',
    resource: 'WCAG 2.2 Understanding Accessibility Support'
  },
  {
    key: 'q199',
    domain: 'Remediating Issues',
    stem: 'Which practice helps an organization build institutional knowledge about accessibility rather than relying on a single expert?',
    options: [
      'Centralizing all accessibility decisions in one team',
      'Creating an accessibility champions network across product, design, and engineering teams',
      'Outsourcing all accessibility testing',
      'Publishing a quarterly newsletter about accessibility'
    ],
    correctOption: 1,
    explanation: 'A champions network distributes accessibility knowledge and accountability across the organization, reducing single points of failure and embedding the discipline into every team.',
    resource: 'IAAP WAS Body of Knowledge - Building an Accessibility Culture'
  },
  {
    key: 'q200',
    domain: 'Creating Accessible Web Solutions',
    stem: 'When designing forms, which technique helps users with cognitive disabilities recover from validation errors?',
    options: [
      'Removing the erroneous field entirely after submission',
      'Providing descriptive inline error messages next to the field that explain what went wrong and how to fix it',
      'Showing a generic "Error" message at the top of the page',
      'Resetting the entire form on error'
    ],
    correctOption: 1,
    explanation: 'Inline error messages that identify the field and describe the error in plain language help users understand and correct mistakes, satisfying WCAG 3.3.1 and 3.3.3.',
    resource: 'WCAG 2.2 SC 3.3.1 (Error Identification) and SC 3.3.3 (Error Suggestion)'
  }
]

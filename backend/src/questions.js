module.exports = [
  {
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which principle from WCAG requires that content can be presented in different ways without losing meaning?',
    options: ['Operable', 'Perceivable', 'Understandable', 'Robust'],
    correctOption: 1,
    explanation: 'Perceivable requires that information and user interface components are presented in ways users can perceive, including adaptable presentation.',
    resource: 'WCAG 2.2 Guideline 1.3 (Adaptable)'
  },
  {
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
    domain: 'Identifying Accessibility Issues',
    stem: 'A user can only complete a form when color is used to indicate required fields. Which WCAG requirement is most directly violated?',
    options: ['Use of Color', 'Pointer Gestures', 'Focus Visible', 'Page Titled'],
    correctOption: 0,
    explanation: 'WCAG requires that color is not used as the sole visual means of conveying information.',
    resource: 'WCAG 2.2 Success Criterion 1.4.1 (Use of Color)'
  },
  {
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
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which disability category is most associated with the need for captions in prerecorded videos?',
    options: ['Auditory', 'Motor', 'Cognitive', 'Speech'],
    correctOption: 0,
    explanation: 'Captions are primarily essential for users who are deaf or hard of hearing.',
    resource: 'WCAG 2.2 Success Criterion 1.2.2 (Captions - Prerecorded)'
  },
  {
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which standard is the primary global web accessibility standard referenced by many laws and policies?',
    options: ['ISO 9001', 'WCAG', 'PCI DSS', 'SOC 2'],
    correctOption: 1,
    explanation: 'WCAG is widely adopted and referenced by legal and policy frameworks worldwide.',
    resource: 'W3C Web Content Accessibility Guidelines'
  },
  {
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
    domain: 'Creating Accessible Web Solutions',
    stem: 'EN 301 549 is most relevant to accessibility requirements in which region?',
    options: ['European Union', 'Australia only', 'South America only', 'Global private equity firms'],
    correctOption: 0,
    explanation: 'EN 301 549 defines accessibility requirements for ICT procurement in Europe.',
    resource: 'EN 301 549 Accessibility Requirements'
  },
  {
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
    domain: 'Identifying Accessibility Issues',
    stem: 'A modal opens and keyboard focus remains behind it on the page. What is the primary issue?',
    options: ['Color contrast failure', 'Focus management failure', 'Language of page missing', 'No transcript available'],
    correctOption: 1,
    explanation: 'Dialogs should move focus into the modal and trap focus until closed.',
    resource: 'WAI-ARIA Authoring Practices - Dialog Pattern'
  },
  {
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
    domain: 'Creating Accessible Web Solutions',
    stem: 'Which color contrast ratio is required for normal body text under WCAG AA?',
    options: ['3:1', '4.5:1', '7:1', '2:1'],
    correctOption: 1,
    explanation: 'WCAG AA requires at least 4.5:1 for normal text, with exceptions.',
    resource: 'WCAG 2.2 Success Criterion 1.4.3 (Contrast Minimum)'
  },
  {
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
    domain: 'Identifying Accessibility Issues',
    stem: 'During keyboard testing, focus order appears illogical. Which WCAG concept is most relevant?',
    options: ['Meaningful Sequence', 'Non-text Content', 'Time-based Media', 'Parsing'],
    correctOption: 0,
    explanation: 'Focus and reading order should preserve meaning and operability.',
    resource: 'WCAG 2.2 Success Criteria 1.3.2 and 2.4.3'
  },
  {
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
    domain: 'Remediating Issues',
    stem: 'Which role is most responsible for embedding accessibility requirements into procurement and vendor contracts?',
    options: ['Finance only', 'Product and procurement stakeholders with accessibility governance support', 'Interns only', 'No role is needed'],
    correctOption: 1,
    explanation: 'Accessibility must be integrated into procurement lifecycle with accountable stakeholders.',
    resource: 'IAAP WAS Body of Knowledge - Organizational Integration'
  },
  {
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
  }
]

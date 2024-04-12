// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'taylerblee', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['taylerblee/Projects', 'taylerblee/Bioinformatics'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Presentations',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Award-Winning Visual',
          description:
            'I gave a three-minute presentation on Spotted Lanternflies for twenty-five of my peers in STEM. I was voted to have the best-looking slide.',
          imageUrl:
            'https://github.com/taylerblee/taylerblee.github.io/raw/main/pdf/FINAL%20-%20Spotted%20Lanterfly%20Presentation.pdf',
          link: 'https://example.com',
        },
        {
          title: 'Natural History Collection Experience',
          description:
            'As assistant collections manager, I maintained the organization and conservation of the teaching collection at Stanislaus State University! I also made significant contributions to the digital catalog, especially for insects and birds.',
          imageUrl:
            'https://github.com/taylerblee/taylerblee.github.io/raw/main/pdf/RCF%20-%20Poster%20Natural%20History%20Collection.pptx.pdf',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Tayler Blee\'s Website',
    description: '',
    imageURL: '',
  },
  social: {
    inaturalist: 'bumble_blee',
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://taylerblee.github.io',
    phone: '',
    email: 'tblee@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/taylerblee/taylerblee.github.io/raw/main/pdf/DemoCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python', 'R', 'Insect Pinning', 'Ornithological Skin Preparation', 'Natural History Collection Curation'
  ],
  experiences: [
    {
      company: 'California State University, Stanislaus',
      position: 'Collections Manager Assistant',
      from: '2022',
      to: 'Present',
      companyLink: 'https://www.csustan.edu',
    },
    {
      company: 'Modesto Junior College',
      position: 'Math Supplemental Instruction Leader',
      from: '2018',
      to: '2019',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'BS Biology',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Modesto Junior College',
      degree: 'Associates for Transfer',
      from: '2017',
      to: '2020',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'pastel',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
